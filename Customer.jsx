import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

const postApiUrl ="http://localhost:3000/customer/add"
const getApirUrl = "http://localhost:3000/customer"

class Customer extends React.Component{
    constructor(props){
      super(props)
      console.log(props)
        this.state = {
          customer: null,
        }
    }
  
    loginOnClick= (event) => {
      console.log(event)
      event.preventDefault()
    
      axios.post(postApiUrl, {
        "name": event.target[0].value,
        "email": event.target[1].value,
        "priorCustomer": event.target[2].value
      })
    
      .then(res => {
        console.log("succesfully got one!")
        console.log(res)
        this.setState({
          customer: res.data,
        })
      })
      
      .catch(err => {
        console.error(err)
      })

      this.getCustomer();
    }

    getCustomer= () => {
      axios.get(getApirUrl)
      .then(res => {
        console.log("succesfully got one!")
        console.log(res)
        this.setState({
          customer: res
        })
      })
      
      .catch(err => {
        console.error(err)
      })
    }
  
    render(){
      return(

        <div className="login">

          <div class="title-flex-container">
          <Link to="/">Home</Link>
        </div>

            <form id="loginForm" onSubmit={this.loginOnClick}> 
                <label htmlFor="add an item"> &nbsp;</label>
                <input
                  type="text"
                  key={"name"}
                  name="add an item"
                  placeholder="Name"
                />
                <input
                  type="text"
                  key={"email"}
                  name="add an item"
                  placeholder="email"
                />
                <input
                  type="text"
                  key={"priorCustomer"}
                  name="add an item"
                  placeholder="Prior Customer? T/F"
                />
                <button className="login-button" type="submit"> &nbsp;Login&nbsp; </button>
              </form>
              <div>Hi {this.state.customer?.name}</div> 
          </div>
      );
    }
  }

export default Customer;
