import img3 from './images/greeksalad.jpg';
import img4 from './images/bruscetta.jpg';
import img5 from './images/lemondessert.jpg';
import React from 'react';

function Card() {
    return (
        <div className="card">
            <div className="card-header">
                <h1>This Weeks Specials!</h1>
                <a href=""><button>Online Menu</button></a>
            </div>
            <div className='card-main'>
                <div className="card-container">
                    <div className="image-container">
                        <img src={img3} alt="Greek salad presented." className='img-3'></img>
                    </div>
                    <div className="card-title">
                        <h3>Greek Salad</h3>
                        <p>$ 12.99</p>
                    </div>
                    <div className="card-body">
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosmary croutons.</p>
                    </div>
                    <div className="btn">
                        <a>Order a delivery</a>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M549 851 c-35 -36 -37 -61 -6 -97 17 -19 33 -27 56 -27 70 0 101 84
                                47 130 -36 31 -61 29 -97 -6z"/>
                                <path d="M423 681 c-66 -53 -120 -111 -132 -142 -15 -40 6 -69 81 -114 l67
                                -40 1 -92 0 -93 40 0 40 0 0 95 c0 101 -10 133 -49 169 l-21 19 27 30 c50 52
                                59 53 108 8 l45 -41 85 0 85 0 0 35 0 35 -52 0 c-75 0 -89 6 -125 54 -57 74
                                -103 116 -128 116 -13 0 -45 -17 -72 -39z"/>
                                <path d="M193 389 c-44 -13 -90 -62 -103 -110 -31 -112 77 -220 189 -189 82
                                22 133 109 111 189 -13 50 -60 97 -108 111 -43 11 -46 11 -89 -1z m113 -83
                                c25 -24 34 -43 34 -66 0 -23 -9 -42 -34 -66 -46 -46 -86 -46 -132 0 -46 46
                                -46 86 0 132 46 46 86 46 132 0z"/>
                                <path d="M673 389 c-44 -13 -90 -62 -103 -110 -41 -150 149 -259 259 -148 83
                                83 46 227 -67 259 -43 11 -46 11 -89 -1z m113 -83 c25 -24 34 -43 34 -66 0
                                -23 -9 -42 -34 -66 -46 -46 -86 -46 -132 0 -46 46 -46 86 0 132 46 46 86 46
                                132 0z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="card-container">
                    <div className="image-container">
                        <img src={img4} alt="Three bruscettas from our menu." className='img-4'></img>
                    </div>
                    <div className="card-title">
                        <h3>Bruschetta</h3>
                        <p>$ 5.99</p>
                    </div>
                    <div className="card-body">
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    </div>
                    <div className="btn">
                        <a>Order a delivery</a>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M549 851 c-35 -36 -37 -61 -6 -97 17 -19 33 -27 56 -27 70 0 101 84
                                47 130 -36 31 -61 29 -97 -6z"/>
                                <path d="M423 681 c-66 -53 -120 -111 -132 -142 -15 -40 6 -69 81 -114 l67
                                -40 1 -92 0 -93 40 0 40 0 0 95 c0 101 -10 133 -49 169 l-21 19 27 30 c50 52
                                59 53 108 8 l45 -41 85 0 85 0 0 35 0 35 -52 0 c-75 0 -89 6 -125 54 -57 74
                                -103 116 -128 116 -13 0 -45 -17 -72 -39z"/>
                                <path d="M193 389 c-44 -13 -90 -62 -103 -110 -31 -112 77 -220 189 -189 82
                                22 133 109 111 189 -13 50 -60 97 -108 111 -43 11 -46 11 -89 -1z m113 -83
                                c25 -24 34 -43 34 -66 0 -23 -9 -42 -34 -66 -46 -46 -86 -46 -132 0 -46 46
                                -46 86 0 132 46 46 86 46 132 0z"/>
                                <path d="M673 389 c-44 -13 -90 -62 -103 -110 -41 -150 149 -259 259 -148 83
                                83 46 227 -67 259 -43 11 -46 11 -89 -1z m113 -83 c25 -24 34 -43 34 -66 0
                                -23 -9 -42 -34 -66 -46 -46 -86 -46 -132 0 -46 46 -46 86 0 132 46 46 86 46
                                132 0z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="card-container">
                    <div className="image-container">
                        <img src={img5} alt="Lemon cake wiht a fork on a plate." className='img-5'></img>
                    </div>
                    <div className="card-title">
                        <h3>Lemon Dessert</h3>
                        <p>$ 5.00</p>
                    </div>
                    <div className="card-body">
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                    </div>
                    <div className="btn">
                        <a>Order a delivery</a>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M549 851 c-35 -36 -37 -61 -6 -97 17 -19 33 -27 56 -27 70 0 101 84
                                47 130 -36 31 -61 29 -97 -6z"/>
                                <path d="M423 681 c-66 -53 -120 -111 -132 -142 -15 -40 6 -69 81 -114 l67
                                -40 1 -92 0 -93 40 0 40 0 0 95 c0 101 -10 133 -49 169 l-21 19 27 30 c50 52
                                59 53 108 8 l45 -41 85 0 85 0 0 35 0 35 -52 0 c-75 0 -89 6 -125 54 -57 74
                                -103 116 -128 116 -13 0 -45 -17 -72 -39z"/>
                                <path d="M193 389 c-44 -13 -90 -62 -103 -110 -31 -112 77 -220 189 -189 82
                                22 133 109 111 189 -13 50 -60 97 -108 111 -43 11 -46 11 -89 -1z m113 -83
                                c25 -24 34 -43 34 -66 0 -23 -9 -42 -34 -66 -46 -46 -86 -46 -132 0 -46 46
                                -46 86 0 132 46 46 86 46 132 0z"/>
                                <path d="M673 389 c-44 -13 -90 -62 -103 -110 -41 -150 149 -259 259 -148 83
                                83 46 227 -67 259 -43 11 -46 11 -89 -1z m113 -83 c25 -24 34 -43 34 -66 0
                                -23 -9 -42 -34 -66 -46 -46 -86 -46 -132 0 -46 46 -46 86 0 132 46 46 86 46
                                132 0z"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;