import React, { useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Basket from "./component/Basket";
import Main from "./component/Main";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import products from "./component/Pro";
// import data from "./component/products";
// import Product from "./component/Product";



function App(){
   
  // const [cartItems, setCartItems] = useState([]);
  
   const {producting} = products;
 // const onAdd = (product) =>{
  // console.log('onAdd');
   
 // };
 // const onSub = (product)=>{

 // }
  return (
  <div>
    
   <Navbar/>
   <div className="row">
    <Main products={products} />
    <Basket />
    </div>
    <Routes>
    <Route path="/about" Component={About}/>
    <Route path="/contact" Component={Contact}/>
    </Routes>
   </div>
  );
}

export default App;
