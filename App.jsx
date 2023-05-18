import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

// const apiUrl ="http://localhost:3000/customer/add"


let cartCounter = 0

class Item extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    images: [],
    items: ["Dill", "Spicy", "Gallo"],
    des: ["Classic dill yumminess.", "Classic pickles with a kick of spice.", "Like pico de gallo, but pickles!"],
    prices: ["5", "6", "7"],
    cart: [],
    customer: null,
  }
}

addToCart = (title) => {
  console.log(title)
  // console.log(this.state.cart)
  // cartCounter = this.state.cart.length()
  cartCounter++
  const newCart = this.state.cart.push(title)
  this.setState({
    cart: newCart,
  });
}

// loginOnClick= (event) => {
//   console.log(event)
//   event.preventDefault()

//   axios.post(apiUrl, {
//     "name": event.target[0].value,
//     "email": event.target[1].value,
//     "priorCustomer": event.target[2].value
//   })

//   .then(res => {
//     console.log("succesfully got one!")
//     console.log(res)
//     this.setState({
//       customer: res
//     })
//   })
  
//   .catch(err => {
//     console.error(err)
//   })
// }

  render() {
    let items = ["Dill", "Spicy", "Gallo"]

    //The Meat
    return (
      <div className="Dashboard">
        <div class="title-flex-container">
          <Title/> 
          <Search/>
          <Link to="/customer">Login</Link>
          <Cart/>
      </div>

      <div class="items-display-flex-container">
        <Items title={this.state.items[0]} des={this.state.des[0]} price={this.state.prices[0]} addToCart={this.addToCart}/>
        <Items title={this.state.items[1]} des={this.state.des[1]} price={this.state.prices[1]} addToCart={this.addToCart}/>
        <Items title={this.state.items[2]} des={this.state.des[2]} price={this.state.prices[2]} addToCart={this.addToCart}/>
      </div>
      </div>
    );
  }
}


//Functions
function Title(){
  return(
    <div className="main-title">
      <h1>KPOOPY'S PICKLES</h1>
    </div>
  );
}

function Search(){
  return(
    <div className="search-list">
      <input className="e-input" type="text" placeholder="Search"/>   
    </div>
  );
}

function Cart(){
  return(
    <div className="cart-list">
      <button
        onClick={() => props.newquote()}>
        Cart {cartCounter}
        </button> 
    </div>
  );
}

function Items(props){
  return(
    <div className="item-flex-container">
      <h2>insert image here</h2>
      <h1>{props.title}</h1>
      <h3>{props.des}</h3>
      <h2>${props.price}</h2>
      <button onClick={() => props.addToCart(props.title)}> Add to cart </button> 
    </div>
  );
}

export default Item
