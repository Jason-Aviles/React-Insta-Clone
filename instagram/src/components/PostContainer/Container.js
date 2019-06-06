import React, { Component } from "react";
import Comment from "../../components/CommentSection/Comment";

import Icons from "./Icons";

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
            <div key={post.timestamp} className="container">
              <div className="box-header">
                <h2>
                  <img alt={post.id} src={post.thumbnailUrl} />
                  {post.username}
                </h2>
              </div>

              <img className="main-img" alt={post.id} src={post.imageUrl} />

              <Icons key={i} name={post} />

              <Comment key={post.username} comments={post.comments} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Container;
