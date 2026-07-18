import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>ShopVerse</h2>
          <p>
            Discover premium fashion, trending collections,
            and quality products at the best prices.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Thiruvananthapuram, Kerala</p>
          <p>support@shopverse.com</p>
          <p>+91 98765 43210</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopVerse. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;