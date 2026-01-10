import "./Hero.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Prime Computers</h1>
        <p>Professional Laptop - Desktop Doorstep Service Provider</p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/919985452266?text=Hello%20Prime%20Computer%2C%20I%20need%20service%20support"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            WhatsApp
          </a>

          <a href="tel:+919985452266" className="btn solid">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
