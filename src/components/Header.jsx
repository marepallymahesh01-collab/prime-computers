import "./Header.css";

const Header = ({
  scrolled,
  menuOpen,
  setMenuOpen,
  activeSection,
  handleNavClick,
}) => {
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <div className="logo" onClick={() => handleNavClick("home")}>
          <div className="logo-img">
            <img src="/logos1.png" alt="Prime Computer Logo" />
          </div>
          <div className="logo-text">
            <h1>Prime Computers</h1> 
            <p>Sales & Services</p>
          </div>
        </div>
        {/* Navigation */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {["home", "about", "services", "why-us", "contact"].map((item) => (
            <li key={item}>
              <a
                className={activeSection === item ? "active" : ""}
                onClick={() => handleNavClick(item)}
              >
                {item.replace("-", " ").toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="cta-button"
          onClick={() => handleNavClick("contact")}
        >
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
