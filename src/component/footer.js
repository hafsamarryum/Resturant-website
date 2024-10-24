import React from "react";
const Footer = () => {
 return (
  <>
   <section className="footer">
    <div className="share">
     <div><img src="images/facebook.png" alt="img"></img></div>
     <div><img src="images/twitter.png" alt="img"></img></div>
     <div><img src="images/instagram.png" alt="img"></img></div>
     <div><img src="images/linkedin.png" alt="img"></img></div>
     <div><img src="images/pinterest.png" alt="img"></img></div>
    </div>
    <div className="link">
    <a href='#home'>Home</a>
    <a href='#about'>About</a>
    <a href='#menu'>Menu</a>
    <a href='#product'>Products</a>
    <a href='#customer'>Review</a>
    <a href='#contact'>Contact</a>
    <a href='#blogs'>Blogs</a>
    </div>
    <h>Created By <span>Coding Circulate</span> | All Rights Reserved</h>
   </section>
   </>

 )}

 export default Footer;