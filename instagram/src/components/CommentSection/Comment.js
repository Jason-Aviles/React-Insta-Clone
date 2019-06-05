import React, { Component } from 'react';
import AddComment from './addComments';
import PropTypes from 'prop-types';
class Comments extends Component {
 state={
     comments:this.props.comments
 }

    componentDidMount(){
        this.setState({
            comments:this.props.comments
        })
    }
    addComment = (e, text) => {
        e.preventDefault();
        const newComment = {
            username: "JasonAviles",
            text:text
             
        };
        this.setState({
          comments: [...this.state.comments, newComment]
        });
      };

    render(){
        
    return (
        <div className='comment-container'>
{     this.state.comments.map(
    (x)=>{
 
        return (
            <div className='comments' key={x.text}>
        <h2>{x.username}   <span>{x.text} </span>      </h2>
         
        
        </div> )
    }
)  }<AddComment addComment={this.addComment} comment={this.state.comments}/>
        </div>
    );}
}


Comments.propTypes = {
    comments: PropTypes.array.isRequired
   
  };



export default Comments;
