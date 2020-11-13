import React, { useState } from 'react';
import Form from './Form';

const App = () => {
  const [address, setAddress] = useState('');
  // const addressStateInArray = useState('Castellana'); // ['Castellana', function () {...}]
  // const address = addressStateInArray[0]
  // const seAddress = addressStateInArray[1]
  const [city, setCity] = useState('');

  const handleInput = (key, value) => {
    // console.log('App: me han cambiado', key, value);
    if (key === 'city') {
      setCity(value);
    } else if (key === 'address') {
      setAddress(value);
    }
    // switch (key) {
    //   case 'address':
    //     setAddress(value);
    //     break;
    //   case 'city':
    //     setCity(value);
    //     break;
    // }
  };

  const handleReset = () => {
    console.log('Reset');
    setAddress('');
    setCity('');
  };

  return (
    <div>
      <h1>Props, lifting y estado</h1>
      <Form address={address} city={city} handleInput={handleInput} handleReset={handleReset} />
      <p>Dirección: {address}</p>
      <p>Ciudad: {city}</p>
    </div>
  );
};

export default App;
