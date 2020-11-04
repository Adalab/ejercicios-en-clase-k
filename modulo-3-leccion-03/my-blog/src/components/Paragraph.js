import React from "react";

class Paragraph extends React.Component {
  render() {
    const title = this.props.title;

    return (
      <>
        <h4 className={this.props.styleH4}>{title}</h4>
        <p className="article__content--paragraph">
          {this.props.text}
        </p>
      </>
    );
  }
}

export default Paragraph;
