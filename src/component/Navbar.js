import React, { useRef } from 'react';

const Navbar = () => {

 // function
 const searchRef = useRef();
 const searchHandler = () => {
   searchRef.current.classList.toggle("active");
 };


 return (
  <>
   <nav className='header'>
    <img id='logo' src='images/logo.png' alt='logo-img' />
    
    {/* list-navigation */}
    <ul>
     <li><a href='#home'>Home</a></li>
     <li><a href='#about'>About</a></li>
     <li><a href='#menu'>Menu</a></li>
     <li><a href='#product'>Products</a></li >
     <li><a href='#customer'>Review</a></li >
     <li><a href='#contact'>Contact</a></li >
     <li><a href='#blogs'>Blogs</a></li >
    </ul>

    {/* icon */ }
    <div className='nav-icon' onClick={searchHandler}>
     <div className='search'>  
     <img src='images/search.png' alt='search-img' /></div>
     <div className='cart'>
      <img src='images/cart.png' alt='cart-img' /></div>
     <div className='menu-bar'>  
     <img src='images/menue-bar.png'alt='menu-bar-img'/></div>
    </div>

    {/* search-bar input filed */}
    <div className='search-form ' ref={searchRef}>
     <input type='search' placeholder='Search here...' id='search-box'/>
     <label htmlFor='search-box'> 
     <div id='search-box'>
      <img src='images/search.png' alt='search-img' /></div> </label>
    </div>

    {/* cart */}



   </nav>



  </>
 );

}
export default Navbar;