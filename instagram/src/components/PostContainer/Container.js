import React, { Component } from "react";
import Comment from "../../components/CommentSection/Comment";

import Icons from "./Icons";
import styled from "styled-components";

const Containerstyle = styled.div`
  background: rgba(199, 199, 199, 0.1);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border: 1px #8080803d solid;
  border-radius: 3px;
  margin: 0 auto;
  margin-top: 10%;
  div {
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  img {
    background: blue;
    width: 100%;
    height: 600px;
  }
`;

const Usernamestyle = styled.h2`
  font-size: 0.9rem;
  display: flex;
  margin-left: 10px;
  align-items: center;
  img {
    width: 10%;
    border-radius: 50%;
    margin-right: 10px;
    height: auto;
  }
`;

const MainImgStyled = styled.img`
  width: 100%;
  height: 600px;
`;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidUpdate(prevProps) {
    // if prevProps doesnt equal this.props setState of data to props.data
    if (prevProps !== this.props) {
      this.setState({
        data: this.props.data
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.data.map((post, i) => {
          return (
            <Containerstyle key={post.timestamp}>
              <div>
                <Usernamestyle>
                  <img alt={post.id} src={post.thumbnailUrl} />
                  {post.username}
                </Usernamestyle>
              </div>

              <MainImgStyled alt={post.id} src={post.imageUrl} />

              <Icons key={i} name={post} />

              <Comment key={post.username} comments={post.comments} />
            </Containerstyle>
          );
        })}
      </div>
    );
  }
}

export default Container;
