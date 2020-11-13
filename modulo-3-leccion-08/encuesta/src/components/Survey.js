import React from 'react';

class Survey extends React.Component {
  constructor(props) {
    super(props);

    this.firstInput = React.createRef();

    this.state = {
      sel: 3,
      mascota: [ "gato", "perro" ]
    }

    this.changeSelect = this.changeSelect.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
  }

  changeSelect(ev) {
    console.log(ev.currentTarget.value);

    this.setState({ sel: ev.currentTarget.value });
  }
  
  changeRadio(ev) {
    console.log(ev.currentTarget);

    this.setState({ mascota: ev.currentTarget.value});
  }

  render() {
    setTimeout(() => {
      this.firstInput.current.focus();
    }, 100);

    return (
      <div className="survey">
        <div>
          <label className="survey__label" htmlFor="name">
            Nombre:
          </label>
          <input className="survey__text" type="text" name="name" id="name" ref={this.firstInput} />
        </div>
        <div>
          <label className="survey__label" htmlFor="sel">
            Número:
          </label>
          <select className="survey__select" name="sel" id="sel" value={this.state.sel} onChange={this.changeSelect}>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
          </select>
        </div>
        <div>
          <label className="survey__label">Mascota:</label>
          <input
            type="checkbox"
            name="mascota"
            id="perro"
            value="perro"
            checked={this.state.mascota === "perro" ? true : false}
            onChange={this.changeRadio}
          />
          <label htmlFor="perro">Perro</label>
          <input
            type="checkbox"
            name="mascota"
            id="gato"
            value="gato"
            checked={this.state.mascota === "gato" ? true : false}
            onChange={this.changeRadio}
          />
          <label htmlFor="gato">Gato</label>
        </div>
      </div>
    );
  }
}

export default Survey;