  import './About.css';

  const AboutSection = ({ handleNavClick }) => {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-container">
            {/* Left Side - Images */}
            <div className="about-images">
              <div className="about-image">
                <img
                  src="https://cdn.prod.website-files.com/61b21a152ca3e478ff782964/627e650f22a9a52cd54085be_Computer%20networking.jpg"
                  alt="Computer Networking"
                />
              </div>

              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&q=80"
                  alt="Laptop Repair"
                />
              </div>
            </div>

            
            {/* Right Side - Text Content */}
            <div className="about-content">
              <p className="section-label1">ABOUT US</p>
              <h2>We Provide  Service in Hours</h2>
              <p>We have Skilled and Trained Laptop Experts who visit your location to Fix your Laptop/Desktop in Hours. Our technicians are certified and experienced in handling all types of computer issues.</p>
              
              {/* Feature List with Checkmarks */}
              <ul className="feature-list">
                <li>Laptap & Desktop Services</li>
                <li>NetWorking </li>
                <li>AMC - ( Annual Mantainance Contract )</li>
              </ul>
              
              <button className="btn-outline" onClick={() => handleNavClick('contact')}>
                Call Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default AboutSection