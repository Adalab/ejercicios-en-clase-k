import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="Home">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/blog/categories">Blog > Categories</Link>
          </li>
        </ul>
      </nav>
      <h2>Home</h2>
      <p>Este es el componente Home</p>
    </div>
  );
}

export default Home;