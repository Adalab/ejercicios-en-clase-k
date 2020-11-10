import React from 'react';

class HeaderWithClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.forceUpdate();
    console.log('me han clickado', this);
  }

  render() {
    return <header onClick={this.handleClick}>{this.props.title}</header>;
  }
}

export default HeaderWithClass;
