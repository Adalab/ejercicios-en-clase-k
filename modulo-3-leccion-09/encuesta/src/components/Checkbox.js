const Checkbox = (props) => {
  const changeCheckbox = (ev) => {
    const inputId = props.id;
    const inputValue = ev.currentTarget.value;

    props.handleChange(inputId, inputValue);
  };

  return (
    <div className="Checkbox">
      <label className="form__label">{props.text}</label>
      {props.list.map(({ id, text }) => (
        <>
          <input
            className="form__checkbox"
            type="checkbox"
            name={id}
            id={props.id + "-" + id}
            value={id}
            checked={props.values.includes(id)}
            onChange={changeCheckbox}
          />
          <label htmlFor={props.id + "-" + id}>{text}</label>
        </>
      ))}
    </div>
  );
};

export default Checkbox;
