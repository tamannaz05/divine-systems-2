const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="/divine-systems/logo.png"
                alt="Divine Systems Logo"
                className="footer-logo-image"
              />
              <h3>Divine Systems</h3>
            </div>
            <p>
              Transforming data into divine insights for businesses worldwide.
              Your trusted partner in the data-driven future.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <p>
              <a href="#services">Cloud Data Migrations</a>
            </p>
            <p>
              <a href="#services">Data Engineering</a>
            </p>
            <p>
              <a href="#services">Full-stack Development</a>
            </p>
            <p>
              <a href="#services">AI/ML</a>
            </p>
            <p>
              <a href="#services">Data Warehousing Solutions</a>
            </p>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <p>
              <a href="#about">About Us</a>
            </p>
            <p>
              <a href="#team">Our Team</a>
            </p>
            <p>
              <a href="#value">Why Choose Us</a>
            </p>
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <i className="fas fa-envelope"></i> info@divinesystems.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +1 (630) 885-1802
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Global Data Solutions
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 Divine Systems. All rights reserved. | Crafted with
            data-driven precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
