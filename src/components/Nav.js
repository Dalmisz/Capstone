import img1 from './images/logo.jpg';
import React from "react";


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
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Menu</a>
                </li>
                <li>
                    <a href="">Reservations</a>
                </li>
                <li>
                    <a href="">Order Online</a>
                </li>
                <li>
                    <a href="">Log in</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;