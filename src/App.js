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

  const addTocart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct){
      setCart([...cart, selectedProduct]);
    }
  };

  const checkOut = () =>{
    alert("Thank you for purchasing!");
    setCart([]);
  };

}

export default App;
