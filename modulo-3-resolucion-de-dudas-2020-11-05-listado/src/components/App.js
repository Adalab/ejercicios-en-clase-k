import React from 'react';

const promos = [
  {
    promo: 'A',
    name: 'Ada'
  },
  {
    promo: 'B',
    name: 'Borg'
  },
  {
    promo: 'C',
    name: 'Clarke'
  }
];

class App extends React.Component {
  renderPromos() {
    // const htmlCode = [<li>Promo A: Ada</li>, <li>Promo B: Borg</li>, <li>Promo C: Clarke</li>];
    const htmlCode = promos.map(function (promoItem, i) {
      return (
        <li key={i}>
          Promo {promoItem.promo}: {promoItem.name}
        </li>
      );
    });

    return htmlCode;
  }

  render() {
    return (
      <div>
        <h1>Trabajando con listados</h1>
        <ul>{this.renderPromos()}</ul>
      </div>
    );
  }
}

export default App;
