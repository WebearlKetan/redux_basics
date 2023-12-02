// Home.js

import React from 'react';
import './Home.css'; // Import the CSS file

const Home = (props) => {
    console.log("Home",props);
  return (
    <div className="product-card">
      <img
       src="https://via.placeholder.com/300" // Placeholder image link, replace with your actual image URL
         alt="Mobile"
        className="product-image"
      />
      <div className="product-details">
        <h2>Online Mobile</h2>
        <p className="product-price">Price: $499.99</p>
        <div className="button-container">
          <button className="add-to-cart-button" 
          onClick={()=>props.addToCartHandler({price:1000,name:'iphone 11'})}>
          
          Add to Cart</button>
          <button className="buy-button">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
