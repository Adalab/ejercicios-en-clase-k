import React from 'react';
import Button from './Button';

const App = () => {
  const handleBtn = () => {
    console.log('Me han clickado');
  };

  return (
    <div>
      <h1>Lifting en funcionales</h1>
      <Button handleBtn={handleBtn} />
    </div>
  );
};

export default App;
