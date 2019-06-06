import React, { Component } from "react";
//Hoc        // the prams APP and Login
const Auth = App => Login =>
  class extends Component {
    state = {
      //the loggin state starts false which is the login
      loggedin: false
    };
    componentDidMount() {
      //if theirs no user in the storage return loggined false and dont leave <Login/>
      if (!localStorage.getItem("user")) {
        this.setState({ loggedin: false });
        //if their is return true to the loggied state andgo to <APP/> 
      } else {
        this.setState({ loggedin: true });
      }
    }

    render() {
      //if the logg in state is true return app 
      if (this.state.loggedin) {
        return <App />;
      } else {
       // if is false return login
        return <Login />;
      }
    }
  };

export default Auth;
