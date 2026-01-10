import React, { useState, useEffect } from "react";

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServiceSection';
import WhyUsSection from './components/WhyUsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = ["home", "about", "services", "why-us", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const position =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: position - offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header
      scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
    />
      <HeroSection handleNavClick = {handleNavClick} />
      <AboutSection handleNavClick={handleNavClick} />
      <ServicesSection handleNavClick={handleNavClick} />
      <WhyUsSection />
      <CTASection />
      <Footer handleNavClick={handleNavClick}/>

    </>
  );
};

export default App;









