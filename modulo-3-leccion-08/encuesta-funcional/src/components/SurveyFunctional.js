import React, {useState, useEffect} from 'react';

const SurveyFunctional = () => {
  const firstInput = React.createRef();

  useEffect(() => {
    setTimeout(() => {
      firstInput.current.focus();
    }, 100);
  });

  const [sel, setSel] = useState(3);
  const [mascota, setMascota] = useState("gato");

  const changeSelect = (ev) => {
    setSel(ev.currentTarget.value);
  };

  const changeRadio = (ev) => {
    setMascota(ev.currentTarget.value);
  }

  return (
    <div className="survey">
      <div>
        <label className="survey__label" htmlFor="name">
          Nombre:
        </label>
        <input className="survey__text" type="text" name="name" id="name" ref={firstInput} />
      </div>
      <div>
        <label className="survey__label" htmlFor="sel">
          Número:
        </label>
        <select className="survey__select" name="sel" id="sel" value={sel} onChange={changeSelect}>
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
          checked={mascota === "perro" ? true : false}
          onChange={changeRadio}
        />
        <label htmlFor="perro">Perro</label>
        <input
          type="checkbox"
          name="mascota"
          id="gato"
          value="gato"
          checked={mascota === "gato" ? true : false}
          onChange={changeRadio}
        />
        <label htmlFor="gato">Gato</label>
      </div>
    </div>
  );
}

export default SurveyFunctional;