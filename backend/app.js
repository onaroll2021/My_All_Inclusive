const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET, POST, PUT, DELETE'
}));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'database',
  database: 'ALL_INCLUSIVE',
})

app.get('/restaurant/:id/menuItems', (req, res) => {
  const restId = req.params.id;
  connection.query(
    'SELECT * FROM menu_items WHERE restaurant_id = ?',
    [restId],
    (error, results) => {
      if (error) throw error;
      res.json({ menuItems: results });
    }
  );
});

app.get('/cart/:id', (req, res) => {
  const user_id = req.params.id;
  // Summarize total placed in cart by user_id
  const summarizeCartQuery = `SELECT menu_item_id, quantity, price FROM cart WHERE user_id = ?`;
  connection.query(summarizeCartQuery, [user_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to summarize cart total' });
    }
    return res.status(200).json({ message: 'Item added to cart!', cartSummary: result });
  });
});

app.get('/userinfo/:id', (req, res) => {
  const user_id = req.params.id;
  // Summarize total placed in cart by user_id
  const userInfoQuery = `SELECT username FROM users WHERE id = ?`;
  connection.query(userInfoQuery, [user_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to get user_id' });
    }
    return res.status(200).json({ message: 'userinfo get!', username: result[0].username });
  });
});

app.get('/api/placeorder/:id', (req, res) => { 
  const user_id = req.params.id;
  const cartDetailsQuery = 'SELECT menu_items.name, cart.menu_item_id, cart.price AS total_price, cart.quantity, menu_items.price AS unit_price, menu_items.image_url, menu_items.restaurant_id, instruction_to_chef FROM cart JOIN menu_items ON cart.menu_item_id=menu_items.id WHERE user_id = ?';
  connection.query(cartDetailsQuery, [user_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to get user_id' });
    }
    const cartSummary = result.map(item => ({
      "menu_item_id": item.menu_item_id, 
      "price": item.total_price, 
      "quantity": item.quantity,
    }))

    return res.status(200).json({ message: 'successful', cartDetails: result, cartSummary: cartSummary });
  });
})

app.post('/api/placeorder/:id', (req, res) => { 
  const user_id = req.params.id;
  // Insert a new order into the orders table
  const orderInsertQuery = `INSERT INTO placedorders (user_id) VALUES (?)`;
  connection.query(orderInsertQuery, [user_id], (error, result) => {
    if (error) {
      console.error('Error inserting new order:', error);
      res.status(500).json({ error: 'Failed to place order' });
      return;
    }
    console.log("result", result);
    const orderId = result.insertId;
    console.log("orderId", orderId);
    // Get the cart details for the user
    const cartDetailsQuery = `
      SELECT
        menu_items.name,
        cart.menu_item_id,
        cart.price AS total_price,
        cart.quantity,
        menu_items.price AS unit_price,
        menu_items.image_url,
        menu_items.restaurant_id,
        cart.instruction_to_chef
      FROM cart
      JOIN menu_items ON cart.menu_item_id = menu_items.id
      WHERE user_id = ${user_id}
    `;
    connection.query(cartDetailsQuery, (error, results, fields) => {
      if (error) {
        console.error('Error fetching cart details:', error);
        res.status(500).json({ error: 'Failed to fetch cart details' });
        return;
      }
      // console.log("querybeforeinsert-results", results)

      // Insert the cart items into the order_items table
      const orderItemsInsertQuery = `INSERT INTO placedorderdetails (order_id, restaurant_id, menu_item_id, menu_item_name, quantity, total_price, unit_price, instruction_to_chef, image_url) VALUES ?`;
      const orderItemsValues = results.map((item) => [
        orderId,
        item.restaurant_id,
        item.menu_item_id,
        item.name,
        item.quantity,
        item.total_price,
        item.unit_price,
        item.instruction_to_chef,
        item.image_url,
      ]);
      connection.query(orderItemsInsertQuery, [orderItemsValues], (error, results, fields) => {
        if (error) {
          console.error('Error inserting order items:', error);
          res.status(500).json({ error: 'Failed to place order' });
          return;
        }
        // Delete the cart items for the user
        const cartDeleteQuery = `DELETE FROM cart WHERE user_id = ${user_id}`;
        connection.query(cartDeleteQuery, (error, results, fields) => {
          if (error) {
            console.error('Error deleting cart items:', error);
            res.status(500).json({ error: 'Failed to place order' });
            return;
          }
          const orderQuery = `SELECT * FROM placedorderdetails WHERE order_id = ${orderId}`; 
          connection.query(orderQuery, (error, results, fields) => {
            if (error) {
              res.status(500).json({ error: 'Error getting order items' });
              return;
            }  
            res.status(200).json({ message: 'Order placed successfully', order: results, order_id: orderId });
          })
        });
      });
    });
  });
})

