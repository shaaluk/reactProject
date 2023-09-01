import React from "react";
import Product from "./Product";


 function Main(props){
    const {products} = props;
  return(
    <div className="block col-2">
      <h2>Products</h2>

      <div className="row">
        
        {products.map((product)=>(
        // <div>{product.name}{product.content}{product.image}</div>
        <Product key={product.id} product={product}/>
          
        ))}
      </div>
    </div>
  )
 }

 export default Main;