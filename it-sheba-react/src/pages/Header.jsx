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
            {/* <!--header section start--> */}
            <header id="header" className="header-main">
                {/* <!--topbar start--> */}
                <div id="header-top-bar" className="gray-light-bg">
                    {/* Topbar content */}
                </div>

                {/* <!--main header menu start--> */}
                <div id="logoAndNav" className="main-header-menu-wrap white-bg border-bottom">
                    <div className="container">
                        <nav className={`js-mega-menu navbar navbar-expand-md header-nav ${menuOpen ? 'menu-open' : ''}`}>
                            {/* <!--logo start--> */}
                            <a className="navbar-brand" to="/" onClick={closeMenu}>
                                <img src="assets/img/it-logo.png" alt="logo" className="img-fluid" />
                            </a>
                            {/* <!--logo end--> */}

                            {/* <!--responsive toggle button start--> */}
                            <button type="button" className="navbar-toggler btn" aria-expanded="false" aria-controls="navBar"
                                onClick={toggleMenu}>
                                <span id="hamburgerTrigger">
                                    <span className="fas fa-bars"></span>
                                </span>
                            </button>
                            {/* <!--responsive toggle button end--> */}

                            {/* <!--main menu start--> */}
                            <div id="navBar" className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav ml-auto main-navbar-nav">
                                    <li className="nav-item active  custom-nav-item">
                                        <NavLink to="/" className="nav-link custom-nav-link  " onClick={closeMenu}>HOME</NavLink>

                                    </li>
                                    {/* <!--pages start--> */}

                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <a className="nav-link  custom-nav-link main-link-toggle" onClick={closeMenu}>ABOUT US</a>

                                        {/* <!-- Pages - Submenu --> */}
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Messegefounder" onClick={closeMenu}>Founder Messege </NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Company-profile.html" onClick={closeMenu}>Company
                                                    Profile</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Team-members.html" onClick={closeMenu}>Team Members</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Payment-system.html" onClick={closeMenu}>Payment
                                                    System</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="join-the-team.html" onClick={closeMenu}>Join The
                                                    Team</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="our-clients.html" onClick={closeMenu}>Our
                                                    Clients</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="our-skill.html" onClick={closeMenu}>Our Skill</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link"
                                                    to="https://shop.bkash.com/it-sheba-24-dot-com01906297861/paymentlink/default-payment"
                                                    target="_blank" onClick={closeMenu}>Pay
                                                    Now</NavLink>
                                            </li>

                                        </ul>
                                        {/* <!-- End Pages - Submenu --> */}
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink className="nav-link  custom-nav-link main-link-toggle" onClick={closeMenu}>WEBSITE</NavLink>

                                        {/* <!-- Pages - Submenu --> */}
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="domain.html" onClick={closeMenu}>Domain</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="hosting.html" onClick={closeMenu}>Hosting</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Web-development.html" onClick={closeMenu}>Web
                                                    Development</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="ecommerce.html" onClick={closeMenu}>Ecommerce
                                                    Website</NavLink>
                                            </li>
                                        </ul>
                                        {/* <!-- End Pages - Submenu --> */}
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink className="nav-link  custom-nav-link main-link-toggle"> SOFTWARE </NavLink>

                                        {/* <!-- Pages - Submenu --> */}
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Accounting-software.html" onClick={closeMenu}>Accounting
                                                    Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="travel-agency.html" onClick={closeMenu}> Travel Agency
                                                    Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="hr&payroll.html" onClick={closeMenu}> HR & Payroll
                                                    Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="inventory.html" onClick={closeMenu}>Inventory
                                                    Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="law-fram-result.html" onClick={closeMenu}>Law Farm
                                                    Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="pharmacy-menagement.html" onClick={closeMenu}>Pharmacy
                                                    Management</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="hospital-erp.html" onClick={closeMenu}> Hospital ERP</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="pos-software.html" onClick={closeMenu}>POS
                                                    Software</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Prescription.html">
                                                    Prescription Management</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Restaurant.html" onClick={closeMenu}>Restaurant
                                                    Management</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="School-management.html" onClick={closeMenu}>School
                                                    Management</NavLink>
                                            </li>

                                        </ul>
                                        {/* <!-- End Pages - Submenu --> */}
                                    </li>

                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink className="nav-link  custom-nav-link main-link-toggle" >BULK SMS</NavLink>

                                        {/* <!-- Pages - Submenu --> */}
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="masking.html" onClick={closeMenu}>Masking SMS</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="non-masking-sms.html" onClick={closeMenu}> Non masking
                                                    sms</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="sms-marketing.html" onClick={closeMenu}> SMS
                                                    Marketing</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="location-based-sms.html" onClick={closeMenu}>Location
                                                    Based SMS</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="sms-panel.html" onClick={closeMenu}>SMS Panel
                                                    Login</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="election-sms.html" onClick={closeMenu}>Election SMS</NavLink>
                                            </li>
                                        </ul>
                                        {/* <!-- End Pages - Submenu --> */}
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink className="nav-link  custom-nav-link main-link-toggle"onClick={closeMenu} >Marketing</NavLink>

                                        {/* <!-- Pages - Submenu --> */}
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="seo.html" onClick={closeMenu}> SEO</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link"
                                                    to="Telemarketing.html" onClick={closeMenu}>Telemarketing</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="Email-marketing.html" onClick={closeMenu}>Email
                                                    Marketing</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="whatsapp-marketing.html" onClick={closeMenu}>WhatsApp
                                                    Marketing</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="digital-marketing.html" onClick={closeMenu}>Digital
                                                    Marketing</NavLink>
                                            </li>

                                        </ul>
                                        {/* <!-- End Pages - Submenu --> */}
                                    </li>
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <NavLink className="nav-link  custom-nav-link main-link-toggle">PRODUCTS</NavLink>

                                        {/* <!-- Pages - Submenu --> */}
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu">
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="cctv.html" onClick={closeMenu}>CCTV</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="wift-camera.html" onClick={closeMenu}>Wifi Camera</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="attendance-machine.html" onClick={closeMenu}>Attendance
                                                    Machine</NavLink>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <NavLink className="nav-link sub-menu-nav-link" to="pabx.html"onClick={closeMenu}>PABX</NavLink>
                                            </li>
                                        </ul>
                                        {/* <!-- End Pages - Submenu --> */}
                                    </li>
                                    <li className="nav-item  custom-nav-item">
                                        <NavLink className="nav-link custom-nav-link " to="contact" onClick={closeMenu}>CONTACT</NavLink>
                                    </li>
                                    {/* <!--pages end--> */}


                                </ul>
                            </div>
                            {/* <!--main menu end--> */}
                        </nav>
                    </div>
                </div>
                {/* <!--main header menu end--> */}
            </header>
            {/* <!--header section end--> */}
        </>
    );
};

export default Header;