import React from "react";
import "aos/dist/aos.css";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container py-5">
        <div className="row">
          <div
            className="col-md-4 mb-4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
           <h3>SMAN 1 Habinsaran</h3>  
            <p>  
              Di antara sekian banyak langkah menuju masa depan, pendidikan berkualitas adalah kunci utama untuk membedakan kesuksesan dari sekadar mimpi.  
            </p>  
          </div>

          <div
            className="col-md-4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/aldinababan333?mibextid=ZbWKwL" className="support-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="support-link">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="support-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="support-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div
            className="col-md-4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h4>Address</h4>
            <p>
              <strong>Address:</strong> Jl. Parsoburan, Parsoburan Tengah, Habinsaran, Toba, Sumatera Utara, 22383
            </p>
            <p>
              <strong>Email:</strong> 
              <br />
              <a href="mailto:sman1habinsaran@gmail.com" className="email-link">
                sman1habinsaran@gmail.com
              </a>
            </p>
            <p>
              <strong>Team Contacts:</strong>
            </p>
            <ul className="list-emails">
              <li>
                <a href="mailto:depedrompane@gmail.com" className="email-link">
                  depedrompane@gmail.com
                </a>
              </li>
            </ul>
            <p>
              <strong>Phone:</strong>{" "}
              <a 
                href="https://wa.me/qr/2WBB2XPDF6FOE1 " 
                className="phone-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                082276423194
              </a>
            </p>

          </div>

        </div>
      </div>

      <div className="footer_bar text-center bg-dark text-white py-2">
        ©2024 | Created by{" "}
        <span className="text-warning fw-bold">Depedro</span>
      </div>
    </footer>
  );
};

export default Footer;