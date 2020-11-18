import React from "react";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="Categories">
      <h2>Bienvenida!</h2>
      <p>Este es el componente Categories</p>
      <p>
        <Link to="/blog">Volver a blog</Link>
      </p>
    </div>
  );
}

export default Categories;