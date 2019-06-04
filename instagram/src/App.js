import React from 'react';
import Container from './components/PostContainer/Container'
import data  from './components/dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

class App extends  React.Component {
  state={
    data:[],
    
    searchfield:'',
 
 
  }
 componentDidMount(){
   this.setState({
     data:data
   })
 }
 

  onSearchChange = (event)=>{
    this.setState({searchfield: event.target.value})
     
}


  render(){
   const {data,searchfield}= this.state
   console.log(searchfield)
 /*
const filteredData = data.filter(newData =>{
 
  return newData.username.toLowerCase().includes(searchfield.toLowerCase())
})*/
return !data.length ?
<h1>Loading.....</h1>:
     (
      <div>
      
      <div>  <SearchBar onSearchChange={this.onSearchChange}   /></div>
    
    <div className="App">
     
      <Container
    
    
         />
    </div></div>
  );}
  
}

export default App;
