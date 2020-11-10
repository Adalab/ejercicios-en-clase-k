import React from "react";
import "./App.scss";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Zaralab" />
        <main className="container">
          <h2>Zaralab</h2>
          <div class="store">
            <section class="shelves">
              <h3 class="shelves__title">Lista de productos</h3>
              <article class="shelves__article">
                <div class="shelves__article--imgContainer">
                  <img class="shelves__article--img" src="./images/tshirt-simple-by_vexels.png" />
                </div>
                <h3 class="shelves__article--title">Camiseta</h3>
                <div class="shelves__article--buyPanel">
                  <div class="buyPanel__size">
                    <h4 class="buyPanel__section--title">Talla:</h4>
                    <select name="" id="" class="buyPanel__size--select">
                      <option value="" disabled selected>
                        Escoge:
                      </option>
                      <option value="XL">XL</option>
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="S">S</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div class="buyPanel__amount">
                    <h4 class="buyPanel__section--title">Cantidad:</h4>
                    <button class="buyPanel__amount--add">+</button>
                    <input type="text" name="" id="" class="buyPanel__amount--number" value="2" />
                    <button class="buyPanel__amount--sub">-</button>
                  </div>
                  <div class="buyPanel__price">
                    <h4 class="buyPanel__section--title">Precio:</h4>
                    <span class="buyPanel__price--number">39</span>€
                  </div>
                  <button class="buyPanel__buy">Comprar</button>
                </div>
              </article>
              <article class="shelves__article">
                <div class="shelves__article--imgContainer">
                  <img class="shelves__article--img" src="./images/pants-simple-by_vexels.png" />
                </div>
                <h3 class="shelves__article--title">Pantalón</h3>
                <div class="shelves__article--buyPanel">
                  <div class="buyPanel__size">
                    <h4 class="buyPanel__section--title">Talla:</h4>
                    <select name="" id="" class="buyPanel__size--select">
                      <option value="" disabled selected>
                        Escoge:
                      </option>
                      <option value="XL">XL</option>
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="S">S</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div class="buyPanel__amount">
                    <h4 class="buyPanel__section--title">Cantidad:</h4>
                    <button class="buyPanel__amount--add">+</button>
                    <input type="text" name="" id="" class="buyPanel__amount--number" value="2" />
                    <button class="buyPanel__amount--sub">-</button>
                  </div>
                  <div class="buyPanel__price">
                    <h4 class="buyPanel__section--title">Precio:</h4>
                    <span class="buyPanel__price--number">59</span>€
                  </div>
                  <button class="buyPanel__buy">Comprar</button>
                </div>
              </article>
              <article class="shelves__article">
                <div class="shelves__article--imgContainer">
                  <img class="shelves__article--img" src="./images/arctic-boots-illustration-by-Vexels.png" />
                </div>
                <h3 class="shelves__article--title">Botas</h3>
                <div class="shelves__article--buyPanel">
                  <div class="buyPanel__size">
                    <h4 class="buyPanel__section--title">Talla:</h4>
                    <select name="" id="" class="buyPanel__size--select">
                      <option value="" disabled selected>
                        Escoge:
                      </option>
                      <option value="XL">XL</option>
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="S">S</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div class="buyPanel__amount">
                    <h4 class="buyPanel__section--title">Cantidad:</h4>
                    <button class="buyPanel__amount--add">+</button>
                    <input type="text" name="" id="" class="buyPanel__amount--number" value="2" />
                    <button class="buyPanel__amount--sub">-</button>
                  </div>
                  <div class="buyPanel__price">
                    <h4 class="buyPanel__section--title">Precio:</h4>
                    <span class="buyPanel__price--number">89</span>€
                  </div>
                  <button class="buyPanel__buy">Comprar</button>
                </div>
              </article>
              <article class="shelves__article">
                <div class="shelves__article--imgContainer">
                  <img class="shelves__article--img" src="./images/winter-blankets-flat-by-Vexels.png" />
                </div>
                <h3 class="shelves__article--title">Mantitas suaves</h3>
                <div class="shelves__article--buyPanel">
                  <div class="buyPanel__size">
                    <h4 class="buyPanel__section--title">Talla:</h4>
                    <select name="" id="" class="buyPanel__size--select">
                      <option value="" disabled selected>
                        Escoge:
                      </option>
                      <option value="XL">XL</option>
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="S">S</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div class="buyPanel__amount">
                    <h4 class="buyPanel__section--title">Cantidad:</h4>
                    <button class="buyPanel__amount--add">+</button>
                    <input type="text" name="" id="" class="buyPanel__amount--number" value="2" />
                    <button class="buyPanel__amount--sub">-</button>
                  </div>
                  <div class="buyPanel__price">
                    <h4 class="buyPanel__section--title">Precio:</h4>
                    <span class="buyPanel__price--number">14</span>€
                  </div>
                  <button class="buyPanel__buy">Comprar</button>
                </div>
              </article>
            </section>
            <section class="cart">
              <h3 class="cart__title">Cesta de la compra</h3>
              <ul class="cart__list">
                <li class="cart__list--item">
                  <span class="cartListItem__concept">Camiseta</span>
                  <span class="cartListItem__amount">x 1</span>
                  <span class="cartListItem__price">69€</span>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
