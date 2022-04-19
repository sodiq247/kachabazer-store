import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Footer = () => (
  <div>
    <div>
      <h1>Get Your Daily Needs From Our KachaBazar Store</h1>
      <p>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>
      <Link to="/">
        <img src='#' alt="Applystore" />
      </Link>
      <Link to="/">
        <img src='#' alt="Playstore" />
      </Link>
    </div>
    <div>
      <p><i className="bx bx-bus"></i>Free Shipping From $500.00</p>
      <p><i className="bx bx-phone"></i>Support 24/7 At Anytime</p>
      <p><i className="bx bx-credit-card"></i>Secure Payment Totally Safe</p>
      <p><i className="bx bx-gift"></i>Latest Offer Upto 20% Off</p>
    </div>
    <div>
      <p>Company</p>
      <ul>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/">Careers</Link></li>
        <li><Link to="/">Latest News</Link></li>
      </ul>
      <p>Top Category</p>
      <ul>
        <li><Link to="/">Fish & Meat </Link></li>
        <li><Link to="/">Soft Drinks</Link></li>
        <li><Link to="/">Baby Care</Link></li>
        <li><Link to="/">Beauty & Health</Link></li>
      </ul>
      <p>My Account</p>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/">My Orders</Link></li>
        <li><Link to="/">Recent Orders</Link></li>
        <li><Link to="/">Updated Profile</Link></li>
      </ul>
      <h3>KACHABAZAR</h3>
      <p>987 Andre Plain Suite High Street 838,
        Lake Hestertown, USA
        Tell: 02.356.1666
        Email: ccruidk@test.com
      </p>

    </div>
    <h5>Follow Us</h5>
    <ul>
      <li> <Link to="/">
        <img src='#' alt="Facebook" />
      </Link>
     </li>
     <li> <Link to="/">
        <img src='#' alt="Twitter" />
      </Link>
     </li>
     <li> <Link to="/">
        <img src='#' alt="Pinintrest" />
      </Link>
     </li>
     <li> <Link to="/">
        <img src='#' alt="Lindln" />
      </Link>
     </li>
     <li> <Link to="/">
        <img src='#' alt="Whatsapp" />
      </Link>
     </li>
    </ul>

    <h5>Call Us Today!</h5>
    <h1>+012345-67900</h1>

    <Link to="/">
        <img src='#' alt="PayPal" />
      </Link>
    <div />
    <div><p>Copyright @ <Link to="/">HtmlLover</Link>,All rights reserved.</p></div>


  </div>

)

export default Footer