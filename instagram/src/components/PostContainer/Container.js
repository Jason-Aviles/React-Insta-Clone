import React from 'react';
import Comment from '../CommentSection/Comment'

const Container = (props) => {
  console.log(props.data)
    return (
        <div>
              {props.data.map(
                 
                  (post)=>{
                       console.log(post)
                      return (
                          <div key={post.timestamp} className='container'>

                        <div className='box-header'> <h2>  <img alt={post.id} 
                          src={post.thumbnailUrl}/>
                          {post.username}</h2></div> 


                          <img className='main-img' alt={post.id} 
                          src={post.imageUrl}

                          />

                 <div className='icons'><i className="far fa-heart"></i>    <i className="far fa-comment"></i>
                  <h3>{post.likes}  likes</h3>
                  </div>
                         
                          
                           <Comment key={post.id} comments={post.comments} 



                           /></div>
                         )
                  }
              )}
        </div>
    );
}

export default Container;
