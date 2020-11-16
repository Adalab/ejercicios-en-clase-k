const Radio = (props) => {
  const changeCheckbox = (ev) => {
    const inputId = props.id;
    const inputValue = ev.currentTarget.value;

    props.handleChange(inputId, inputValue);
  };

  return (
    <div className="Radio">
      <label className="form__label">{props.text}</label>
      {props.list.map((optValue) => (
        <>
          <input
            className="form__checkbox"
            type="radio"
            name={optValue.id || optValue}
            id={props.id + "-" + (optValue.id || optValue)}
            value={optValue.id || optValue}
            checked={(optValue.id && props.value === optValue.id) || (!optValue.id && props.value === optValue)}
            onChange={changeCheckbox}
          />
          <label htmlFor={props.id + "-" + (optValue.id || optValue)}>{optValue.text || optValue}</label>
        </>
      ))}
    </div>
  );
};

export default Radio;
