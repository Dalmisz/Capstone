import img1 from './images/logo.jpg'
import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-img-container'>
                <img src={img1} alt="" className='footer-img'></img>
            </div>
            <div className="doormat">
                <h3>Doormat Navigation</h3>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/orderonline">Order Online</Link>
                <Link to="/login">Log in</Link>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <p>Address: 682 California, USA</p>
                <p>Phone Number: ++ 002 584 251 11</p>
                <p>E-mail: <a href="mailto:info.littlelemon@gmail.com" className='e-mail'>info.littlelemon@gmail.com</a></p>
            </div>
            <div className="social-media">
                <h3>Social Media Links</h3>
                <p>Instagram: @littlelemonrestaurant</p>
                <p>Facebook: Little Lemon Restaurant</p>
                <p>Tiktok: Little Lemon Restaurant</p>
            </div>
        </div>
    )
}

export default Footer;