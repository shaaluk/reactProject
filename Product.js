import React from "react";
import { useState } from "react";
import products from "./Pro";

// import Items from "./Items";


function Product(props){
    const {product} = props;
    
    

//local storage 
    const [valA,setValA] = useState(0);
    // const sum = (product)=>{
    //     setValA(valA+1);
    //     //  array.push(product);
    // };

    
    // console.log("valA",valA)


    return(
        <div className="order-child">
            <img className="small" src={product.image} alt="no-img"/>
            <h3>{product.name}</h3>
            <div>{product.content}</div>
            <div>${product.price}</div>
       
        <div>

        <button onClick={()=>{
            addCart(product.id);
            setValA(valA+1);

        }}>Add </button> <span>{valA}</span>

        
        {/* <button onClick={()=>{
            deleteCart(product.);
            setValA(valA-1);
        }}>DElete </button> <span>{valA}</span> */}
        </div>
        </div>
    );
     
}
export default Product;


  let cart =[];

   function addCart(id){
   // console.log(id);
    const newItem = products.find((product)=> product.id === id) ;
    //console.log(newItem);
    cart.push(newItem);
    console.log(cart);

    localStorage.setItem("products",JSON.stringify(cart));
 }

