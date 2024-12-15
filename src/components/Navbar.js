import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = () => {
    const { user, logout, isLoading } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
    
        console.log('User has changed:', user);
    }, [user]); 

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.nav-item.dropdown')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-grey shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/" data-aos="fade-down">
                    SMAN 1 Habinsaran
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={toggleNavbar}
                    aria-label="Toggle navigation"
                    style={{
                        border: "none",
                        outline: "none",
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard" data-aos="fade-down">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown" onClick={toggleDropdown}>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#!"
                                role="button"
                                aria-expanded={isDropdownOpen ? "true" : "false"}
                                data-aos="fade-down"
                            >
                                Tentang Sekolah

                                
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                                <li>
                                    <Link className="dropdown-item" to="/Visi">
                                        Visi dan Misi
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Jurusan">
                                        Jurusan
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Program">
                                        Program
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pendaftaran" data-aos="fade-down">
                                Pendaftaran
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/data" data-aos="fade-down">
                                Data Siswa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" data-aos="fade-down">
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            {user ? (
                                <>
                                    {user.username && (
                                        <h1 className="halo-message me-3" data-aos="fade-down">
                                            Halo, {user.username}
                                        </h1>
                                    )}
                                    <button
                                        className="btn logout-btn d-flex align-items-center"
                                        onClick={handleLogout}
                                        data-aos="fade-left"
                                    >
                                        <FaSignOutAlt className="me-1" /> Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className="btn sign-in-btn d-flex align-items-center"
                                    data-aos="fade-left"
                                >
                                    <FaSignInAlt className="me-1" /> Sign In
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
