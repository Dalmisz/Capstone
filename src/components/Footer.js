import React from "react";

function Footer() {
    return (
        <>
            <img src="" alt=""></img>
            <div className="doormat">
                <h3>Doormat Navigation</h3>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Reservatinos</a>
                <a href="">Order Online</a>
                <a href="">Log in</a>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <p>Adress</p>
                <p>Phone number</p>
                <p>E-mail<a href="mailto:info.littlelemon@gmail.com">info.littlelemon@gmail.com</a></p>
            </div>
            <div className="social-media">
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Tiktok</p>
            </div>
            <p>&copy; 2024 Little Lemon Restaurant Website</p>
        </>
    )
}

export default Footer;