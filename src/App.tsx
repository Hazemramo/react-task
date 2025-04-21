import React from 'react'
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './footer';
import ProductDetails from './product-details';
// import { toast } from 'react-toastify';

import Nav from './Nav';
import Rout from './rout';



import './App.css'


const App = () => {





  const [close, setclose] = useState(false)
  const [details, setdetails] = useState([])
  const [cartdetails, setcartdetails] = useState([])
  const [clickedProducts, setClickedProducts] = useState([]);





  // showing product details fun
  function view(product) {

    // window.scrollTo({ top: 130, behavior: "smooth" })
    setdetails([{ ...product }])

    setclose(true)
  }


  // cart functions (start)




  const Addtocart = (product) => {

    const done = cartdetails.find((e) => {
      return e.Id === product.Id
    })



    if (done) {
      alert('Product added in cart');

    } else {
      setcartdetails([...cartdetails, { ...product, qty: 1 }]);
      alert('Product added now to cart');
      setClickedProducts((prev) => [...prev, product.Id]);

    }

  }


  // cart functions (end)






  //  search and Filter products (search bar)

  const [product, setproduct] = useState(ProductDetails)

  function searchbtn(searchvalue) {
    const change = ProductDetails.filter((x) => {
      return x.Cat === searchvalue
    })
    setproduct(change)
  }




 

  return (

    <BrowserRouter>
      <Nav  searchbtn={searchbtn} />
      <Rout product={product} setproduct={setproduct} details={details} view={view} setclose={setclose} close={close} cartdetails={cartdetails} setcartdetails={setcartdetails} Addtocart={Addtocart} clickedProducts={clickedProducts} />
      <Footer />
    </BrowserRouter>

  );
};

export default App;