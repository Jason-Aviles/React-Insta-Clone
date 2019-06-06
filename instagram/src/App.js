import React from "react";
import Container from "./components/PostContainer/Container";
import datas from "./components/dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import auth from './components/Auth/Auth'
import Login from './components/Login/Login'

class App extends React.Component {
  state = {
    data: [],

    filteredNames: []
  };
  componentDidMount() {
    this.setState({
      data: datas
    });
  }
  ///when used in the searchbar.js it passes the term in the state
  onSearchSubmit = term => {
    console.log(term);
    //filters through the data in the state and creates a new data
    let names = this.state.data.filter(name => {
      console.log(name);
      //returns the usernames     and includes the search in the search js set to lowercase
      return name.username.toLowerCase().includes(term.toLowerCase());
    });

    this.setState({
      //sets the filterNames state to the new filtered data created above
      filteredNames: names
    });
  };

  render() {
    return (
      <div>
        <div>
          {/* passing the onSearchSubmit as porps to searchbar.js*/}
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>

        <div className="App">
          <Container
            data={
              //if the length ofthe filter data === 0
              this.state.filteredNames.length > 0
                ? ///than data ===  this.state.filteredNames
                  this.state.filteredNames
                : ///ifnot than data ===  this.state.data
                  this.state.data
            }
          />
        </div>
      </div>
    );
  }
}


export default auth(App)(Login)