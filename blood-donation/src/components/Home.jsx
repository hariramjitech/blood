import React, { useState } from 'react';
import data from "../assets/product.json";
import { Type } from './Type';
import'./Home.css'
const Home = () => {
  const[product]=useState(data);
  return (
    <>
    <div className="container">
      <h1>Welcome to the Blood Donation Portal</h1>
      <p>Your donation can save lives!</p>
         <div className="product-container">
           {product.map((product)=>(
            <Type key={product.id} product={product} />
            ))}
        </div>
        </div>
  </>
  );
};

export default Home;
