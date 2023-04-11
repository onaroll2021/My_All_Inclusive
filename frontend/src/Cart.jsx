import React, { useState, useReducer } from 'react';

function Cart({ state, homeState, dispatch, homeDispatch }) {

  const [cartItemsShow, setCartItemsShow] = useState(state.cart);

  const handleCartItemsShow = (index, quantity) => {
    // Create a copy of the cartItemsShow array and update the quantity of the menu item
    const newCartItemsShow = [...cartItemsShow];
    newCartItemsShow[index] = {
      ...newCartItemsShow[index],
      quantity: quantity,
    };
    // Update the cartItemsShow state with the new array
    setCartItemsShow(newCartItemsShow);
  };
  const handleAddQuantity = (user_id, menu_item_id, quantity) => {
    fetch('http://localhost:3000/api/cart/handleAddQuantity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        menu_item_id: menu_item_id,
        quantity: quantity
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'SET_CART', payload: data.cartSummary });
      setCartItemsShow(data.cartSummary);
    })
  }

  const handleMinusQuantity = (user_id, menu_item_id, quantity) => {
    if (quantity > 0) {
      fetch('http://localhost:3000/api/cart/handleMinusQuantity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user_id,
          menu_item_id: menu_item_id,
          quantity: -1 * quantity // Pass negative quantity to deduct from cart
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_CART', payload: data.cartSummary });
        setCartItemsShow(data.cartSummary);
      })
    }
  }

  return (
    <div>
      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.cart.map((item, index) => {
            // Create a local state variable for the quantity of the current menu item
            const itemQuantity = cartItemsShow[index]?.quantity ?? item.quantity;
            return (
              <li key={item.menu_item_id}>
                Item ID {item.menu_item_id}<br /> 
                Item Total Quantity ({item.quantity})<br />
                Item Total Price ${item.price}
                <div>
                  <input type="number" value={itemQuantity} onChange={(e) => handleCartItemsShow(index, parseInt(e.target.value, 10))} />
                  <button onClick={() => handleAddQuantity(state.user_id, item.menu_item_id, itemQuantity)}>+</button>
                  <button onClick={() => handleMinusQuantity(state.user_id, item.menu_item_id, itemQuantity)}>-</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Cart;
