import React from "react";
import { customer } from "../data";
const Customer = () => {
  return (
    <>
      <section className="customer" id="customer">
        <h1>customer's <span>review</span> </h1>
        <div className="box-container">
          {/* maping concept */}
          {customer.map((item, index) => (
            <div className="box customer-content" >
              <img id="quote-img" src="images/quote-img.png" alt="img"></img>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.</p>
              {/* <img src={item.img} alt="img"></img> */}
              <img id="customer-img"src="/images/pic-1.png" alt="img"></img>
              <h3>john deo</h3>
              <div id="rating-icon">
                <img src="images/star.png" alt="img" />
                <img src="images/star.png" alt="img" />
                <img src="images/star.png" alt="img" />
                <img src="images/star.png" alt="img" />
                <img src="images/half-star.png" alt="insert img" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );}
export default Customer;