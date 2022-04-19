import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div>
    <div><h1>Contact Us</h1></div>
    <div>
      <ul>
        <li>
        <i className="bx bx-envelope"></i>
        <h3>Email Us</h3>
        <p><Link to='/Email'>kachabazar@gmail.com</Link>
        Interactively grow empowered for process-centric total linkage.</p>
        </li>
        <li>
        <i className="bx bx-phone"></i>
        <h3>Call Us</h3>
        <p><Link to='/phone'>029-00124667</Link>
         Distinctively disseminate focused solutions clicks-and-mortar ministate.</p></li>
        <li>
        <i className="bx bx-map"></i>
        <h3>Location</h3>
        <p>Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p></li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <img src='#' alt='big whatsapp'/>
        </li>
        <li>
          <h4>For any suppoort just send your query</h4>
          <p>Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and standardized infrastructures.</p>
          <form>
            <label>Name:</label>
            <input type='text' placeholder='Enter Your Name'/>
            <label>Email:</label>
            <input type='text' placeholder='Enter Your Email'/>
            <label>Subject:</label>
            <input type='text' placeholder='Enter Your Subject'/>
            <label>Message:</label>
		      	<textarea name="message" placeholder='Write Your Message Here'></textarea>
       </form>
          <button type='submit'>Send Message</button>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default ContactUs