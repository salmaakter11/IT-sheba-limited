import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './homeComponent/Slider';
const Home = () => {
    return (
        <>
            <div className="main">
              <Slider/>
                <section className="client-section ptb-100">
                    <div className="container">
                        {/* <!--clients logo start--> */}
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
                                <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-10.png " alt="client logo"
                                            className="img-fluid client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-11.png " alt="client logo"
                                            className="img-fluid client-img" />
                                    </div>

                                    <div className="item single-client">
                                        <img src="assets/img/partners/bangladesh-government.png" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/monir-group.jpg" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/monir-trade.png" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-02.png" alt="client logo" className="img-fluid client-img"
                                            width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-03.png " alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-04.png " alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-05.png " alt="client logo"
                                            className="img-fluid client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-06.png " alt="client logo"
                                            className="img-fluid client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-07.png " alt="client logo"
                                            className="img-fluid client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-08.png " alt="client logo"
                                            className="img-fluid client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/img/client logo-09.png " alt="client logo"
                                            className="img-fluid client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/monir-trade.png" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/fardin.png" alt="client logo" className="img-fluid client-img"
                                            width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/amanot.png" alt="client logo" className="img-fluid client-img"
                                            width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/capital.png" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/hosting-sheba.png" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>

                                    <div className="item single-client">
                                        <img src="assets/img/partners/travel-sheba.png" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/faizan-car.png" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/umrah-sheba.png" alt="client logo"
                                            className="img-fluid client-img" width="75" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="assets/img/partners/muskan.png" alt="client logo" className="img-fluid client-img"
                                            width="75" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--clients logo end--> */}
                    </div>
                </section>
                {/* <!--client section start--> */}


                {/* <!-- Who We Are section start --> */}
                <section className="feature-tab-section ptb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-3 col-12 order-xl-first align-self-center">
                                <div className="image-box fadein text-xl-right text-center">
                                    <img src="assets/img/partners/about.png" alt="wp-hosting" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-9 col-12 order-lg-last ">
                                <h2>Who We Are </h2>
                                <p>We are Bangladesh leading and most well-known web design and development firm in Dhaka. We
                                    started our careers in the technology industry in 2020. There weren`t many businesses in
                                    this industry when we first started out. While web design and development was the first
                                    service we offered, over time we expanded our service offering to include software
                                    development, digital marketing, email marketing, SEO, bulk SMS marketing, telemarketing, and
                                    WhatsApp marketing. When we first began, we had just three employees. Today, our team
                                    consists of seventy professionals, each with specialised knowledge in a particular field.
                                </p>
                                <p> We extended our services to the global market after growing to be a respected software
                                    provider in Bangladesh.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-lg-2">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/experience-icon.png.webp"
                                        alt="" width="70" />
                                    <h5 className="mb-2 p-1">4+</h5>
                                    <h6>YEARS OF EXPERIENCES</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/it-customer.png" alt=""
                                        width="70" />
                                    <h5 className="mb-2 p-1">20000+</h5>
                                    <h6>NUMBER OF CUSTOMERS</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/it-employee-logo.png" alt=""
                                        width="85" />
                                    <h5 className="mb-2 p-1">80+</h5>
                                    <h6>NUMBER OF EMPLOYEESS</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img"
                                        src="assets/img/partners/IT-present-in-four-different-countries.png" alt="" width="70" />
                                    <h5 className="mb-2 p-1">8+</h5>
                                    <h6>DIFFERENT COUNTRIES</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/IT-project.png" alt=""
                                        width="70" />
                                    <h5 className="mb-2 p-1">7000+</h5>
                                    <h6>COMPLETED PROJECT</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/web.png" alt="" width="70" />
                                    <h5 className="mb-2 p-1">1200+</h5>
                                    <h6>WEBSITE CREATED</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Who We Are section end--> */}
                {/* <!--services section start--> */}
                <section className="our-services ptb-100 gray-light-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                    <h2>Our Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="domain.html">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/doman.png"
                                            alt="shared hosting" className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5"> Domain Registration</h3>
                                            <p className="service-text">Domain registration in Bangladesh ensures the same website name on the internet, with a wide selection of domain extensions available at reasonable prices. With over 25,000 new domains registered daily, it`s crucial to register early to avoid a thief.</p>
                                            <a href="domain.html" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="hosting.html">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/hosting.png"
                                            alt="shared hosting" className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5"> Hosting Services </h3>
                                            <p className="service-text">
                                                We provide affordable, safe web hosting services in Bangladesh, Our server is located in German. We offer corporate, dedicated, and shared servers, and offer dedicated and shared support. Start your search for the best hosting company in Bangladesh .
                                            </p>
                                            <a href="hosting.html" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="digital-marketing.html">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/digital-Marketing.png"
                                            alt="shared hosting" className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5"> Digital marketing </h3>
                                            <p className="service-text">Digital marketing is essential for modern businesses. Many agencies in Bangladesh claim to be top providers, but their claims are unsupported. Our agency, with over 2000 client testimonials, focuses on helping clients create business plans, analyze data, and generate ..</p>
                                            <a href="digital-marketing.html" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="Web-development.html">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/web.png" alt="shared hosting"
                                            className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5">Web Development </h3>
                                            <p className="service-text">
                                                We have provided web design and development services, creating over 7,000 websites for clients.  Our dedication sets us apart from competitors, and we assign testing and quality assurance teams to review every element, section, and part of the website.</p>
                                            <a href="Web-development.html" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/Software-Development-PNG.png"
                                            alt="shared hosting" className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5"> Software Development </h3>
                                            <p className="service-text">
                                                Whether you need a web application, mobile app, or enterprise-level solution, we have the expertise to turn your vision into reality. From initial concept to final deployment, we`ll work tirelessly to deliver a product that aligns with your business goals.</p>
                                            <a href="Accounting-software.html" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/social-media.png"
                                            alt="shared hosting" className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5"> Social Media Management </h3>
                                            <p className="service-text">
                                                Social media management in Bangladesh has become popular due to significant changes in marketing strategies. Companies are striving to make social media platforms like Facebook, Instagram, and YouTube top for advertising. However ..</p>
                                            <a href="digital-marketing.html" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/Graphics Design.png"
                                            alt="shared hosting" className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5"> Graphics Design </h3>
                                            <p className="service-text">
                                                Our graphics design services transform your brand with eye-catching designs, tailored to your unique identity. We ensure impactful branding, elevate your visual communication, and leave a lasting impression.</p>
                                            <a href="" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="sms-marketing.html">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/sms-merketing.png"
                                            alt="shared hosting" className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5">SMS Marketing</h3>
                                            <p className="service-text">
                                                Bangladesh top bulk SMS provider, launched in 2020 , serves over 12,000 customers and has received official approval from BTRC as an SMS aggregator. They offer free SMS marketing in Dhaka and throughout Bangladesh. </p>
                                            <a href="sms-marketing.html" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="service-it" href="#">
                                    <div
                                        className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                        <div className="service-border"> <img src="assets/img/partners/Video Editing.png"
                                            alt="shared hosting" className="img-fluid service-img mb-4" width="70" /></div>
                                        <div className="service-plane-content">
                                            <h3 className="h5">Video Editing </h3>
                                            <p className="service-text">
                                                Our team specializes in creating and editing promotional videos and animated logos for corporate companies, ensuring they meet specific needs and elevate brand identity with dynamic and visually striking designs.</p>
                                            <a href="" className="view-details-link"> more info<span className="ti-angle-right"></span></a>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- Our Services  end--> */}
                {/* <!-- Client Requirements  section start--> */}
                <section className="feature-tab-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                    <h3>Which Approach Do We Take When <br /> Working on the Web Development Project?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/Client Requirements.jpeg"
                                        alt="" width="70" />
                                    <h6>Client Requirements</h6>
                                    <p>Before taking action, we have lengthy discussions with our clients. We are aware that
                                        having a clear project concept is essential before beginning. </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/Keep Commitment.jpeg" alt=""
                                        width="70" />
                                    <h6>Keep Committed</h6>
                                    <p>IT Sheba Limited is always dedicated to giving clients the best possible experience by
                                        having a feature rich website for their company .</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/sufficient Security.png"
                                        alt="" width="70" />
                                    <h6>Sufficient Security</h6>
                                    <p>Our web development team consistently uses the best coding practices to protect your
                                        information, and secure hosts are also employed.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/Assign Professional Team.png"
                                        alt="" width="70" />
                                    <h6>Assign Professional Team</h6>
                                    <p>We assign experienced teams to develop,test, deliver projects using client`s
                                        preferred web development technology, providing updates and specialized teams based on
                                        web technology. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/Divide Into Sprint.png"
                                        alt="" width="70" />
                                    <h6>Divide Into Sprint</h6>
                                    <p>The project manager divided the project into manageable sprints,
                                        with each week being a separate sprint. After completing assigned tasks, the development
                                        team moves on to the next sprint.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="feature-feature-list p-3 text-center">
                                    <img className="feature-feature-list-img" src="assets/img/partners/Competitive Pricing.webp"
                                        alt="" width="70" />
                                    <h6>Competitive Expenses</h6>
                                    <p>Our clients face high fees for web development projects, but we
                                        prioritize acquiring new business over paying for new banknotes, aiming to create a
                                        win-win situation for both parties.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Client Requirements  section end--> */}

                {/* <!-- Frequently Asked Question start--> */}
                <section className="feature-tab-section ptb-100 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                    <h3>Frequently Asked Question</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-7 col-lg-9 col-12  order-xl-first ">
                                {/* <!--faq section start--> */}

                                <div id="faq" className="ptb-100 ">
                                    <div id="accordion-one" className="accordion accordion-faq">
                                        <div className="card mb-0">
                                            <a className="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                                <h6 className="mb-0 d-inline-block">Which types of web development services do you
                                                    offer?
                                                </h6>

                                            </a>
                                            <div id="collapseOne" className="collapse" data-parent="#accordion-one">
                                                <div className="card-body">
                                                    <p>We offer all the required websites for client businesses, especially for:
                                                    </p>
                                                    <ul className="list-unstyled tech-feature-list">
                                                        <li className="py-1"><span
                                                            className="ti-arrow-right mr-2 color-primary"></span>E-commerce
                                                            website</li>
                                                        <li className="py-1"><span
                                                            className="ti-arrow-right mr-2 color-primary"></span>Company website
                                                        </li>
                                                        <li className="py-1"><span
                                                            className="ti-arrow-right mr-2 color-primary"></span>Corporate
                                                            website</li>
                                                        <li className="py-1"><span
                                                            className="ti-arrow-right mr-2 color-primary"></span>Portfolio
                                                            website</li>
                                                        <li className="py-1"><span
                                                            className="ti-arrow-right mr-2 color-primary"></span>News website
                                                        </li>
                                                        <li className="py-1"><span
                                                            className="ti-arrow-right mr-2 color-primary"></span>Real estate
                                                            website</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-0">
                                            <a className="card-header collapsed" data-toggle="collapse" href="#collapseTwo">
                                                <h6 className="mb-0 d-inline-block">What is the cost to develop a website with you?
                                                </h6>
                                            </a>
                                            <div id="collapseTwo" className="collapse" data-parent="#accordion-one">
                                                <div className="card-body">
                                                    <p>The kind of website you want to create will determine the price. Our
                                                        costs will change according to what you need. However, our entry-level
                                                        package costs 15,000 BDT for a simple website.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-0">
                                            <a className="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                                                <h6 className="mb-0 d-inline-block">What is the estimated turnaround time for a
                                                    website?
                                                </h6>
                                            </a>
                                            <div id="collapseFour" className="collapse" data-parent="#accordion-one">
                                                <div className="card-body">
                                                    <p>It is entirely dependent upon your particular needs. We can complete a
                                                        mid-level website in about a week. We have in-depth conversations with
                                                        our clients to understand their urgency, and we assign teams to tasks
                                                        based on their requests.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--faq section end--> */}
                            <div className="col-xl-5 col-lg-3 col-12 order-lg-last align-self-center">
                                <div className="image-box fadein text-xl-right text-center">
                                    <img src="assets/img/partners/Frequently Asked Question.png" alt="wp-hosting"
                                        className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- Frequently Asked Question end--> */}

                {/* <!-- Work Portfolio start --> */}
                <section className="our-services ptb-100 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                    <h3>Work Portfolio</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <a href="#">
                                    <img src="assets/img/background-it-sheba/capital.jpg" className="img-fluid rounded"
                                        alt="gallery image" />
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- Work Portfolio end --> */}
            </div>

            {/* <!--bottom to top button start--> */}
            <button className="scroll-top scroll-to-target" data-target="html">
                <span className="ti-arrow-up"></span>
            </button>
            {/* <!--bottom to top button end--> */}



        </>
    )
}
export default Home;