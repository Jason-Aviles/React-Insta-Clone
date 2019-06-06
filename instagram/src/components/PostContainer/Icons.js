import React, { Component } from "react";
import styled from "styled-components";

const IconsStyle = styled.div`
  width: 100%;
  padding: 10px 0;
  i {
    margin-left: 10px;
    cursor: pointer;
  }
  h3 {
    margin: 0 auto;
    margin-left: 10px;
    font-size: 0.9rem;
  }
`;

class Icons extends Component {
  state = {
    on: false
  };

  Active = () => {
    //changes the state of on to the opposite true||false
    this.setState({ on: !this.state.on });
  };

  render() {
    return (
      <IconsStyle>
        <i
          className={
            /// if  the state of on is true do this if not do that
            this.state.on ? "fas fa-heart fa-lg red" : "far fa-heart fa-sm"
          }
          //when click this.Active will swicth false or true
          onClick={this.Active}
        />
        <i className="icon far fa-comment" />
        <h3>
          {// when the top onClick={this.Active} changes  the likes will add one or leave it the same
          this.state.on ? this.props.name.likes + 1 : this.props.name.likes}
          likes
        </h3>
      </IconsStyle>
    );
  }
}

export default Icons;
