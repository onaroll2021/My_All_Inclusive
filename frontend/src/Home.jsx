import './home.css';
import { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import MenuItems from "./Components/MenuItems.jsx";
import GoogleMap from './Components/GoogleMap.jsx';
import Meeting from './Components/JitsiMeeting.jsx';
import SearchBar from './Components/SearchBar';
import Login from './Login';
import Cart from './Cart';
import AppContext from './AppContext';

const homeInitialState = {
  data: [],
  restId: null,
  search: '',
  filterItem: '',
  username: '',
  password: ''
};

function homeReducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_RESTID':
      return { ...state, restId: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_FILTER_ITEM':
      return { ...state, filterItem: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Home() {

const {state, dispatch} = useContext(AppContext);
const [homeState, homeDispatch] = useReducer(homeReducer, homeInitialState);

useEffect(() => {
  axios.get(`http://localhost:3000/restaurant/${homeState.restId}/menuItems`).then((res) => {
    homeDispatch({ type: 'SET_DATA', payload: res.data.menuItems });
    
  })
    .catch(error => console.error(error));
}, [homeState.restId]);

useEffect(() => {
  if(state.user_id){
    axios.get(`http://localhost:3000/userinfo/${state.user_id}`).then((res) => {
      homeDispatch({ type: 'SET_USERNAME', payload: res.data.username });
    })
    .catch(error => console.error(error));
    axios.get(`http://localhost:3000/cart/${state.user_id}`).then((res) => {
      dispatch({ type: 'SET_CART', payload: res.data.cartSummary });
    })
    .catch(error => console.error(error));
  }
}, [state.user_id]);


const handleSearch = () => {
  const newArray = homeState.data.filter(item => {
    return item.name.toLowerCase().includes(homeState.search.toLowerCase()) || item.description.toLowerCase().includes(homeState.search.toLowerCase())
  })
  homeDispatch({ type: 'SET_FILTER_ITEM', payload: newArray });
}
return (
  <div className="flex flex-col min-h-screen bg-gray-100">
    
    <div className="w-full bg-white border-b border-gray-300">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Hello World!</h1>
        <SearchBar homeState={homeState} dispatch={dispatch} state={state} homeDispatch={homeDispatch} handleSearch={handleSearch} />
        <Login homeState={homeState} dispatch={dispatch} state={state} homeDispatch={homeDispatch} />  
      </div>
    </div>

    <div className="w-full flex-grow bg-gray-100">
      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
        <GoogleMap />
        <div className="flex items-center mb-4 md:mb-0">
          <Meeting />
        </div>
      </div>    
    </div>

    <div className="flex items-center mb-4 md:mb-0">
      <Cart homeState={homeState} dispatch={dispatch} state={state} homeDispatch={homeDispatch} />
    </div>  

    <label htmlFor="restId" className="mr-2">RestID:</label>
    <input 
      value={homeState.restId} 
      type="number" 
      id="restId" 
      name="name" 
      onChange={(e) => homeDispatch({ type: 'SET_RESTID', payload: Number(e.target.value) })}
      className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block md:w-64"
    />

    <div className="w-full bg-white">
      <div className="container mx-auto p-6">
        { homeState.search ? <MenuItems homeState={homeState} dispatch={dispatch} state={state} homeDispatch={homeDispatch}/> : <MenuItems homeState={homeState} dispatch={dispatch} state={state} homeDispatch={homeDispatch} /> }
      </div>
    </div>

  </div> 
)
}

export default Home;