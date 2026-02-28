import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setShowNavbar(false);
            } else {
                // scrolling up
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
                <div className="nav-container">

                    {/* Logo */}
                    <div className="logo">
                        <h1>RJ Atlas Digital AI</h1>
                    </div>

                    {/* Hamburger */}
                    <div
                        className={`hamburger ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Links */}
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Websties</a></li>
                        <li><a href="#ai-videos" onClick={() => setMenuOpen(false)}>AI Videos</a></li>
                        <li><a href="#posters" onClick={() => setMenuOpen(false)}>Posters</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

                    </ul>
                </div>
            </nav>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="menu-overlay"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </>
    );
}

export default Navbar;
