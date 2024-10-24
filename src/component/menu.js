import React from "react";

const Menu = () => {
 return (
  <>
   <section className="menu" id="menu">
    <h1>our <span>menu</span> </h1>
    <div className="parent-container-menu">
        <div className="menu-container">
           <div className="card menu-card1">
            <img src="/images/menu-1.png" alt="img"></img>
           <h3>tasty and healthy</h3>
           <p>$15.99 <del>20.99</del></p>
           <button className="menu-btn">add to cart</button>
           </div>
        </div>    

     <div className="menu-container">
      <div className="card menu-card2">
       <img src="/images/menu-2.png" alt="img" style={{height:"120px"}}></img>
       <h3>tasty and healthy</h3>
       <p>$15.99 <del>20.99</del></p>
       <button className="menu-btn">add to cart</button>
      </div>
     </div>   

     <div className="menu-container">
      <div className="card menu-card3">
       <img src="/images/menu-3.png" alt="img" style={{ height: "120px" }}></img>
       <h3>tasty and healthy</h3>
       <p>$15.99 <del>20.99</del></p>
       <button className="menu-btn">add to cart</button>
      </div>
     </div>   

     <div className="menu-container">
      <div className="card menu-card4">
       <img src="/images/menu-4.png" alt="img"></img>
       <h3>tasty and healthy</h3>
       <p>$15.99 <del>20.99</del></p>
       <button className="menu-btn">add to cart</button>
      </div>
     </div>   

     <div className="menu-container">
      <div className="card menu-card5">
       <img src="/images/menu-5.png" alt="img"></img>
       <h3>tasty and healthy</h3>
       <p>$15.99 <del>20.99</del></p>
       <button className="menu-btn">add to cart</button>
      </div>
     </div>   

     <div className="menu-container">
      <div className="card menu-card6">
       <img src="/images/menu-6.png" alt="img" style={{ height: "110px" }}></img>
       <h3>tasty and healthy</h3>
       <p>$15.99 <del>20.99</del></p>
       <button className="menu-btn">add to cart</button>
      </div>
     </div>      
       

     </div>
    </section>

  </>
 );
}

export default Menu;