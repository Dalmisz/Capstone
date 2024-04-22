import img7 from './images/Mario and Adrian A.jpg';
import img8 from './images/Mario and Adrian b.jpg';
import React from "react";

function About() {
    return (
        <div className="about">
            <div className='about-content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <div className='about-text'>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p></div>
            </div>
            <div className='about-img'>
                <img src={img7} alt="" className='chef-img chef-1'></img>
                <img src={img8} alt="" className='chef-img chef-2'></img>
            </div>
        </div>
    )
}


export default About;