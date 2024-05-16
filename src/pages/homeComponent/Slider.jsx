import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import webBanner from "/assets/img/background-it-sheba/it-sheba-bannar1.png";
import hostingBanner from "/assets/img/background-it-sheba/hosting-bannar.jpg";
import itShebaBanner from "/assets/img/background-it-sheba/graphics-banner-design.jpg";

const Slider = () => {
    // Array containing client data for each slide
    const slideData = [
        {
            item: 1,
            background: webBanner,
            title: "Website & Software Development",
            subTitle: "We Will Design And Develop Website & Software",
            description: "We Will Design And Develop Website & Software",
            imageUrl: "assets/img/background-it-sheba/web.png",
            btnText: "Our Projects",
            btnLink: "Webdevelopment"
        },
        {
            item: 2,
            background: hostingBanner,
            title: "Domain & Hosting Support",
            subTitle: "Domain & Hosting Service",
            description: "20x Fast NVMe SSD | Bullet proof security | 100% Uptime | Free 30 Days Backup | Free SiteLock | Free SSL",
            imageUrl: "assets/img/background-it-sheba/hosting.png",
            btnText: "Learn More",
            btnLink: "https://hostingsheba24.com/ " 
        },
        {
            item: 3,
            background: itShebaBanner,
            title: "Digital Marketing & Graphics Design",
            subTitle: "We Give Digital and Graphics Support",
            description: "We got an excellent team of graphics designer & digital marketing team. They are very creative and dedicated to support our client.",
            imageUrl: "assets/img/background-it-sheba/graphics.png",
            btnText: "Contact",
            btnLink: "contact"
        }
    ];

    return (
        <section className="hero-slider-section">
            <OwlCarousel
                items={1}
                nav={false}
                autoplay={true}
                autoplayTimeout={3500}
                autoplayHoverPause={true}
                autoplaySpeed={4500}
                className="owl-carousel owl-theme hero-slider-one custom-dot dot-right-center">
                {slideData.map(item => (
                    <div key={item.item} className="item" style={{ backgroundImage: `url(${item.background})` }}>
                        <div className="gradient-overly-right hero-equal-height ptb-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <div className="hero-content-wrap text-white position-relative z-index">
                                            <h1 className="slider-area-text">{item.title}</h1>
                                            <h1 className="text-white">{item.subTitle}</h1>
                                            <p className="lead">{item.description}</p>
                                            <div className="action-btns mt-4">
                                                <a href={item.btnLink} className="btn solid-white-btn mr-3">{item.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="hero-content-wrap text-white position-relative z-index">
                                            <img src={item.imageUrl} alt={item.title} title={item.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </section>
    );
}

export default Slider;





            
