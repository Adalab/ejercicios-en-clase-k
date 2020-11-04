import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);  // this.props = props;

    /*
      this.props = {
        "author": "Dayana",
        "message": "Pura inspiración"
      };
    */

    console.log(this.props);
  }

  render() {
    return (
      <div className="article__comment">
        <div className="article__comment--from">De: {this.props.author}</div>
        <div className="article__comment--message">{this.props.message}</div>
        <div className="article__comment--replies"></div>
      </div>
    );
  }
}

export default Comment;