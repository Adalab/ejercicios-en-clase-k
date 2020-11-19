import { useEffect } from 'react';

const AppFunctional = () => {

  useEffect(
    () => {

      // Llamará después de hacer render

      // componentDidMount
      // componentDidUpdate

      return () => {
        // Llamará cuando se quite el componente

        // componentWillUnmount
      };
    },
    []
  );

  return (
    <main className="App">

    </main>
  );
}