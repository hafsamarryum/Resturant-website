import React from "react";

const Product = () => {
 return (
  <>
  
   <section className="product" id="product">
    <h1>our <span>product</span> </h1>
    <div className="parent-container-product">
     <div className="product-container">
      <div className="card product-card1">
       <div className="product-icon">
        <div><img src="/images/cart.png"></img></div>
        <div><img src="/images/like.png"></img></div>
        <div><img src="/images/visible.png"></img></div>
       </div>
       <img src="/images/product-1.png" alt="img"></img>
       <h3>freah coffee</h3>
                   <div id="rating-icon">
                      <img src="images/star.png" alt="img" />
                      <img src="images/star.png" alt="img" />
                      <img src="images/star.png" alt="img" />
                      <img src="images/star.png" alt="img" />
                      <img src="images/half-star.png" alt="insert img" />
                   </div>
       <p>$15.99 <del>$20.99</del></p>
      </div>
     </div>


     <div className="product-container">
      <div className="card product-card1">
       <div className="product-icon">
        <div><img src="/images/cart.png"></img></div>
        <div><img src="/images/like.png"></img></div>
        <div><img src="/images/visible.png"></img></div>
       </div>
       <img src="/images/product-2.png" alt="img"></img>
       <h3>freah coffee</h3>
         <div id="rating-icon">
            <img src="images/star.png" alt="img" />
            <img src="images/star.png" alt="img" />
            <img src="images/star.png" alt="img" />
            <img src="images/star.png" alt="img" />
            <img src="images/half-star.png" alt="insert img"/>
         </div>
       <p>$15.99 <del>$20.99</del></p>
      </div>
     </div>

     <div className="product-container">
      <div className="card product-card1">
       <div className="product-icon">
        <div><img src="/images/cart.png"></img></div>
        <div><img src="/images/like.png"></img></div>
        <div><img src="/images/visible.png"></img></div>
       </div>
       <img src="/images/product-3.png" alt="img"></img>
       <h3>freah coffee</h3>
                   <div id="rating-icon">
                      <img src="images/star.png" alt="img" />
                      <img src="images/star.png" alt="img" />
                      <img src="images/star.png" alt="img" />
                      <img src="images/star.png" alt="img" />
                      <img src="images/half-star.png" alt="insert img" />
                   </div>
       <p>$15.99 <del>$20.99</del></p>
      </div>
     </div>


 

     </div>
     </section>
  
  </>
 );

}

export default Product;