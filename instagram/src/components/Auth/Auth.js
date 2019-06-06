import React, { Component } from "react";

const Auth = App => Login =>
  class extends Component {
    state = {
      loggedin: false
    };
    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedin: false });
      } else {
        this.setState({ loggedin: true });
      }
    }

    render() {
      if (this.state.loggedin) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default Auth;
