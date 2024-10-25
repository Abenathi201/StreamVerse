import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/media">Media</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/series">Series</Link></li>
                <li><Link to="/animations">Animations</Link></li>
                <li><Link to="/documentaries">Documentaries</Link></li>
                <li><Link to="/kids">Kids</Link></li>
                <li><Link to="/reality">Reality</Link></li>
                <li><Link to="/standup">Stand-Up Comedy</Link></li>
                <li><Link to="/user-profile">Profile</Link></li>
                {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
