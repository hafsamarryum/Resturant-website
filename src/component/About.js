import React from "react"

const About = () => {
 return (
  <>

   <section className="about-us" id="about">
    <h1><span>about</span> us</h1>
    <div className="parent-container-about">
     <div className="about-img">
      <img src="images/about-img.png" alt="img"></img>
     </div>
     <div className="about-content">
      <h3>What Makes Our Food Special?</h3>
      <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?</p>
      <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>
      <button className="about-btn">learn more</button>
     </div>

    </div>
   </section>


  </>
 );
};

export default About;