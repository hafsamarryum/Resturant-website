import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Menu from './component/menu';
import Product from './component/product';
import Customer from './component/customer';
import Contact from './component/contact';
import Blogs from './component/blogs';
import Footer from './component/footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
      <Customer/>
      <Contact/>
      <Blogs/>
      <Footer/>

    </>
  );
}

export default App;
