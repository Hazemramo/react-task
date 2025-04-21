import React from 'react'

import { Link } from 'react-router-dom';
import './footer.css'


export const Footer = () => {
    return (



        <>


            <div className="footer">


                <div className="content">

                    <div className="back-top">
                        <h4>Back to top</h4>
                    </div>


                    <div className='lists'>

                        <div className='list' >
                            <h2>Get to Know Us</h2>
                            <ul>
                                <Link>About Amazon</Link>
                                <Link>Careers</Link>
                                <Link>Amazon Science</Link>
                            </ul>
                        </div>
                        <div className='list' >
                            <h2>Shop with Us</h2>
                            <ul>
                                <Link>Your Account</Link>
                                <Link>Your Addresses</Link>
                                <Link>Your Orders</Link>
                                <Link>Your Lists</Link>
                            </ul>
                        </div>
                        <div className='list' >
                            <h2>Make Money with Us</h2>
                            <ul>
                                <Link>Protect and build your brand</Link>
                                <Link>Advertise Your Products</Link>
                                <Link>Sell on Amazon</Link>
                                <Link>Fulfillment by Amazon</Link>
                                <Link>Supply to Amazon</Link>
                            </ul>
                        </div>
                        <div className='list' >
                            <h2>Let Us Help You</h2>
                            <ul>
                                <Link>Help</Link>
                                <Link>Shipping & Delivery</Link>
                                <Link>Returns & Replacements</Link>
                                <Link>Recalls and Product Safety Alerts</Link>
                                <Link>Amazon App Download</Link>
                            </ul>
                        </div>
                    </div>

                    <hr className='footer-hr' />

                    <div className="footer-lang">

                        <div className="content">

                            <div className="left-side">

                                <img src="/src/assets/pngimg.com - amazon_PNG25.png" alt="" />
                            </div>

                            <div className='right-side'>

                                <div className="language-selector">
                                    <span className="icon">🌐</span>
                                    <select>
                                        <option value="en">English</option>
                                        <option value="es">Español</option>
                                        <option value="fr">Français</option>
                                        <option value="de">Deutsch</option>
                                    </select>
                                </div>

                                <div className="country-selector">
                                    <img src="https://flagcdn.com/w40/eg.png" alt="Egypt Flag" />
                                    <span>Egypt</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-last">

                        <div className='bar'>
                            <Link><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</Link>
                            <Link><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</Link>
                            <Link><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</Link>
                            <Link><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</Link>
                        </div>
                        <div className='bar'>
                            <Link><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</Link>
                            <Link><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</Link>
                            <Link><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</Link>
                            <Link><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</Link>
                        </div>
                        <div className='rights'>
                            <div className='top'>
                                <Link>Interest-Based Ads</Link>
                                <Link>privacy Notice</Link>
                                <Link>Conditions Of Use & Sale</Link>
                            </div>

                            <Link>©1996–2025, Amazon.com, Inc. or its affiliates</Link>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
