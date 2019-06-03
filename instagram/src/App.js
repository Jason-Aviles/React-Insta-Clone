import React from 'react';
import Container from './components/PostContainer/Container'
import data  from './components/dummy-data'
import './App.css';

class App extends  React.Component {
  state={
    data:data
  }





  render(){
    
    return (
    <div className="App">

      <Container  data={this.state.data} />
    </div>
  );}
  
}

export default App;