app.post('/api/cart/updateInstruction', (req, res) => { 
  const { user_id, menu_item_id, instruction_to_chef } = req.body;
  const cartUpdateQuery = 'UPDATE cart SET instruction_to_chef = ? WHERE user_id = ? AND menu_item_id = ?';
  connection.query(cartUpdateQuery, [instruction_to_chef, user_id, menu_item_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update the instruction backend' });
    }
    return res.status(200).json({ message: 'successful'});
  });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/order/:id', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/register', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await connection.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
    res.send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    connection.execute('SELECT * FROM users WHERE username=? AND password=?', [username, password], (err, rows) => {
      if (rows.length > 0) {
        res.json({ success: true, user_id: rows[0].id });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    })
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.post('/api/cart', async (req, res) => {
  try {
      const { username, restaurant_id, menu_item_id, quantity, price} = req.body;
      const getUserIdQuery = `SELECT id FROM users WHERE username = ?`;
      connection.query(getUserIdQuery, [username], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Failed to add item to cart, user info not correct' });
        }
        const user_id = result[0].id;
        const getCartItemQuery = `SELECT cart_id, quantity FROM cart WHERE user_id = ? AND restaurant_id = ? AND menu_item_id = ?`;
        connection.query(getCartItemQuery, [user_id, restaurant_id, menu_item_id], (err, result) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ message: 'Failed to add item to cart, not able to getItemQuery' });
            }
          if (result.length > 0) {
            // Update the quantity if the user has already placed an order for the specified menu item in the cart
            const cart_id = result[0].cart_id;
            const updatedQuantity = result[0].quantity + quantity;
            const updateCartQuery = `UPDATE cart SET quantity = ?, price = ? WHERE cart_id = ?`;
            const updatedPrice = (updatedQuantity * price / quantity).toFixed(2);
            connection.query(updateCartQuery, [updatedQuantity, updatedPrice, cart_id], (err, result) => {
              if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Failed to update cart, not able to updateCartQuery' });
              }
              // Summarize total placed in cart by user_id
              const summarizeCartQuery = `SELECT menu_item_id, quantity, price FROM cart WHERE user_id = ?`;
              connection.query(summarizeCartQuery, [user_id], (err, result) => {
                if (err) {
                  console.error(err);
                  return res.status(500).json({ message: 'Failed to summarize cart total' });
                }
                return res.status(200).json({ message: 'Item added to cart!', cartSummary: result });
              });
            });
          } else {
            // If the item doesn't exist, insert a new row
            const insertCartQuery = `INSERT INTO cart (user_id, restaurant_id, menu_item_id, quantity, price) VALUES (?, ?, ?, ?, ?)`;
            connection.query(insertCartQuery, [user_id, restaurant_id, menu_item_id, quantity, price], (err, result) => {
              if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Failed to add item to cart' });
              }
              // Summarize total placed in cart by user_id
              const summarizeCartQuery = `SELECT menu_item_id, quantity, price FROM cart WHERE user_id = ?`;
              connection.query(summarizeCartQuery, [user_id], (err, result) => {
                if (err) {
                  console.error(err);
                  return res.status(500).json({ message: 'Failed to summarize cart total' });
                }
                return res.status(200).json({ message: 'Item added to cart!', cartSummary: result });
              });
            })
          }
        })
      })
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.post('/api/cart/handleMinusQuantity', async (req, res) => {
  const { user_id, menu_item_id, quantity } = req.body;
  const  getInfoQuery = 'SELECT restaurant_id, price FROM menu_items WHERE id = ?';
  connection.query(
    getInfoQuery, [menu_item_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to fetch info' });
    }
    const item_price = result[0].price;
    const restaurant_id = result[0].restaurant_id;
    const getCartItemQuery = `SELECT cart_id, quantity FROM cart WHERE user_id = ? AND restaurant_id = ? AND menu_item_id = ?`;
    connection.query(getCartItemQuery, [user_id, restaurant_id, menu_item_id], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Failed to add item to cart, not able to getItemQuery' });
        }
        if (result.length > 0) {
          // Update the quantity if the user has already placed an order for the specified menu item in the cart
          const cart_id = result[0].cart_id;
          const updatedQuantity = result[0].quantity + quantity;
          const updatedPrice = (updatedQuantity * item_price).toFixed(2);
          if (updatedQuantity > 0) {
          const updateCartQuery = `UPDATE cart SET quantity = ?, price = ? WHERE cart_id = ?`;
            connection.query(updateCartQuery, [updatedQuantity, updatedPrice, cart_id], (err, result) => {
              if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Failed to insert into cart' });
              }
              // Summarize total placed in cart by user_id
              const summarizeCartQuery = `SELECT menu_item_id, quantity, price FROM cart WHERE user_id = ?`;
              connection.query(summarizeCartQuery, [user_id], (err, result) => {
                if (err) {
                  console.error(err);
                  return res.status(500).json({ message: 'Failed to summarize cart total' });
                }
                return res.status(200).json({ message: 'updated!', cartSummary: result });
              });
            })
          } else if (updatedQuantity === 0) {
              const deleteCartQuery = `DELETE FROM cart WHERE user_id = ? AND menu_item_id = ?`;
              connection.query(deleteCartQuery, [user_id, menu_item_id], (err, result) => {
              if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Failed to delete from cart' });
              }
              // Summarize total placed in cart by user_id
              const summarizeCartQuery = `SELECT menu_item_id, quantity, price FROM cart WHERE user_id = ?`;
              connection.query(summarizeCartQuery, [user_id], (err, result) => {
                if (err) {
                  console.error(err);
                  return res.status(500).json({ message: 'Failed to summarize cart total' });
                }
                return res.status(200).json({ message: 'Item removed from cart!', cartSummary: result });
              });
           })
          }
        }
      })
    })
})

