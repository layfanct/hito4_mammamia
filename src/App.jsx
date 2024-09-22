
import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from "./components/Register"; 
import Login from "./components/Login"; 
import Cart from './components/Cart';
import Pizza from './components/Pizza';

function App() {
  return (
    <div className="container"> 
      <Navbar />
      {/*<Home />*/}
      {/*<Register />*/}
      {/*<Login /> */}
      {/*<Cart />*/}
      <Footer />
      <Pizza/>

    </div>
  );
}

export default App;
