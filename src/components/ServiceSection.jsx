import './Service.css';

// This shows all the services offered in cards
const ServicesSection = ({ handleNavClick }) => {
  // Array of services - easy to add more services here
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80',
      title: 'Laptop Screen Replacement',
      description: 'Call us to Fix Laptop Screen Issues with genuine parts and warranty'
    },
    {
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&q=80',
      title: 'Laptap & Desktop Services',
      description: 'Get Laptop Hinges and Panels Service at Home same day'
    },
    {
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&q=80',
      title: 'Laptop Battery Replacement',
      description: 'Get Swollen Batteries Replaced in Hours with quality cells'
    },
    {
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80',
      title: 'Laptop Upgradation',
      description: 'Get Laptop and Desktop Upgraded at Doorstep with RAM & SSD'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <p className="section-label">OUR SERVICES</p>
          <h2>Laptop Desktop Service</h2>
        </div>
        
        {/* Services Grid - Shows all service cards */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Button */}
        <div style={{textAlign: 'center'}}>
          <button className="contact-btn" onClick={() => handleNavClick('contact')}>
            Contact for Details →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
