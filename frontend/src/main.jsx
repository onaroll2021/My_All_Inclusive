import React, {useState, useEffect, useReducer} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import AppContext from './AppContext';

const initialState = {
  user_id: null,
  cart: [],
  isLoggedIn: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER_ID':
      return { ...state, user_id: action.payload };
    case 'SET_CART':
      return { ...state, cart: action.payload };
    case 'SET_IS_LOGGED_IN':
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedUser_id = localStorage.getItem('user_id');
    if (storedUser_id) {
      dispatch({ type: 'SET_USER_ID', payload: storedUser_id });
      dispatch({ type: 'SET_IS_LOGGED_IN', payload: true });
    }
  }, []);

  useEffect(() => {
    if (state.user_id) {
      localStorage.setItem('user_id', state.user_id);
    }
  }, [state.user_id]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <App />
    </AppContext.Provider>
  );
};

createRoot(document.getElementById('root')).render(<Index />);


