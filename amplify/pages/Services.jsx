const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications tailored to your needs"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions"
    },
    {
      title: "IoT Solutions",
      description: "Smart device integration and monitoring systems"
    }
  ];

  return (
    <div className="page services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
