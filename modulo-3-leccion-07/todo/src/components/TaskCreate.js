import { useState } from 'react';
import PropTypes from "prop-types";

const TaskCreate = (props) => {

  const [subject, setSubject] = useState("");
  const [date, setDate] = useState(11);

  const changeSubject = (ev) => {
    const inputChanged = ev.currentTarget;
    const newValue = inputChanged.value;

    setSubject(newValue);
  };

  const changeDate = (ev) => {
    setDate(parseInt(ev.currentTarget.value));
  };

  const clickButton = (ev) => {
    props.handleCreate(subject, date);
  };

  return (
    <section className="new__fill">
      <input
        className="new__fill--subject"
        type="text"
        name="subject"
        id="subject"
        value={subject}
        onChange={changeSubject}
      />
      <input className="new__fill--dueTo" type="text" name="date" id="date" value={date} onChange={changeDate} />
      <div>
        <button className="new__fill--button" onClick={clickButton}>
          Añadir tarea
        </button>
      </div>
    </section>
  );
};

TaskCreate.propTypes = {
  handleCreate: PropTypes.func.isRequired
};

export default TaskCreate;
