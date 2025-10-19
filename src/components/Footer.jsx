const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Divine Systems</h3>
            <p>
              Transforming data into divine insights for businesses worldwide.
              Your trusted partner in the data-driven future.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <p><a href="#services">Cloud Data Migrations</a></p>
            <p><a href="#services">OBIEE & BI Apps</a></p>
            <p><a href="#services">Tableau Solutions</a></p>
            <p><a href="#services">Power BI Development</a></p>
            <p><a href="#services">Data Warehousing</a></p>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <p><a href="#about">About Us</a></p>
            <p><a href="#team">Our Team</a></p>
            <p><a href="#value">Why Choose Us</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p><i className="fas fa-envelope"></i> info@divinesystems.com</p>
            <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
            <p><i className="fas fa-map-marker-alt"></i> Global Data Solutions</p>
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
  )
}

export default Footer
