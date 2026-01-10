import React from "react";
import './Footer.css'
import dell from "../assets/dell.png";
import lenovo from "../assets/lenovo.png";
import acer from "../assets/acer.jpeg";
import microsoft from "../assets/microsoft.png";
import toshiba from "../assets/toshiba.png";
import asus from "../assets/asus.png";
import msi from "../assets/msi.png";
import hp from "../assets/hp.png";
import samsung from "../assets/samsung.png";
import xioami from "../assets/xioami.jpeg";


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">

        {/* ===== BRAND LOGOS ===== */}
        <div className="footer-brands">
          <h3>Our Sale & Services Brands</h3>

          <div className="brand-logos">
            <img src={dell} alt="Dell" />
            <img src={lenovo} alt="Lenovo" />
            <img src={acer} alt="Acer" />
            <img src={microsoft} alt="Microsoft" />
            <img src={toshiba} alt="Toshiba" />
            <img src={asus} alt="ASUS" />
            <img src={msi} alt="MSI" />
            <img src={hp} alt="HP" />
            <img src={samsung} alt="Samsung" />
            <img src={xioami} alt="Xioami" />

            

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
