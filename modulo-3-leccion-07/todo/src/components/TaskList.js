import TaskDetail from "./TaskDetail.js";
import PropTypes from "prop-types";

function TaskList(props) {
  console.log(props);

  const htmlList = props.list.map(
    (eachTask, i) => (
      <li key={i} id={i} className="list__item">
        <TaskDetail id={i} subject={eachTask.subject} date={eachTask.date} />
      </li>
    )
  );

  return (
    <ul className="list">
      {htmlList}
    </ul>
  );
}

TaskList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;