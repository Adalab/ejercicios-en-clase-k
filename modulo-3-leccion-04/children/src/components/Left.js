import React from 'react';

class Left extends React.Component {
  render() {
    return (
      <section className="left">
        {this.props.children}
      </section>
    );
  }
}

export default Left;