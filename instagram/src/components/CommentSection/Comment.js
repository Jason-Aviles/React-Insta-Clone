import React, { Component } from "react";
import AddComment from "./addComments";
import styled from "styled-components";
import PropTypes from "prop-types";

const CommentcontainerStyled = styled.div`
  width: 100%;
  flex-direction: column;
`;
const CommentsStyled = styled.div`
  font-size: 0.9rem;
  /* background: sandybrown; */
  width: 100%;
  margin: 10px;
`;
const CommentsH2styled = styled.h2`
  font-size: 0.9rem;
  margin: 0;
`;
const CommentsSpanstyled = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  margin: 0;
`;

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
      <CommentcontainerStyled>
        {this.state.comments.map(x => {
          //rendering the usernames and text from the comments
          return (
            <CommentsStyled key={x.text}>
              <CommentsH2styled>
                {x.username} <CommentsSpanstyled>{x.text} </CommentsSpanstyled>{" "}
              </CommentsH2styled>
            </CommentsStyled>
          );
        })}
        <AddComment
          //passing the method addComment    to the add componet
          //** this is not  in the map above i only needed one comment box for each
          addComment={this.addComment}
        />
      </CommentcontainerStyled>
    );
  }
}
// protecting data
Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
