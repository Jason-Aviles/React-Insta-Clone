import React from 'react';
import Container from './components/PostContainer/Container'
import datas  from './components/dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

class App extends  React.Component {
  state={
    data:[],
    
    filteredNames: []
 
 
  }
 componentDidMount(){
   this.setState({
     data:datas
   })
 }
 
 onSearchSubmit=(term)=>{
   console.log(term)
  let names = this.state.data.filter(name =>{
    console.log(name)
  return  name.username.toLowerCase().includes(term.toLowerCase())}
  );

  this.setState({
    filteredNames: names
  });
 }
 


  render(){
 

   

   return  (
      <div>
      <div>  <SearchBar onSubmit={this.onSearchSubmit}   /></div>
    
    <div className="App">
     
      <Container
    data={
						this.state.filteredNames.length > 0
							? this.state.filteredNames
							: this.state.data
					}
    
         />
    </div></div>
  );}
  
}

export default App;
