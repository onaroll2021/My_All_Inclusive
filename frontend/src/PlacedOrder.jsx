import React from 'react';
import { useLocation } from 'react-router-dom';
import './placedorder.css';

function PlacedOrder() {
  const location = useLocation();
  const orderDetails = location.state.order;
  const order_id = location.state.order_id;
  console.log("orderDetails",orderDetails);
  console.log("order_id",order_id);

  return (
    <div>
    <h1>Order Details for Order ID {order_id}</h1>
    <table className="placed-order-table">
      <thead>
        <tr>
          <th>Restaurant ID</th>
          <th>Menu Item ID</th>
          <th>Menu Item Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
          <th>Instructions</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      {orderDetails.map((detail) => (
            <tr key={detail.order_detail_id}>
              <td>{detail.restaurant_id}</td>
              <td>{detail.menu_item_id}</td>
              <td>{detail.menu_item_name}</td>
              <td>{detail.quantity}</td>
              <td>${detail.unit_price}</td>
              <td>${detail.total_price}</td>
              <td>{detail.instruction_to_chef}</td>
              <td>
                <img src={detail.image_url} alt={detail.menu_item_name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlacedOrder;
