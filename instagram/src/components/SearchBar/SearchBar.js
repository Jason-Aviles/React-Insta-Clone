import React from "react";
import styled from "styled-components";

const SearchBarstyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid #8080803d;
  background: rgba(199, 199, 199, 0.1);
  position: relative;
    
  input {
    padding: 10px;
    font-family: FontAwesome, "Open Sans", Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    border-radius: 15px;
    width: 50%;
  }
`;




const Topleft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5%;
  img {
    width: 5%;
    border-right: 2px solid #8080803d;
    margin-right: 10px;
    padding-right: 10px;
  }
  h1 {
    font-family: "Pacifico", cursive;
  }
`;

const Topright = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1%;
  i {
    margin-right: 2%;
    cursor: pointer;
  }
`;

class SearchBar extends React.Component {
  state = {
    //term state
    term: ""
  };
  onFormSubmit = e => {
    //fixes search bug must use
    if (this.state.term.length === 1) return this.props.onSubmit("");
    //return the  on submit from your app and put your state term in the ()
    return this.props.onSubmit(this.state.term);
  };

  render() {
    console.log(this.state.term);
    return (
      <SearchBarstyle>
        <Topleft>
          <img
            alt="1"
            src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png"
          />
          <h1>Igram</h1>
        </Topleft>

        <input
          type="search"
          name="search"
          placeholder="&#xF002; Search"
          //value takes in the state props
          value={this.state.term}
          //onchange has an function that changes the state of the term  to anything typedin
          onChange={e => this.setState({ term: e.target.value })}
          //onkeydouwn event that takes the onform submit from this seacrh bar class
          onKeyDown={this.onFormSubmit}
        />

        <Topright>
          <i className="far fa-compass fa-2x" />
          <i className="fab fa-gratipay  fa-2x" />
          <i className="far fa-user  fa-2x" />
        </Topright>
      </SearchBarstyle>
    );
  }
}

export default SearchBar;
