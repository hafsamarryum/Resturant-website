import React  from "react";

const Home =() =>{
 return(
<>
   <section className='home-pg'id="home"
    style={{ backgroundImage: 'url("images/home-img.png")' }}>
    <div className='content'>
     <h1>fresh <span>food in the</span> morning</h1>
     <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat  Labore, Sint Cupiditate Distinctio Tempora Reiciendis.</p>
     <button className="home-btn">get yours now</button>
    </div>
   </section>




</>
 );
}

export default Home;