import React, { Component } from 'react';
import Comment from '../../components/CommentSection/Comment'
import data  from '../dummy-data'
import Icons from './Icons'




class Container extends Component {
state={data:data,
  
  like:0,
  inputAdd:'',
  comments:[],
}




handleOnChange=(e)=>{

  e.preventDefault();
  this.setState({
[e.target.name]:e.target.value
});
}




addComment = (e, text) => {
  e.preventDefault();
  const newComment = {
      username: "JasonAviles",
      text:text
       
  };
  this.setState({
    groceries: [...this.state.comments, newComment]
  });
};

  render(){return (
        <div>
              {data.map(
                 
                  (post,i)=>{
                      console.log(post)
                      return (
                          <div key={post.timestamp} className='container'>

                        <div className='box-header'> <h2>  <img alt={post.id} 
                          src={post.thumbnailUrl}/>
                          {post.username}</h2></div> 


                          <img className='main-img' alt={post.id} 
                          src={post.imageUrl}

                          />

                <Icons key={i} name={post}  />
                         
                          
                           <Comment 
                           key={post.username} 
                           comments={post.comments}
                            />
                     
                           </div>
                         )



                  }
              )}


      
      



              
        </div>
    );}

    

    
}





export default Container;
