import React, { useState, useReducer } from 'react';

function SearchBar({ state, homeState, dispatch, homeDispatch, handleSearch  }) {

  const handlChange = (e) => {
    homeDispatch({ type: 'SET_SEARCH', payload: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Search"
          value={homeState.search}
          onChange={handlChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SearchBar;


