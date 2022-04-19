import React from 'react'
//import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss';
import Search from './search/Search';

const Header = () => {
  return (
    <div className="mainNavbar py-4 d-lg-none px-md-5">
        
        <nav className='nav-a'>
            
            <p><i className="bx bx-phone"/>We are available 24/7, Need help? Call Us:<Link to='/'>+01234560352</Link></p>
            <ul>
                <li><Link to='/AboutUs'>About Us</Link></li>
                <li><Link to='/contactus'> Contact Us</Link></li>
                <li><Link to='/account'> My account</Link></li>
                <li><Link to='/account'><i className="bx bx-user">Login</i></Link></li>
            </ul>

        </nav>
        <div className='nav-b'>
        <div>
        <ul><li>
            <Link to='/'><h1>KACHABABAZAR</h1></Link>
            </li>
                <li>
                   <Search />
                </li>
                <li><Link to='/'><i className="bx bx-bell"></i></Link></li>
                <li><Link to='/cart'><i className="bx bx-cart"></i></Link></li>
                <li><Link to='/account'><i className="bx bx-user"></i></Link> </li>
            </ul>
        </div>
        <div className='nav-c'>
        <ul>
                <li>Categories</li>
                <li><Link to='/aboutus'>About Us</Link></li>
                <li><Link to='/contactus'> Contact Us</Link></li>
                <li>Pages</li>
                <li><Link to='/offers'>Offers</Link></li>
                <li><Link to='/privacypolicy'>Privacy Policy</Link></li>
                <li><Link to='/terms'> Terms & Conditions</Link></li>
               
            </ul>
        </div>

        </div>
        <div >
            <ul>
                <li>Categories</li>
                <li><Link to='/aboutus'>About Us</Link></li>
                <li><Link to='/contactus'> Contact Us</Link></li>
                <li>Pages</li>
                <li><Link to='/offers'>Offers</Link></li>
                <li><Link to='/privacypolicy'>Privacy Policy</Link></li>
                <li><Link to='/terms'> Terms & Conditions</Link></li>
               
            </ul>

        </div>
        <hr />
    </div>
  )
}

export default Header


// import React, { useRef, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'

// import logo from '../assets/images/Logo-2.png'

// const mainNav = [
//     {
//         display: "About Us",
//         path: "/aboutus"
//     },
//     {
//         display: "Contact Us",
//         path: "/contactus"
//     },
//     {
//         display: "My account",
//         path: "/account"
//     },
//     {
//         display: "Login",
//         path: "/account"
//     }
// ]

// const Header = () => {

//     const { pathname } = useLocation()
//     const activeNav = mainNav.findIndex(e => e.path === pathname)

//     const headerRef = useRef(null)

//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//                 headerRef.current.classList.add('shrink')
//             } else {
//                 headerRef.current.classList.remove('shrink')
//             }
//         })
//         return () => {
//             window.removeEventListener("scroll")
//         };
//     }, []);

//     const menuLeft = useRef(null)

//     const menuToggle = () => menuLeft.current.classList.toggle('active')

//     return (
//         <div className="header" ref={headerRef}>
//             <div className="container">
//                 <div className="header__logo">
//                     <Link to="/">
//                         {/* <img src={logo} alt="" /> */}
//                     </Link>
//                 </div>
//                 <div className="header__menu">
//                     <div className="header__menu__mobile-toggle" onClick={menuToggle}>
//                         <i className='bx bx-menu-alt-left'></i>
//                     </div>
//                     <div className="header__menu__left" ref={menuLeft}>
//                         <div className="header__menu__left__close" onClick={menuToggle}>
//                             <i className='bx bx-chevron-left'></i>
//                         </div>
//                         {
//                             mainNav.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
//                                     onClick={menuToggle}
//                                 >
//                                     <Link to={item.path}>
//                                         <span>{item.display}</span>
//                                     </Link>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                     <div className="header__menu__right">
//                     <div className="header__menu__item header__menu__right__item">
//                             <Link to="/aboutus">
//                            </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/accout">
//                            </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/cart">
//                            </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/contactus">
//                            </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/checkout">
//                            </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/faq">
//                            </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/offers">
//                            </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/privacypolicy">
//                            </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/terms">
//                            </Link>
//                         </div>
                        
//                         <div className="header__menu__item header__menu__right__item">
//                             <i className="bx bx-bell"></i>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/cart">
//                                 <i className="bx bx-shopping-bag"></i>
//                             </Link>
//                         </div>
//                         <div className="header__menu__item header__menu__right__item">
//                            <Link to='/account'>
//                             <i className="bx bx-user"></i>
//                             </Link>
//                         </div>
                        
//                     </div>
//                     <div>
//                         <ul>
//                            <li><Link to="/">Categories</Link></li>
//                             <li><Link to="/aboutus">About Us</Link></li>
//                             <li><Link to="/contactus">Contact Us</Link></li>
//                            <li><Link to="/">Pages</Link></li>
//                             <li><Link to="/offers">Offers</Link></li>
//                             <li><Link to="/privacypolicy">Privacy Policy</Link></li>
//                             <li><Link to="/terms">Terms & Conditions</Link></li>
//                         </ul>
                        
//                      </div>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default Header

// import './navbar.scss';
// import { BsPerson, BsCart } from 'react-icons/bs';
// import { AiOutlineHome, AiOutlineAlignLeft } from 'react-icons/ai';
// import { getAuth } from 'firebase/auth';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { MOBILE_MODAL_OPEN } from '../../../redux/closemodal/closeModalTypes';
// import { useAuthStatus } from '../../customHooks/useAuthStatus';

// const Header = () => {
//   const auth = getAuth();
//   const { loggedIn } = useAuthStatus();
//   const dispatch = useDispatch();

//   const openModal = () => {
//     dispatch({
//       type: MOBILE_MODAL_OPEN,
//     });
//   };

//   return (
//     <div className="mainNavbar py-4 d-lg-none px-md-5">
//       <div className="myContainer d-flex justify-content-between">
//         <div className="">
//           <AiOutlineAlignLeft
//             size={25}
//             className="iconStyle"
//             onClick={openModal}
//           />
//         </div>
//         <div>
//           <Link to="/">
//             <AiOutlineHome size={25} className="iconStyle" />
//           </Link>
//         </div>
//         <div className="position-relative">
//           <BsCart size={25} className="iconStyle" />
//           <span className="itemNumber">1</span>
//         </div>
//         <div>
//           <Link to="/dashboard">
//             {loggedIn ? (
//               <h2 className="iconStyle">{auth.currentUser.displayName[0]}</h2>
//             ) : (
//               <BsPerson size={25} className="iconStyle" />
//             )}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
