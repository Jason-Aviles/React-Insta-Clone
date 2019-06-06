import React, { Component } from "react";

class addComments extends Component {
  state = {
    text: "",
    colorChange: false
  };

  handleColor = () => {
    this.setState({
      //changes the state of on to the opposite true||false
      colorChange: !this.state.colorChange
    });
  };

  handleChanges = e => {
    this.setState({
      //selection the input and puts in wat ever is typed
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.setState({
      //changes the state back to ""
      text: ""
    });
    /// useing the addcomment that was passed from comment.js and puts in the state text from here
    this.props.addComment(e, this.state.text);
  };
  render() {
    return (
      //uses the on submit event on submitItem
      <form className="inputs" onSubmit={this.submitItem}>
        <input
          type="text"
          name="text"
          //useing the handleChanges method
          onChange={this.handleChanges}
          //puts the state into the value
          value={this.state.text}
          placeholder="Add a comment ..."
        />{" "}
        <button
          /// if  the state of collorChange is true do this if not do that
          className={this.state.colorChange ? "btn blue" : "btn black"}
          //when click this.Active will swicth false or true
          onClick={this.handleColor}
        >
          {" "}
          Send{" "}
        </button>{" "}
      </form>
    );
  }
}

export default addComments;
