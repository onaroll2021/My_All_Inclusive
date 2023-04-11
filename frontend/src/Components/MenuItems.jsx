import React, { useState, useReducer } from 'react';

function MenuItems({ state, homeState, dispatch, homeDispatch }) {
  const menuItems = Object.values(homeState.data);
  const [quantities, setQuantities] = useState(
    menuItems.reduce((obj, item) => {
      obj[item.id] = 0;
      return obj;
    }, {}));

  const handleQuantityChange = (e, menuItemId) => {
    const newQuantities = { ...quantities };
    newQuantities[menuItemId] = parseInt(e.target.value);
    setQuantities(newQuantities);
  };

  const handleAddToCart = (username, menu_item_id, restaurant_id, item_price, quantities) => {  
    const price = (quantities[menu_item_id] * item_price).toFixed(2); 
    // Make a POST request to the /cart endpoint with the item information
    fetch('http://localhost:3000/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username, // Replace with the user ID of the current user
        restaurant_id: restaurant_id, // Replace with the ID of the current restaurant
        menu_item_id: menu_item_id,
        quantity: quantities[menu_item_id],
        price: price,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: 'SET_CART', payload: data.cartSummary });
        alert('Item added to cart!');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to add item to cart');
      });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {menuItems.map((item, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-gray-700">Price: {item.price}</p>
          <p className="text-gray-700">Description: {item.description}</p>
          <p className="text-gray-700">Category: {item.category}</p>
          <img className="w-full h-48 object-cover" src={item.image_url} alt={item.name} />
          <label>Quantity:
            <input
              type="number"
              value={quantities[item.id]}
              onChange={(e) => handleQuantityChange(e, item.id)}
              min="1"
            />
          </label>
          <button onClick={() => handleAddToCart(homeState.username, item.id, item.restaurant_id, item.price, quantities)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default MenuItems;

