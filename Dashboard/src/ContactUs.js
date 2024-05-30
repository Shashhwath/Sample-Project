import React from 'react'
import './index.css'
const ContactUs = () => {
  return (

    <div className='vh-100 contact'>
      <div className="contact-container ">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email: <a href="shashhwathsl@gmail.com">shashhwaths@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>Phone: <a href="tel:+1234567890">+91 6383645975</a></p>
        </div>
        <div className="contact-item">
          <i className="fab fa-github"></i>
          <p>GitHub: <a href="https://github.com/Shashhwath" target="_blank" rel="noopener noreferrer">https://github.com/Shashhwath</a></p>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin"></i>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default ContactUs
