import img6 from './images/Nick Lauw.jpg';
import img7 from './images/John Wane.jpg';
import img8 from './images/Cassandra Figo.jpg';
import img9 from './images/Annie Kit.jpg';
import React from "react";

function Main() {
    return (
        <>
            <div className="testimonials">
                <div className="testimonials-header">
                    <h2>Testimonials</h2>
                </div>
                <div className="box-container">
                    <div className="box">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <div className='box-img'>
                            <img src={img6} alt=""></img>
                            <h2>Nick Lauw</h2></div>
                        <p>I had a great time celebrating my birthday at the Little Lemon Restaurant. The food was delicious and service was great! Thank you for the memory!</p>
                    </div>
                    <div className="box">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <div className='box-img'>
                            <img src={img7} alt=""></img>
                            <h2>John Wane</h2>
                        </div>
                        <p>I was so happy to find Little Lemon. I think it will be my spot!We really liked the food.</p>
                    </div>
                    <div className="box">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <div className='box-img'>
                            <img src={img8} alt=""></img>
                            <h2>Cassandra Figo</h2>
                        </div>
                        <p>Spent an evening with my family at Little Lemon.We really liked the food. The place is child friendly, it was easy to find the perfect dish for them.</p>
                    </div>
                    <div className="box">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <div className='box-img'>
                            <img src={img9} alt=""></img>
                            <h2>Annie Kit</h2>
                        </div>
                        <p>Great food! Sparkly drinks! Good vibe! Whatever you want.</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Main;