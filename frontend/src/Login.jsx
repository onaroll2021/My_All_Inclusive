import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

function Login({homeState, dispatch, state, homeDispatch}) {

  console.log("login-state", state);
  console.log("login-homeState", homeState);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_IS_LOGGED_IN', payload: false });
    dispatch({ type: 'SET_USER_ID', payload: null });
    dispatch({ type: 'SET_CART', payload: [] });
    localStorage.removeItem('user_id');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { username: homeState.username, password: homeState.password };
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
      const data = await response.json();
      if (data.success) {
        // login successful
        dispatch({ type: 'SET_USER_ID', payload: data.user_id });
        dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });
        // localStorage.setItem('user_id', data.user_id);
      } else {
        // login failed
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (state.isLoggedIn) {
    return (
      <div>
        <p>You are logged in as {homeState.username}!</p>
        <button onClick={(e) => handleLogOut(e)}>Log out</button>
      </div>
    );
  }
  return (
    <>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={homeState.username} onChange={(event) => homeDispatch({ type: 'SET_USERNAME', payload: event.target.value })} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={homeState.password} onChange={(event) => homeDispatch({ type: 'SET_PASSWORD', payload: event.target.value })} />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login;