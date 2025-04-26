import { FaRegUser, FaCarCrash } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { CiLogout, CiLogin } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css'
import { useState } from 'react';




// fun

const Nav = ({ searchbtn }: any) => {


  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const [search, setsearch] = useState('')
  const navigate = useNavigate();


  const handleKeyDown = (x: any) => {
    if (x.key === 'Enter') {
      x.preventDefault(); // مهم علشان يمنع reload في بعض الحالات
      searchbtn(search);
      navigate('/product');
    }
  };


  return (
    <>
      <div className='free'>
        <div className='icon'><FaCarCrash /> </div>
        <p>how are you</p>
      </div>

      <div className="main-header">
        <div className="cntainer">
          <div className="logo-nav">
            <img src="/react-task/images/trojan-battery-company-seeklogo.webp" alt="logo" />
          </div>

          <div className="search-input">
            <input onKeyDown={handleKeyDown} value={search} onChange={(e) => { setsearch(e.target.value) }} type="text" placeholder='Enter your product name.....' autoComplete='off' />
            <button onClick={() => { searchbtn(search); navigate('/product'); }}>
              search
            </button>
          </div>

          <div className="icon">

            {
              isAuthenticated && (
                <div className="account">

                  <div className="user-icon">
                    <FaRegUser />
                  </div>

                  <p>Hello, {user?.name}</p>

                </div>
              )
            }
            <div className="second-icon">
              <Link className='link' to="/"><FaRegHeart /></Link>
              <Link className='link' to="/cart"><IoBagHandleOutline /></Link>

            </div>


          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="nav">


            <div className='lang-sec'>
              <h3>EN</h3>
              <div className='flag-out'>
                <img className='flag-sec' src="/react-task/images/Flag_of_the_United_States.svg.webp" alt="" />
              </div>
            </div>
            <ul>
              <li className='active'>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/product'>Product</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
            <div className="auth">

              {
                isAuthenticated ?

                  <button className='logout-btn' onClick={() => logout()}> <h1>Logout</h1>  <CiLogout /></button>
                  :

                  <button className='login-btn' onClick={() => loginWithRedirect()}> <h1>Login</h1>  <CiLogin /></button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav