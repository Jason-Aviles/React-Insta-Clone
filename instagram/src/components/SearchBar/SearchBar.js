import React from 'react';

class SearchBar extends React.Component {

	state = {
		term: ""
	};
onFormSubmit=(e)=>{
  e.preventDefault()
  this.props.onSubmit(this.state.term)
}

   render(){
     console.log(this.state.term)
    return (
        <div className='searchbar'>
        <div className='topLeft'>
        <img alt='1' src='https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png'/>
        <h1>Igram</h1>
        </div>
       <form onSubmit={this.onFormSubmit}  >
      <input
       type='search' 
       name="search"
        placeholder='&#xF002; Search'
         value={this.state.term} 
           onChange={(e)=> this.setState({term:e.target.value}) }  />
</form> 
      <div className='topRight'>
      <i className="far fa-compass fa-2x"></i>
      <i className="fab fa-gratipay  fa-2x"></i>
      <i className="far fa-user  fa-2x"></i>
        </div>


        </div>
    );}
}

export default SearchBar;


