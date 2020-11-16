import PropTypes from "prop-types";
import UserItem from "./UserItem";
import "./UserList.scss";

const UserList = (props) => {

  return (
    <section className="users">
      <ul className="users__list">
        {props.list.map((userData) => (
          <li className="users__list-item" key={userData.id}>
            <UserItem user={userData} />
          </li>
        ))}
      </ul>
    </section>
  );
}

UserList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UserList;