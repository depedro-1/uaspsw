import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Menambahkan durasi animasi
    });
  }, []);

  return (
    <div className="contact-page">
      <header className="contact-header" data-aos="fade-in">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Kami selalu siap mendengar kebutuhan Anda. Jangan ragu untuk menghubungi kami.
        </p>
      </header>

      <div className="contact-content" data-aos="zoom-in">
        <div className="background-text">Reach Us</div>
        <div className="message-form" data-aos="fade-left">
          <h2 className="form-title">Leave Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Enter message subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message here..." rows="5"></textarea>
            </div>

            <button type="submit" className="form-submit">
              <span className="send-icon">Send</span>
            </button>
          </form>
        </div>

        <div className="contact-info" data-aos="fade-right">
          <h2>Contact Details</h2>
          <p>Jl. Parsoburan, Parsoburan Tengah, Habinsaran, Toba, Sumatera Utara, 22383</p>
          <p><a href="https://wa.me/qr/2WBB2XPDF6FOE1" className="contact-link">+62 822-7642-3194 (WhatsApp)</a></p>
          <p><a href="mailto:depedrompane@gmail.com" className="contact-link">depedrompane@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://www.youtube.com/" className="social-icon">YouTube</a>
            <a href="https://www.instagram.com/" className="social-icon">Instagram</a>
            <a href="https://www.facebook.com/" className="social-icon">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
