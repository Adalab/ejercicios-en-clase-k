import React from 'react';
import Title from './Title';

const App = () => {
  const title = 'Título personalizado'; // poner aquí undefined a ver qué pasa
  return (
    <div>
      <h1>Default props y props types:</h1>
      <Title title={title} subtitle="Mi subtítulo" />
    </div>
  );
};

export default App;
