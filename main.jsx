import React from 'react'
import ReactDOM from 'react-dom/client'
import Customer from './Customer'
import App from './App'
import './index.css'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />

//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
)

