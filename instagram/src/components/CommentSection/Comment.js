import React from 'react';


const Comments = (props) => {
    
    return (
        <div className='comment-container'>
{      props.comments.map(
    (x)=>{
 
        return (
            <div className='comments' key={x.text}>
        <h2>{x.username}   <span>{x.text} </span>      </h2>
     
        
        </div> )
    }
)  }
        </div>
    );
}

export default Comments;
