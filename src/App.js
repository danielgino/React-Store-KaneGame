import logo from './logo.svg';
import './App.css';
import Store from './components/Store';
import Header from './components/Header';
import React, { useState } from 'react';
import CartPage from './components/CartPage';
import About from './components/About';
import Footer from './components/Footer';
function App() {
document.title="KaneGame-online games store"
const [currentPage,setCurrentPage]=useState('homePage');

const whichPage=()=>{
 switch(currentPage){
case "homePage":
  return <Store/>
  case "cartPage":
  return <CartPage />
  case "about":
  return <About/>

  default:
    return <Store/>


 }
}
  


  return (
    <div >
     <Header setCurrentPage={setCurrentPage}/><br/>
    {whichPage()}
    <Footer/>
    </div>
  );
}

export default App;
