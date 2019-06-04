import React, { Component } from 'react';

class Icons extends Component {
    state ={
       on:false
    }

    Active =()=>{

        this.setState(
       {    on: !this.state.on,}
        )
       
       }

   render(){
       
    return (
    
               <div className='icons '>
    <i className={this.state.on ? 'fas fa-heart fa-lg red':'far fa-heart fa-sm'}
     onClick={this.Active} >
     </i>   
      <i className="icon far fa-comment">
        
      </i>
     <h3>{ this.state.on ?  this.props.name.likes +1: this.props.name.likes    }  likes</h3>
     </div> 
    
    );}
}

export default Icons;
