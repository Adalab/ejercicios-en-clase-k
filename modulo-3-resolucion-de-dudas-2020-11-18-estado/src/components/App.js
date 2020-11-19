import React, { useState } from 'react';
import Form from './Form';

const App = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');

  const data = {
    name: name,
    job: job,
    email: email
  };
  return (
    <div>
      Hola mundo
      <Form name={name} job={job} email={email} />
      <Form data={data} />
      <Form
        data={{
          name: name,
          job: job,
          email: email
        }}
      />
      <Form
        data={{
          name: name,
          job: job
        }}
      />
    </div>
  );
};

export default App;
