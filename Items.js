import React from "react";
// import products from "./Pro";

const Items=(props)=>{
    const{image, name, content, price} =props;
    return(
        <>

        <div className="items-info">

<div className="product-img">

   <img className="small" src={image} alt="hi"/>
</div>

<div className="title">
   <h2>{name}</h2>  
   <p>{content}</p>
   <div>${price}</div>
   
</div>
 
 <div>

 </div>
    <button className="btn">+</button>
    <button className="btn">-</button>
</div>
<hr/>

        </>
    )
}

export default Items;



