import img2 from './images/baguettes.jpg';
import React from "react";

function Header() {
    return (
        <div className="hero-section">
            <div>
                <h1 className='hero-title'>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href=""><button>Reserve a Table</button></a>
            </div>
            <div className='hero-img'>
                <img src={img2} alt="Baguettes on a plate." className="img-2"></img>
            </div>
        </div>
    );
}

export default Header;