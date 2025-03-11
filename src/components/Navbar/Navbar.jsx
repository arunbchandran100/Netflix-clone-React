import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
// import { logout } from "../../firebase";

function Navbar(){
    const navRef = useRef();
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                navRef.current?.classList.add("nav-dark");
            } else {
                navRef.current?.classList.remove("nav-dark");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div ref={navRef} className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Netflix Logo" />
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "active" : ""}>
                    <li key="home">Home</li>
                    <li key="tv-shows">TV Shows</li>
                    <li key="movies">Movies</li>
                    <li key="new-popular">New & Popular</li>
                    <li key="my-list">My List</li>
                    <li key="languages">Browse By Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="Search" className="icons" />
                <p>Children</p>
                <img src={bell_icon} alt="Notifications" className="icons" />
                <div className="navbar_profile" onClick={toggleDropdown}>
                    <img src={profile_img} alt="Profile" className="profile" />
                    <img src={caret_icon} alt="Dropdown" className="DropDownArrow" />
                    <div className={`dropDown ${showDropdown ? "show" : ""}`}>
                        <p onClick={()=>{logout()}}>Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
