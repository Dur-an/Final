import React, { useState, useEffect } from 'react';
import "./Door_Stop.css"
import hero_img from "../assets/img/hero-img.png"
export default function Door_Stop() {
    const [animationStyle, setAnimationStyle] = useState({});
    useEffect(() => {
        const intervalId = setInterval(() => {
          setAnimationStyle({
            animation: 'bounce 5s ease-in-out infinite'
          });
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, []);
    return (
        <div className="Door-Stop">
            <section id="hero" class="d-flex align-items-center">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate animate-onload" data-aos="fade-up" data-aos-delay="200">
                            <h1>Better Solutions For Your Business</h1>
                            <h2>In business for more than 30 years. Specializing in residential fiberglass doors, with
                                affordable prices. A wide variety of exterior doors in stock We are located behind Burton Auto
                                Supplies on International Blvd. Brownsville, Tx </h2>
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <a href="#portfolio" class="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate move-up-down" data-aos="zoom-in" data-aos-delay="200">
                            <img src={hero_img} className="img-fluid animated  zoom-in" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
