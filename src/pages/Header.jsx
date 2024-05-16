import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header id="header" className="header-main">
                <div id="header-top-bar" className="gray-light-bg">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-lg-4 col-sm-12">
                                <div className="topbar-text d-md-block d-lg-block">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="tel:+8801906-297862"><span className="fas fa-phone mr-2"></span>+8801906-297862</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="mailto:info@itsheba24.com"><span className="fas fa-mail-bulk mr-2"></span>info@itsheba24.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <div className="topbar-text d-md-block d-lg-block">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="https://maps.app.goo.gl/UVND17n8Qo6ThsiF7"><span className="fas fa-location mr-2"></span>Mukto Bangla Shopping Complex, 5th Floor, Space No:(51-52), Mirpur-1</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 col-sm-12">
                                <div className="topbar-text">
                                    <ul className="list-inline social">
                                        <li className="list-inline-item topbar-social"><a href="https://www.facebook.com/ITShebaLimited/" target="_blank" rel="noopener noreferrer"><span className="ti-facebook"></span></a></li>
                                        <li className="list-inline-item topbar-social"><a href="https://www.linkedin.com/company/it-sheba-limited" target="_blank" rel="noopener noreferrer"><span className="ti-linkedin"></span></a></li>
                                        <li className="list-inline-item topbar-social"><a href="https://www.instagram.com/itsheba.24/" target="_blank" rel="noopener noreferrer"><span className="ti-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="logoAndNav" className="main-header-menu-wrap white-bg border-bottom">
                    <div className="container">
                        <nav className={`js-mega-menu navbar navbar-expand-md header-nav ${menuOpen ? 'menu-open' : ''}`}>
                            <Link className="navbar-brand" to="/" onClick={closeMenu}>
                                <img src="assets/img/it-logo.png" alt="logo" className="img-fluid" />
                            </Link>

                            <button type="button" className="navbar-toggler btn" aria-expanded="false" aria-controls="navBar" onClick={toggleMenu}>
                                <span id="hamburgerTrigger">
                                    <span className="fas fa-bars"></span>
                                </span>
                            </button>

                            <div id="navBar" className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
                                <ul className="navbar-nav ml-auto main-navbar-nav">
                                    <li className="nav-item custom-nav-item">
                                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link custom-nav-link active' : 'nav-link custom-nav-link'} onClick={closeMenu}>HOME</NavLink>
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link custom-nav-link main-link-toggle' : ''} onClick={closeMenu}>ABOUT US</NavLink>
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/Messegefounder" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Founder Messege</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/CompanyProfile" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Company Profile</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/TeamMember" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Team Members</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/PaymentSystem" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Payment System</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/JoinTheTeam" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Join The Team</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/OurClients" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Our Clients</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/OurSkills" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Our Skill</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="https://shop.bkash.com/it-sheba-24-dot-com01906297861/paymentlink/default-payment" target="_blank" className="nav-link sub-menu-nav-link" onClick={closeMenu}>Pay Now</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link custom-nav-link main-link-toggle' : ''} onClick={closeMenu}>WEBSITE</NavLink>
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/Domain" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Domain</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/Hosting" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Hosting</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/WebDevelopment" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Web Development</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/EcommerceWebsite" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Ecommerce Website</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link custom-nav-link main-link-toggle' : ''} onClick={closeMenu}>SOFTWARE</NavLink>
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/AccountingSoftware" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Accounting Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/InventorySoftware" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Inventory Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/HRPayrollSoftware" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>HR & Payroll Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/TravelAgencySoftware" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Travel Agency Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/PosSoftware" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>POS Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/SchoolManagement" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>School Management</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/RestaurantManagement" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Restaurant Management</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/PrescriptionManagement" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Prescription Management</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/HospitalERP" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Hospital ERP</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/LawFarm" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Law Farm Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/PharmacyMenagement" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Pharmacy Management</NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link custom-nav-link main-link-toggle' : ''} onClick={closeMenu}>BULK SMS</NavLink>
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/MaskingSms" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Masking SMS</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/NonMasking" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Non masking sms</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/SmsMarketing" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>SMS Marketing</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/LocationBasedSms" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Location Based SMS</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/ElectionSms" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Election SMS</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link custom-nav-link main-link-toggle' : ''} onClick={closeMenu}>MARKETING</NavLink>
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/Seo" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>SEO</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/Telemarketing" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Telemarketing</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/EmailMarketing" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Email Marketing</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/WhatsappMarketing" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>WhatsApp Marketing</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/DigitalMarketing" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Digital Marketing</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">

                                        <NavLink to="#" className={({ isActive }) => isActive ? 'nav-link custom-nav-link main-link-toggle' : ''} onClick={closeMenu}>PRODUCTS</NavLink>
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/Cctv" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>CCTV</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/WiftCamera" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Wifi Camera</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/AttendanceMachine" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>Attendance Machine</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink to="/Pabx" className={({ isActive }) => isActive ? 'nav-link sub-menu-nav-link active' : 'nav-link sub-menu-nav-link'} onClick={closeMenu}>PABX</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item custom-nav-item">
                                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link custom-nav-link active' : 'nav-link custom-nav-link'} onClick={closeMenu}>CONTACT</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
