import './WhyUs.css';

// This explains why customers should choose this service
const WhyUsSection = () => {
  // Array of features - easy to add more features here
  const features = [
    {
      title: 'On-Site Laptop Service in Hours',
      description: 'Our Skilled Laptop Technicians will give you On-Site Service for Laptops and Desktops. We come to your location with all necessary tools and spare parts.'
    },
    {
      title: 'Solution for Laptop & Desktop Issues',
      description: 'We give solution for your Laptop and Desktop at Doorstep in Hours. From hardware repairs to software installations, we handle it all professionally.'
    },
    {
      title: 'On-Time Service',
      description: 'Our Technicians visit your location on your scheduled date and time. We value your time and ensure punctual service delivery every time.'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="why-us-container">
          {/* Left Side - Text Content */}
          <div className="why-us-content">
            <p className="section-label">WHY US</p>
            <h2>Because we provide Doorstep Service in Hours</h2>
            
            {/* Features List */}
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Right Side - Image */}
          <div className="why-us-images">
            <div className="why-us-image">
              <img 
                src="/public/door2.jpeg" 
                alt="On‑site laptop service technician" 
              />
            </div>

            <div className="why-us-image">  
              <img 
                src="/public/door.jpeg" 
                alt="Laptop & desktop repair solution" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;