app.post('/api/cart/handleAddQuantity', async (req, res) => {
  const { user_id, menu_item_id, quantity } = req.body;
  const  getInfoQuery = 'SELECT restaurant_id, price FROM menu_items WHERE id = ?';
  connection.query(
    getInfoQuery, [menu_item_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to fetch info' });
    }
    const item_price = result[0].price;
    const restaurant_id = result[0].restaurant_id;
    const getCartItemQuery = `SELECT cart_id, quantity FROM cart WHERE user_id = ? AND restaurant_id = ? AND menu_item_id = ?`;
    connection.query(getCartItemQuery, [user_id, restaurant_id, menu_item_id], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Failed to add item to cart, not able to getItemQuery' });
        }
      if (result.length > 0) {
        // Update the quantity if the user has already placed an order for the specified menu item in the cart
        const cart_id = result[0].cart_id;
        const updatedQuantity = result[0].quantity + quantity;
        const updatedPrice = (updatedQuantity * item_price).toFixed(2);
        const updateCartQuery = `UPDATE cart SET quantity = ?, price = ? WHERE cart_id = ?`;
        connection.query(updateCartQuery, [updatedQuantity, updatedPrice, cart_id], (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to insert into cart' });
          }
        // Summarize total placed in cart by user_id
          const summarizeCartQuery = `SELECT menu_item_id, quantity, price FROM cart WHERE user_id = ?`;
          connection.query(summarizeCartQuery, [user_id], (err, result) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ message: 'Failed to summarize cart total' });
            }
            return res.status(200).json({ message: 'Item added to cart!', cartSummary: result });
          });
        })
      }
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
