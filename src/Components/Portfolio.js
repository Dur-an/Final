import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import hero_img from '../assets/img/hero-img.png';
import modern2 from '../assets/img/portfolio/modern/modern2.png';
import modern3 from '../assets/img/portfolio/modern/modern3.png';
import rustic2 from '../assets/img/portfolio/rustic/rustic2.png';
import rustic3 from '../assets/img/portfolio/rustic/rustic3.png';
import Trad1 from '../assets/img/portfolio/traditional/traditional1.png';
import Trad2 from '../assets/img/portfolio/traditional/traditional2.png';
import Home from './Home';
import add from '../assets/img/add.png'
import link from '../assets/img/link.png'

function Portfolio(props, ref) {
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (filter) => {
        setActiveButton(filter);
    };
    useEffect(() => {
        const section = document.querySelector(".section");

        const handleScroll = () => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 0.34;

            if (sectionPosition < screenPosition) {
                section.classList.add("animate");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const portfolioItems = [{ category: 'Modern', image: modern2, previewLink: '', detailsLink: 'portfolio-details-modern.html', des: "Click here to check out our Modern selection" },
     { category: 'Modern', image: modern3, previewLink: '', detailsLink: 'portfolio-details-modern.html', des: "Click here to check out our Modern selection" },
      { category: 'Traditional', image: Trad1, previewLink: hero_img, detailsLink: 'portfolio-details-traditional.html', des: "Check out our Traditional selection." },
       { category: 'Traditional', image: Trad2, previewLink: hero_img, detailsLink: 'portfolio-details-traditional.html', des: "Check out our Traditional selection." },
        { category: 'Rustic', image: rustic2, previewLink: 'assets/img/portfolio/rustic/rustic2.png', detailsLink: 'portfolio-details-rustic.html', des: "Check out our Rustic selection." },
         { category: 'Rustic', image: rustic3, previewLink: 'assets/img/portfolio/rustic/rustic2.png', detailsLink: 'portfolio-details-rustic.html', des: "Check out our Rustic selection." },
          { category: 'Red', image: rustic3, previewLink: 'assets/img/portfolio/rustic/rustic2.png', detailsLink: 'portfolio-details-rustic.html', des: "Check out our Rustic selection."}
        ];

    const filteredItems =
        activeButton === 'All'
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeButton);
            const [showModal, setShowModal] = useState(false);
            const [selectedImage, setSelectedImage] = useState('');
          
            const handleImageClick = (image) => {
              setSelectedImage(image);
              setShowModal(true);
            };
          
            const handleModalClose = () => {
              setSelectedImage('');
              setShowModal(false);
            };
    return (
        <>

            <div className="Portfolio-css section ">
                <section id="portfolio" className="portfolio" >
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Portfolio</h2>
                            <p>Beautiful Doors for Any Home or Business.</p>
                        </div>

                        <ul
                            id="portfolio-flters"
                            className="d-flex justify-content-center aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <li
                                onClick={() => handleButtonClick('All')}
                                className={activeButton === 'All' ? 'filter-active' : ''}
                            >
                                All
                            </li>
                            <li
                                onClick={() => handleButtonClick('Modern')}
                                className={activeButton === 'Modern' ? 'filter-active' : ''}
                            >
                                Modern
                            </li>
                            <li
                                onClick={() => handleButtonClick('Traditional')}
                                className={activeButton === 'Traditional' ? 'filter-active' : ''}
                            >
                                Traditional
                            </li>
                            <li
                                onClick={() => handleButtonClick('Rustic')}
                                className={activeButton === 'Rustic' ? 'filter-active' : ''}
                            >
                                Rustic
                            </li>
                            <li
                                onClick={() => handleButtonClick('Craftsman')}
                                className={activeButton === 'Craftsman' ? 'filter-active' : ''}
                            >
                                Craftsman
                            </li>
                            
                            
                        </ul>    
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
      {filteredItems.map((item, index) => (
        <div key={index} className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-wrap">
            <img src={item.image} className="img-fluid img-f" alt="" />
            <div className="portfolio-info">
              <div>
                <h4>{item.category}</h4>
                <p>{item.des}</p>
              </div>
              <div className="portfolio-links">
                <div>
                  <img className='plus-icon' src={add} alt="" onClick={() => handleImageClick(item.image)} />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ))}
      {showModal && (
        <div className="image-modal">
          <div className="modal-overlay" onClick={handleModalClose} />
          <div className="modal-content">
            <img src={selectedImage} alt="" />
            <button className="close-icon" onClick={handleModalClose}>X</button>
          </div>
        </div>
      )}
    </div>
                    </div>
                </section>
            </div></>

    );
}
export default React.forwardRef(Portfolio);