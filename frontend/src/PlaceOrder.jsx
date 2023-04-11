import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from './AppContext';
import axios from "axios";
import './PlaceOrder.css';

function PlaceOrder() {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(AppContext);
  const user_id = state.user_id;

  const [cartDetails, setCartDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);  // state variable to control the modal visibility
  const [modalInfo, setModalInfo] = useState({});  // state variable to control the modal info

  const handleShowModal = (id, name, quantity, price, instruction ) => {
    setShowModal(true);
    setModalInfo({id, name, quantity, price, instruction});
  }

  const updateInstruction = async (modalInfo, user_id) => {
    fetch('http://localhost:3000/api/cart/updateInstruction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        menu_item_id: modalInfo.id,
        instruction_to_chef: modalInfo.instruction,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
        alert('Information updated');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to update the information');
      });
  }

  const handleModalInstructionChange = () => {
    const updatedCartDetails = cartDetails.map((item) => {
      if (item.menu_item_id === modalInfo.id) {
        return {...item, instruction_to_chef: modalInfo.instruction};
      }
      return item;
    });
    setCartDetails(updatedCartDetails);
  }  

  const handleModalConfirm = () => {
    updateInstruction(modalInfo, user_id);
    handleModalInstructionChange();
    setShowModal(false);
    // setModalInfo({});
  }

  const handleModalCancel = () => {
    setShowModal(false);
    setModalInfo({});
  }

  const handlePlaceOrder = async (user_id) => {
    fetch(`http://localhost:3000/api/placeorder/${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
        alert("Order confirmed!");
        return response.json();
      })
      .then((data) => {
        dispatch({ type: 'SET_CART', payload: []});
        navigate(`/order/${user_id}`, { state: { order: data.order, order_id: data.order_id } });
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to update the information');
      });
  }

  useEffect(() => {
    if(user_id){
      axios.get(`http://localhost:3000/api/placeorder/${user_id}`).then((res) => {
        setCartDetails(res.data.cartDetails);
        dispatch({type: 'SET_CART', payload: res.data.cart});
      })
      .catch(error => console.error(error));
    }
  }, [user_id]);

  function renderMenuItem(item) {
    return (
      <div key={item.name}>
        <h2>{item.name}</h2>
        <p>Quantity: {item.quantity}</p>
        <p>Total Price: {item.total_price}</p>
        <div>
          <label htmlFor={`instruction-${item.menu_item_id}`}>Instructions to Chef:</label>
          <br />
          <textarea
            type="text"
            id={`instruction-${item.menu_item_id}`}
            value={item.instruction_to_chef}
            readOnly
            rows="4"
            cols="50"
          />
          <button onClick={() => handleShowModal(item.menu_item_id, item.name, item.quantity, item.total_price, item.instruction_to_chef)}>Edit</button>  {/* add a button to open the modal */}
        </div>
        <img className="w-40 h-40 object-cover rounded-full" src={item.image_url} alt={item.name} />
      </div>
    );
  }

  return (
    <div>
      <h1>Place Order</h1>
      <p>Here are the menu items you've selected:</p>
      {cartDetails.map((item) => renderMenuItem(item))}
      {showModal && (
        <div className="modal" >
          <div className="modal-content" style={{}}>
            <h2>Edit Instructions to Chef</h2>
            <h2>{modalInfo.name}</h2>
            <p>Quantity: {modalInfo.quantity}</p>
            <p>Total Price: ${modalInfo.price}</p>
            <textarea
              type="text"
              value={modalInfo.instruction}
              onChange={(e) => setModalInfo({...modalInfo, instruction: e.target.value})}
              rows="4"
              cols="50"
            />
            <button onClick={handleModalConfirm}>Save</button>
            <button onClick={handleModalCancel}>Cancel</button>
          </div>
        </div>
      )}
      <button className="confirm-order-button" onClick={(e) => handlePlaceOrder(user_id)}>Confirm Order</button>
    </div>
  );  
}

export default PlaceOrder;