import React, { useState } from 'react';  
import chinos from "./images/chinos.jpg";
import shirts from "./images/shirts.jpg";
import shoes from "./images/shoes.jpg";
import './App.css';

const products = [
  {id: 1, name: 'DENIM', price: 10, image: chinos},
  {id: 2, name: 'AMERICAN POLO', price: 9.30, image: shirts},
  {id: 3, name: 'NIKE', price: 35, image: shoes},
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct){
      setCart([...cart, selectedProduct]);
    }
  };

  const checkOut = () =>{
    alert("Thank you for purchasing!");
    setCart([]);
  };

  return(
    <div className="App">
      <header className='App-header'>
        <h1> Commerce Store </h1>
      </header>
      <section className='App-products'>
        {products.map(product => (
          <div key={product.id} className='App-product'>
            <img src={product.image} alt={product.name} style={{width: '100%' , height: 'auto'}} />
            <h3> {product.name} </h3>
            <p> ${product.price} </p>
            <button onClick={() => addToCart(product.id) }>Add to Cart</button>
          </div>
        ))}
      </section>
      <section className='App-cart'>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <button onClick={checkOut}>CheckOut</button>
      </section>
    </div>
  );
}

export default App;
