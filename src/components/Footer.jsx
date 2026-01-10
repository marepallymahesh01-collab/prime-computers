import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">

        {/* ===== BRAND LOGOS ===== */}
        <div className="footer-brands">
          <h3>Our Sale & Services Brands</h3>

          <div className="brand-logos">
            <img src="/public/dell.png" alt="Dell" />
            <img src="/public/lenovo.png" alt="Lenovo" />
            <img src="/public/acer.jpeg" alt="Acer" />
            <img src="/public/microsoft.png" alt="microsoft" />
            <img src="/public/toshiba.png" alt="Toshiba" />
            <img src="/public/asus.png" alt="ASUS" />
            <img src="/public/msi.png" alt="MSI" />
            <img src="/public/hp.png" alt="hp" />
            <img src="/public/samsung.png" alt="Samsung" />
            <img src="/public/xioami.jpeg" alt="xioami" />
            

            {/* MacBook text logo */}
            <div className="macbook-logo">
              <span></span> MacBook
            </div>
          </div>
        </div>

        {/* ===== SERVICES ===== */}
        <div className="services-list">
          <h3>Our Services</h3>
          <ul>
            <li>Networking</li>
            <li>Laptop & Desktop Repair</li>
            <li>Screen Replacement</li>
            <li>Doorstep Service</li>
            <li>RAM & SSD Upgrade</li>
            <li>Battery Replacement</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Prime Computers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
