import React from "react";
const Contact = () => {
 return (
  <>
   <section className="contact" id="contact">
    <h1><span>contact</span> us </h1>
    <div className="parent-container-contact">
     <div className="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3403.655623806296!2d74.2899041740577!3d31.451146350561658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1714496255616!5m2!1sen!2s"></iframe>
     </div>
     <div className="contact-content">
      <h2>get in touch</h2>
      <div className="inputs">
        <div className="input">
         <img src="images/person.png" alt="img"></img>
         <input type="text" name="name" placeholder="name"></input>
        </div>

       <div className="input">
        <img src="images/email.png" alt="img"></img>
        <input type="text" name="name" placeholder="email"></input>
       </div>

       <div className="input">
        <img src="images/phone.png" alt="img" id="form-phoneimg"></img>
        <input type="text" name="name" placeholder="number"></input>
       </div>
      </div>
      <button className="contact-btn">contact now</button>
     </div>
    </div>
   </section>
  </>
 );
}
export default Contact;