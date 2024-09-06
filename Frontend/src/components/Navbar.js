/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import BIGCE from '../assets/images/BIGCE.jpg'
import '../components/Navbar.css'

export default function Navbar() {
  return (
//     <nav className="navbar navbar-expand-lg navbar-primary mb-0" style={{background:"#F5F5DC"}}>
//       {/* //#94b8b8 */}
//       <img src={BIGCE}/>
//       <Link className="navbar-brand" to="/">Bharat Ratna Indira Gandhi College of Engineering, Solapur</Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse " id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item active">
//             <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">About</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/contact">Contact</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/blog">Blog</Link>
//           </li>

          
//         <li className="nav-item">
//             <Link className="nav-link" to="/login">Login</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/registration">Registration</Link>
//           </li>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//         >
//         <span className="navbar-toggler-icon"></span>
//         </button>
// <li className="nav-item dropdown">
//                     <a
//                         className="nav-link dropdown-toggle"
//                         href="#"
//                         id="navbarDropdown"
//                         role="button"
//                         data-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                         More
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <a className="dropdown-item" href="#">Events</a>
//                         <a className="dropdown-item" href="#">Programs</a>
//                         <div className="dropdown-divider"></div>
//                         <a className="dropdown-item" href="#">Gallery</a>
//                     </div>
//                 </li>
                
//         </ul>
//       </div>
//     </nav>
<>  
<nav class="navbar navbar-expand-lg py-4 py-lg-0 shadow">
<div class="container px-4">
  <div className='image'>
  <img src={BIGCE} alt=""/>
  </div>
    
    <Link className="navbar-brand mt-5" to="/">Bharat Ratna Indira Gandhi College of Engineering, Solapur</Link>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#top-navbar" aria-controls="top-navbar">
        <i class="lni lni-grid-alt"></i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="top-navbar" aria-labelledby="top-navbarLabel">
       
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#top-navbar" aria-controls="top-navbar">
            <div class="d-flex justify-content-between p-3">
                <img src="logo.png" alt=""/>
                <i class="lni lni-cross-circle"></i>
            </div>
        </button>
        <ul class="navbar-nav ms-lg-auto p-4 p-lg-0">
            <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
            <Link className="nav-link" to="/about">About</Link>
            </li>
           
            <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
            <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
            <Link className="nav-link" to="/registration">Registration</Link>
            </li>
        </ul>
    </div>
</div>
</nav>
</>
);
}
