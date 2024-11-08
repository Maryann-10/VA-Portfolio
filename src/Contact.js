import React from "react";
import "./App.css";
  const Contact = () => (
  <section id="contact">
  <h2>Get in Touch</h2>
  <p>Have a project in mind? Need assistance with your tasks? Let's connect!</p>

  <div className="contact-details">
    <p><strong>Email:</strong> <a href="mailto:maryannichaura@gmail.com">maryannichaura@gmail.com</a></p>
    
    <p><strong>Location:</strong> Based in Kenya, available for remote work worldwide.</p>
    
    <p><strong>Time Zone:</strong> GMT+3 (Typically respond within 24 hours)</p>
    
    <p><strong>Social Media:</strong></p>
    <ul>
      <li><a href="www.linkedin.com/in/maryann-ichaura-4560b92a8" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
    </ul>
    
    <p><strong>Privacy:</strong> Your information will remain confidential and won't be shared.</p>
  </div>

  <h3>Contact Form</h3>
  <form action="https://formspree.io/f/xwpkoyyj" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Submit</button>
    </form>
</section>
);
    
export default Contact;
