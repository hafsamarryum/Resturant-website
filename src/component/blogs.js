import React from "react";
import { blogs } from "../data";
const Blogs = () => {
 return (
  <>
   <section className="blogs" id="blogs">
    <h1>our <span>blogs</span> </h1>
   <div className="box-container">
      {blogs.map((item,index) =>(
     <div className="box">
      <div className="blog-img">
       <img src="/images/blog-1.jpeg" alt="img"></img>
      </div> 
      <div className="blog-content">
      <h3>Tasty And Refreshing Spices</h3>
      <p id="blog-box-date">By Admin / 21st May, 2021</p>
      <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.</p>
      <button className="blog-btn">read more</button>
      </div>
     </div> 
    ))}
   </div>
   </section>
  </>
 );
}
export default Blogs;