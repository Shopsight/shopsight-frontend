import {
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaPinterestP,
    FaMailchimp,
    FaPhoneAlt,
    FaBroom,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Footer.css";

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Footer = () => {
    const shopSightDescription =
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";
    const socialLinks = [
        { icon: <FaFacebookF />, color: "3B5999" },
        { icon: <FaInstagram />, color: "E4405F" },
        { icon: <FaTwitter />, color: "55ACEE" },
        { icon: <FaPinterestP />, color: "E60023" },
    ];

    return (
        <div className="footer-container">
            <div className="footer-left">
                <h1>SHOPSIGHT.</h1>
                <p className="footer-description">{shopSightDescription}</p>
                <div className="footer-social-container">
                    {socialLinks.map((social, index) => (
                        <SocialIcon key={index} color={social.color}>
                            {social.icon}
                        </SocialIcon>
                    ))}
                </div>
            </div>
            <div className="footer-center">
                <h3 className="footer-title">Useful Links</h3>
                <ul className="footer-list">
                    <Link to="/" className="footer-list-item">
                        Home
                    </Link>
                    <Link to="/dashboard" className="footer-list-item">
                        My Account
                    </Link>
                    <li className="footer-list-item">Wishlist</li>
                    <Link to="/terms-and-condition" className="footer-list-item">
                        Terms
                    </Link>
                </ul>
            </div>
            <div className="footer-right">
                <div className="footer-title">Contact</div>
                <div className="footer-contact-item">
                    <FaBroom /> Raipur, India 493221
                </div>
                <div className="footer-contact-item">
                    <FaPhoneAlt /> +91 9179054211
                </div>
                <div className="footer-contact-item">
                    <FaMailchimp /> shubhamank002@gmail.com
                </div>
                <img
                    src="https://i.ibb.co/Qfvn4z6/payment.png"
                    alt="payment-img"
                    className="footer-img"
                />
            </div>
        </div>
    );
};

export default Footer;
