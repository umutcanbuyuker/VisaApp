import React from 'react';
import "./Footer.scss"
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Şirket</h4>
                        <ul>
                            <li><a href="#">Hakkımızda</a></li>
                            <li><a href="#">Hizmetlerimiz</a></li>
                            <li><a href="#">Gizlilik Politikası </a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Yardım</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Ödeme Metodları</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Bizi Takip Edin</h4>
                        <div className="social-links">
                            <Link to="#"><FacebookIcon color='primary' style={{ fontSize: "32px" }} /> </Link>
                            <Link to="#"><TwitterIcon color='primary' style={{ fontSize: "32px" }} /> </Link>
                            <Link to="#"><InstagramIcon className='instangram' style={{ fontSize: "30px" }} /> </Link>
                            <Link to="#"><LinkedInIcon color='primary' style={{ fontSize: "33px" }} /> </Link>
                        </div>
                    </div>
                </div>
                <p className="copyright">Copyright &copy; 2024 | All rights reserved by <span className="highlight">Vize Takip</span></p>
            </div>
        </footer>
    );
};

export default Footer;
