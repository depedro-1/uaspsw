import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from '../img/background.jpg';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, [user, navigate]);

  return (
    <div className="dashboard">
      <section
        className="hero vh-100 d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="hero-content text-center" style={{ zIndex: 2 }}>
          <h1 data-aos="fade-right">Welcome to SMAN 1 Habinsaran</h1>
          <div
            className="join-us-message mt-3"
            data-aos="fade-up"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
           <p>
              SMAN 1 Habinsaran, tempat pendidikan berkualitas yang membentuk generasi cerdas, kreatif, dan berprestasi.  
              Mari bersama-sama jelajahi ilmu pengetahuan, keterampilan, dan karakter unggul untuk meraih masa depan gemilang!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
