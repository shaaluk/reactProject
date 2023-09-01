import React, { useState, useEffect} from "react";
import Items from "./Items";
import products from "./Pro";
import Product from "./Product";


 function Basket(){
   
     const [item,setItem] = useState(products) ;
    let itemsData = localStorage.getItem("products");
    //let newItemData  = JSON.parse(itemsData);
   console.log("itemsData",JSON.parse(itemsData));

      useEffect(()=>{
      const newItemData  = JSON.parse(itemsData)
      setItem(newItemData);
      },[setItem]);


    
    return (
        <>
    <div className="block col-1">
     <h1>Cart</h1>
     {
      
        item.map((curItem) =>{
          return  <Items key={curItem.id}  {...curItem}/>
        })
      //   item?.map((cart,idx) =>{
      //      return <Items key={idx}  {...cart}/>
      //   })

     }    
    </div>
    </>
    );
    
 }

 export default Basket;

 