const Projects = () => {
  const projects = [
    {
      title: "Smart Home System",
      description: "IoT-based home automation solution"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack online shopping platform"
    },
    {
      title: "Health Monitoring App",
      description: "Mobile application for health tracking"
    }
  ];

  return (
    <div className="page projects-page">
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
