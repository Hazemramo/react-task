import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeadphonesAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
import { CiPercent } from "react-icons/ci";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { useState } from 'react';



import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// products data
import Homeproduct from "./homeproduct";
import HomeproductTwo from "./homeproductTwo";



import './home.css'




export const Home = ({ details, view, close, setclose, Addtocart }) => {

    const [homeproduct, sethomeproduct] = useState(Homeproduct)


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>


            {
                close ?

                    // product details showing when clicking
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
                                                <h4> {elm.Price} </h4>

                                                <button onClick={() => Addtocart(elm)} className='addtocart'>Add to Cart</button>

                                            </div>
                                        </div>
                                    )
                                }))}
                            </div>
                        </div>

                    </div> : null
            }
            <div className='top-banner'>
                <div className="container">
                    <div className='content'>


                        <Link className='link' to='/product' >

                            <div className="img-box">
                                <img src='/src/assets/banner_home2.png' alt="" />
                            </div>
                            <div className="img-box">
                                <img src='/src/assets/banner_home3.png' alt="" />
                            </div>
                        </Link>


                    </div>
                </div>
            </div>

            <div className="product-type">

                <div className="top-sec">
                    <h2 className='top-sec-left'>Counting</h2>

                    <div className='top-sec-right' >
                        <h3><Link to='/product' >View all</Link></h3>
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <div className='abs-box'>25%</div>
                        <div className="img-box">
                            <img src='/src/assets/product/10.png' alt="" />
                        </div>
                        <div className="detail-box">
                            <p> <span>64</span> products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src='/src/assets/product/11.png' alt="" />
                        </div>
                        <div className="detail-box">
                            <p><span>35</span> products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src='/src/assets/product/14.png' alt="" />
                        </div>
                        <div className="detail-box">
                            <p><span>20</span> products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className='abs-box'>50%</div>

                        <div className="img-box">
                            <img src='/src/assets/product/12.png' alt="" />
                        </div>
                        <div className="detail-box">
                            <p><span>43</span> products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src='/src/assets/product/13.png' alt="" />
                        </div>
                        <div className="detail-box">
                            <p><span>23</span> products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="content">
                        <div>
                            <div className="box">
                                <div className="icon-box">
                                    <FiTruck />
                                </div>
                                <div className="detail-box">
                                    <h3>Free shipping</h3>
                                    <p>Order above $1000</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon-box">
                                    <LuDollarSign />
                                </div>
                                <div className="detail-box">
                                    <h3>Return & Refund</h3>
                                    <p>Money Back Gaurenty</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="box">
                                <div className="icon-box">
                                    <CiPercent />
                                </div>
                                <div className="detail-box">
                                    <h3>Member discount</h3>
                                    <p>On every order</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon-box">
                                    <FaHeadphonesAlt />
                                </div>
                                <div className="detail-box">
                                    <h3>Custmer Support</h3>
                                    <p>On every order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-sec">
                <h2 className='top-sec-left'>Top Products</h2>

                <div className='top-sec-right' >
                    <h3 onClick={() => close()} ><Link to='/product'>View all</Link></h3>
                </div>
            </div>


            {/* slider one >>> */}
            <div className="product">
                <div className="container">
                    <div className="content">

                        {/* slider */}
                        <Slider {...settings}>
                            {
                                homeproduct.map((elm) => {
                                    return (



                                        <div className="box" key={elm.Id}>
                                            <div className="img-box">
                                                <img src={elm.Img} alt={elm.Title} />
                                                <div className="icon-box">

                                                    <li onClick={() => Addtocart(elm)} >
                                                        <IoCartOutline />
                                                    </li>
                                                    <li onClick={() => view(elm)}>
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
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            {/* main item used more one time */}
            <div className="top-sec">
                <h2 className='top-sec-left'>Other Products</h2>

                <div className='top-sec-right' >
                    <h3 onClick={() => close()} ><Link to='/product'>View all</Link></h3>
                </div>
            </div>

            {/* slider two >>> */}

            <div className="product prod-two">
                <div className="container">
                    <div className="content">
                        <Slider {...settings}>
                            {
                                HomeproductTwo.map((elm) => {
                                    return (
                                        <div className="box" key={elm.Id}>
                                            <div className="img-box">
                                                <img src={elm.Img} alt={elm.Title} />
                                                <div className="icon-box">
                                                    <li>
                                                        <IoCartOutline />
                                                    </li>
                                                    <li onClick={() => view(elm)}>
                                                        <Link className='abs' > <FaRegEye /></Link>

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
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
