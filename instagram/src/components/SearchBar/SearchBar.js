import React from 'react';

const SearchBar = (props) => {
   console.log(props)
    return (
        <div className='searchbar'>
        <div className='topLeft'>
        <img alt='1' src='https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png'/>
        <h1>Igram</h1>
        </div>
      <input type='search'  placeholder='&#xF002; Search' onChange={props.searchChange}   />

      <div className='topRight'>
      <i className="far fa-compass fa-2x"></i>
      <i className="fab fa-gratipay  fa-2x"></i>
      <i className="far fa-user  fa-2x"></i>
        </div>


        </div>
    );
}

export default SearchBar;


