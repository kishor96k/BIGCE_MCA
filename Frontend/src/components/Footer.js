import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/components/Footer.css'
const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="mailto:info@school.com">mca.bigce@gmail.com</a></li>
                                <li><a href="tel:+1234567890">+1 234 567 890</a></li>
                                <li>Gate No. 58/3, , Solapur-Pune National Highway No. 9, Kegaon, Solapur, Maharashtra 413255</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li> <Link className="nav-link" to="/about">About</Link></li>
                                <li> <Link className="nav-link" to="/contact">Contact</Link></li>
                                <li><a href="/admissions">Admissions</a></li>
                                <li><a href="/academics">Academics</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://www.facebook.com/school" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                <li><a href="https://x.com/KishorC19057759" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://www.instagram.com/_kishor_96k/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>&copy; 2024 MCA.BIGCE. All rights reserved.</p>
            </footer>

        </>
    );
};

export default Footer;