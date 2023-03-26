import React from 'react'

import './Client.css';
import client_1 from '../assets/img/clients/client-1.png';
import client_2 from '../assets/img/clients/client-2.png';
import client_3 from '../assets/img/clients/client-3.png';
import { useEffect } from "react";


export default function Client() {
    useEffect(() => {
        const clients = document.querySelectorAll(".client");
    
        const handleScroll = () => {
          clients.forEach((client) => {
            const clientPosition = client.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
    
            if (clientPosition < screenPosition) {
              client.classList.add("animate");
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className="Client-Css">
      <section id="clients" class="clients section-bg">
      <div class="container">

        <div class="row aos-init aos-animate" data-aos="zoom-in">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_1} class="img-fluid client" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_2} class="img-fluid client" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_3} class="img-fluid client" alt=""/>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
