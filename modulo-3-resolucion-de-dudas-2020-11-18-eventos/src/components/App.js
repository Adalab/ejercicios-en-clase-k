import React from 'react';

const App = () => {
  const handleClick = () => {
    console.log('Me han clickado');
  };

  const generateHandleFunction = () => {
    return () => {
      console.log('Me han clickado');
    };
  };

  return (
    <div>
      Hola mundo
      <button onClick={handleClick}>Clíckame 1</button>
      {/*
        const btn = document.querySelector('Aquí el selector del botón')

        const handleClick = () => {}

        btn.addEventListener('click', handleClick)
      */}
      <button
        onClick={() => {
          console.log('Me han clickado');
        }}
      >
        Clíckame 2
      </button>
      <button onClick={generateHandleFunction()}>Clíckame 3</button>
    </div>
  );
};

export default App;
