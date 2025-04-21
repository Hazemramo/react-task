import React, { useState } from 'react'
import ProductDetails from '../product-details'



import { FaArrowRight, FaHeadphonesAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
import { CiPercent } from "react-icons/ci";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";


import './product.css'
import { CgProductHunt } from 'react-icons/cg';





export const Product = ({ clickedProducts, product, setproduct, details, view, close, setclose, Addtocart }) => {



  function Filtterproducts(product) {
    const update = ProductDetails.filter((x) => {
      return x.Cat === product
    })
    setproduct(update)
  }

  function allproducts() {
    setproduct(ProductDetails)
  }



  return (

    <>

      {
        close ?
          <div className="product-show">
            <div className="productbox">
              <div className="content">

                {details.map((elm => {
                  return (
                    <div className="box" key={elm.Id}>
                      <div onClick={() => setclose(false)} className='cross'>
                        <IoClose />
                      </div>
                      <div className="img-box">
                        <img src={elm.Img} alt={elm.Title} />
                      </div>
                      <div className="details-box">
                        <p> {elm.Cat} </p>
                        <h3> {elm.Title} </h3>
                        <h4> ${elm.Price} </h4>

                        <button onClick={() => Addtocart(elm)} className='addtocart'>Add to Cart</button>

                      </div>
                    </div>
                  )
                }))}
              </div>
            </div>

          </div> : null
      }
      <div className="all">
        <h3>  # Products</h3>
        <p>Home . products</p>

        <div className="products">
          <div className="content">
            <div className="filter">
              <div className="categories">


                <ul>
                  <li>categories</li>
                  <li onClick={() => allproducts()} >All Products</li>
                  <li onClick={() => Filtterproducts('laptop')} >Laptop</li>
                  <li onClick={() => Filtterproducts('camera')} >Camera</li>
                  <li onClick={() => Filtterproducts('phone')} >Phone</li>
                  <li onClick={() => Filtterproducts('screen')} >Screen</li>
                  <li onClick={() => Filtterproducts('electric machines')} >Electric machines</li>
                  <li onClick={() => Filtterproducts('kitchen')} >Kitchen</li>
                </ul >
              </div >
            </div >
            <div className="productbox">
              <div className="content">

                {product.map((elm => {
                  return (
                    <div className="box" key={elm.Id}>
                      <div className="img-box">
                        <img src={elm.Img} alt={elm.Title} />
                        <div className="icon-box">
                          <li className={clickedProducts.includes(elm.Id) ? 'icon-box-done' : ''} onClick={() => Addtocart(elm)} >
                            <IoCartOutline />
                          </li>
                          <li onClick={() => view(elm)} >
                            <FaRegEye />
                          </li>
                          <li>
                            <FaRegHeart />
                          </li>

                        </div>
                      </div>
                      <div className="details-box">
                        <p> {elm.Cat} </p>
                        <h3> {elm.Title} </h3>
                        <h4> {elm.Price} </h4>
                      </div>
                    </div>
                  )
                }))}
              </div>
            </div>
          </div >
        </div >

      </div >

    </>
  )
}
