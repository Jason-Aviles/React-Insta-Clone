import React, { Component } from "react";
import AddComment from "./addComments";
import PropTypes from "prop-types";
class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.setState({
      //changes the state to the app.js data.comments
      comments: this.props.comments
    });
  }
  addComment = (e, text) => {
    //stop the page from loading
    e.preventDefault();
    /// creating a new version of comments and how it will be added
    const newComment = {
      //puts the username when you add a comment to "JasonAviles"
      username: "JasonAviles",
      //sets the text to what wvwer the user writes
      text: text
    };
    this.setState({
      //changes the  comment state when added
      // ***...this.state.comments adds the data from the comment state
      //the newComment that was created above replaces stuff from the ...this.state.comments
      comments: [...this.state.comments, newComment]
    });
  };

  render() {
    return (
      <div className="comment-container">
        {this.state.comments.map(x => {
          //rendering the usernames and text from the comments
          return (
            <div className="comments" key={x.text}>
              <h2>
                {x.username} <span>{x.text} </span>{" "}
              </h2>
            </div>
          );
        })}
        <AddComment
          //passing the method addComment    to the add componet
          //** this is not  in the map above i only needed one comment box for each
          addComment={this.addComment}
        />
      </div>
    );
  }
}
// protecting data
Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
