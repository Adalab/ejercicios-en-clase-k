import React from 'react';
import '../stylesheets/Collapsable.scss';

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.isOpen = false;
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick() {
    // this.setState({
    //   isOpen: !this.isOpen
    // });
    this.isOpen = !this.isOpen;
    this.forceUpdate();
  }

  render() {
    const openClassName = this.isOpen ? 'open' : '';

    return (
      <div className={`collapsable-container ${openClassName}`}>
        <div className="collapsable-header" onClick={this.handleHeaderClick}>
          {this.props.title}
        </div>
        <div className="collapsable-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Collapsable;
