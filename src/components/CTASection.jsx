import React from "react";
import { 
  FaWhatsapp, 
  FaPhone, 
  FaUser, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaBriefcase, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import './CTA.css';

const CTASection = () => {
    return (
        <section id="contact" className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Get Laptop Desktop Services in Hours</h2>
              <p>Contact us for Computers Service - Available 24/7</p>

              <div className="cta-details">
                <p>
                  <strong><FaUser className="icon-user" /> Name :</strong>
                  <span>Bankala Raju</span>
                </p>

                <p>
                  <strong><FaPhoneAlt className="icon-phone" /> Mobile :</strong>
                  <a href="tel:+919985452266">+91 9985452266</a>
                </p>

                <p>
                  <strong><FaEnvelope className="icon-email" /> Email :</strong>
                  <span>
                    primecomputers2010@gmail.com
                  </span>
                </p>

                <p>
                  <strong><FaBriefcase className="icon-briefcase" /> Experience :</strong>
                  <span>14+ Years</span>
                </p>

                <p>
                  <strong><FaMapMarkerAlt className="icon-location" /> Location :</strong>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2-1-285+Mahaveer+Nagar+Colony+Kukatpally+Kukatpally+Hyderabad+500072"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2-1-285, Yellammabanda, Hyderabad, India
                  </a>
                </p>
              </div>

              <div className="cta-buttons">
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/919985452266"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-whatsapp">
                    <FaWhatsapp style={{ marginRight: "8px" }} /> WhatsApp
                  </button>
                </a>

                {/* Call Us Now button */}
                <a href="tel:+919985452266">
                  <button className="btn btn-call">
                    <FaPhone style={{ marginRight: "8px" }} /> Call Us Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
    );
}

export default CTASection;
