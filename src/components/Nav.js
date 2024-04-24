import img1 from './images/logo.jpg';
import React from "react";
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className='navbar'>
            <a href="/" className='logo'>
                <img src={img1} alt="Logo of the Little Lemon Restaurant" className='img-1'></img>
            </a>
            <div className='menu-icon'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className='list-items'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link to="/orderonline">Order Online</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;