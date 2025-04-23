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
                                <a>About Amazon</a>
                                <a>Careers</a>
                                <a>Amazon Science</a>
                            </ul>
                        </div>
                        <div className='list' >
                            <h2>Shop with Us</h2>
                            <ul>
                                <a>Your Account</a>
                                <a>Your Addresses</a>
                                <a>Your Orders</a>
                                <a>Your Lists</a>
                            </ul>
                        </div>
                        <div className='list' >
                            <h2>Make Money with Us</h2>
                            <ul>
                                <a>Protect and build your brand</a>
                                <a>Advertise Your Products</a>
                                <a>Sell on Amazon</a>
                                <a>Fulfillment by Amazon</a>
                                <a>Supply to Amazon</a>
                            </ul>
                        </div>
                        <div className='list' >
                            <h2>Let Us Help You</h2>
                            <ul>
                                <a>Help</a>
                                <a>Shipping & Delivery</a>
                                <a>Returns & Replacements</a>
                                <a>Recalls and Product Safety Alerts</a>
                                <a>Amazon App Download</a>
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
                            <a><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</a>
                            <a><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</a>
                            <a><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</a>
                            <a><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</a>
                        </div>
                        <div className='bar'>
                            <a><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</a>
                            <a><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</a>
                            <a><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</a>
                            <a><span>Amazon Advertising</span> <br />
                                Find, attract, and <br />
                                engage customers</a>
                        </div>
                        <div className='rights'>
                            <div className='top'>
                                <a>Interest-Based Ads</a>
                                <a>privacy Notice</a>
                                <a>Conditions Of Use & Sale</a>
                            </div>

                            <a>©1996–2025, Amazon.com, Inc. or its affiliates</a>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
