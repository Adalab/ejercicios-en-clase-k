import { useState } from 'react';
import PropTypes from "prop-types";

function TaskDetail(props) {
  console.log("TaskDeail");
  console.log(props);

  //let styleTask = "pending";
  const [styleTask, setStyleTask] = useState("pending");

  const clickTask = (ev) => {
    console.log("He hecho click" + props.subject);

    //styleTask = "done";
    if (styleTask === "done") {
      setStyleTask( "pending" );
    }
    else {
      setStyleTask("done");
    }
  }
 
  const styleDate = props.date<=11 ? "hurry" : "";

  return (
    <div className={"list__item--details " + styleTask}>
      <input className="list__item--check" type="checkbox" name="task" id="task" checked="" onChange={clickTask} />
      <label className="list__item--subject" htmlFor="t1">
        {props.subject}
      </label>
      <span className={"list__item--dueTo " + styleDate}>{props.date}nov</span>
    </div>
  );
}

TaskDetail.propTypes = {
  subject: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default TaskDetail;