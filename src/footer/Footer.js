import { FaInstagram, FaTwitter, FaFacebookF, FaPinterestP, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Footer.css";

const SocialIcon = styled.a`
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
        "Confused about finding the best products from nearby stores. No Worries!! Shopsight is here. Find the cheapest and finest products on our website along with their available location.";
    const socialLinks = [
        {
            icon: <FaFacebookF />,
            color: "3B5999",
            link: "https://www.facebook.com",
        },
        {
            icon: <FaInstagram />,
            color: "E4405F",
            link: "https://www.instagram.com",
        },
        { icon: <FaTwitter />, color: "55ACEE", link: "https://twitter.com" },
        {
            icon: <FaPinterestP />,
            color: "E60023",
            link: "https://in.pinterest.com",
        },
    ];

    return (
        <div className="footer-container">
            <div className="footer-left">
                <h1>SHOPSIGHT.</h1>
                <p className="footer-description">{shopSightDescription}</p>
                <div className="footer-social-container">
                    {socialLinks.map((social, index) => (
                        <SocialIcon
                            key={index}
                            color={social.color}
                            href={social.link}
                            target="_blank"
                        >
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
                    <Link to="/brands" className="footer-list-item">
                        Brands
                    </Link>
                    <Link to="/terms-and-condition" className="footer-list-item">
                        Terms
                    </Link>
                </ul>
            </div>
            <div className="footer-right">
                <div className="footer-title">Contact</div>
                <div className="footer-contact-item">
                    <IoLocationSharp /> Raipur, India 493221
                </div>
                <div className="footer-contact-item">
                    <FaPhoneAlt /> +91 9876543210
                </div>
                <div className="footer-contact-item">
                    <MdOutlineEmail /> abcd@gmail.com
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
