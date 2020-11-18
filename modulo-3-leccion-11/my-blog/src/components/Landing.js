import { Link } from 'react-router-dom';


const Landing = (props) => {
  return (
    <ul>
      {props.list.map((articleData) => (
        <li key={articleData.id}>
          <Link to={"/article/" + articleData.id}>
            <article>
              <h3>{articleData.title}</h3>
              <p>{articleData.short}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default Landing;