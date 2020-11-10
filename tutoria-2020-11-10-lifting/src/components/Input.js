import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    // this.props.handleInputChange123({
    //   key: 'email',
    //   value: ev.target.value
    // });
    this.props.handleInputChange123(ev.target.value);
  }

  render() {
    return (
      <div>
        <label className="form__label" htmlFor="input">
          {this.props.label}
        </label>
        <input className="form__input-text" type="email" id="input" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Input;
