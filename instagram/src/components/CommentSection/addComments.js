import React, { Component } from 'react';

class addComments extends Component {
    state={
        text: '',
        colorChange:false

    
  }

handleColor =()=>{

    this.setState(
   {    colorChange: !this.state.colorChange,}
    )
   
   }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = e => {
    e.preventDefault();
    this.setState({ text: '' });
    this.props.addComment(e, this.state.text);
  };
    render() {
        return (
            

            <form className='inputs'  onSubmit={this.submitItem}>
            <input
             type='text' 
             name='text'
              
              onChange={this.handleChanges}
             value={this.state.text}
               placeholder='Add a comment ...'/ > <button className= {this.state.colorChange ? 'btn blue' : 'btn black'}  onClick={this.handleColor} >Send</button>  </form>


        );
    }
}

export default addComments;
