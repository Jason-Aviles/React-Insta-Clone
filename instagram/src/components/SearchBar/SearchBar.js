import React from "react";

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
      <div className="searchbar">
        <div className="topLeft">
          <img
            alt="1"
            src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png"
          />
          <h1>Igram</h1>
        </div>

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

        <div className="topRight">
          <i className="far fa-compass fa-2x" />
          <i className="fab fa-gratipay  fa-2x" />
          <i className="far fa-user  fa-2x" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
