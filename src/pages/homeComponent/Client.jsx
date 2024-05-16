
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Client = () => {
    // Client data array
    const clientData = [
        { id: 1, src: "assets/img/partners/img/client logo-10.png", alt: "client logo" },
        { id: 2, src: "assets/img/partners/img/client logo-11.png", alt: "client logo" },
        { id: 3, src: "assets/img/partners/bangladesh-government.png", alt: "client logo" },
        { id: 4, src: "assets/img/partners/monir-group.jpg", alt: "client logo" },
        { id: 5, src: "assets/img/partners/img/client logo-04.png", alt: "client logo" },
        { id: 6, src: "assets/img/partners/img/client logo-05.png", alt: "client logo" },
        { id: 7, src: "assets/img/partners/img/client logo-06.png", alt: "client logo" },
        { id: 8, src: "assets/img/partners/img/client logo-07.png", alt: "client logo" },
        { id: 9, src: "assets/img/partners/img/client logo-08.png", alt: "client logo" },
        { id: 10, src: "assets/img/partners/img/client logo-09.png", alt: "client logo" },
        { id: 11, src: "assets/img/partners/fardin.png", alt: "client logo" },
        { id: 12, src: "assets/img/partners/amanot.png", alt: "client logo" },
        

        // Add more client data objects as needed
    ];

    return (
        <>
            <section className="client-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-2">
                                <h2>Brands Who Keep Trust On Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="overlay-opacity-gradient"></div>
                            <OwlCarousel
                                items={8}
                                nav={false}
                                autoplay={true}
                                className="owl-carousel owl-theme clients-carousel dot-indicator">
                                {clientData.map((client) => (
                                    <div key={client.id} className="item single-client">
                                        <img src={client.src} alt={client.alt} className="img-fluid client-img" />
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section> 
            
        </>
    );
};

export default Client;

