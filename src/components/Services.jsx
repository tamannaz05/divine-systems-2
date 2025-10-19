const Services = () => {
  const services = [
    {
      icon: 'fa-cloud-upload-alt',
      title: 'On-premises to Cloud Data Migrations',
      description:
        'Seamlessly migrate your data infrastructure from on-premises systems to modern cloud platforms with zero data loss and minimal downtime.',
    },
    {
      icon: 'fa-chart-bar',
      title: 'BI Development',
      description:
        'End-to-end OBIEE/OAS, Tableau, and Power BI custom reports, interactive dashboards, and advanced data visualization solutions.',
    },
    {
      icon: 'fa-cogs',
      title: 'Data Engineering',
      description:
        'Develop robust data ingestion, ETL/ELT, and transformation pipelines for on-prem, cloud-native, and hybrid environments',
    },
    {
      icon: 'fa-code',
      title: 'Full-stack Development',
      description:
        'Custom Software Development in both the front-end (user interface) and back-end (server-side logic, databases) of a web application.',
    },
    {
      icon: 'fa-brain',
      title: 'AI/ML',
      description:
        'Implementation of Amazon SageMaker ML models and GenAI chatbot development using foundation models.',
    },
    {
      icon: 'fa-database',
      title: 'Data Warehousing Solutions',
      description:
        'Design and implement robust data warehousing solutions that serve as the foundation for your enterprise analytics and reporting needs.',
    },
  ]

  return (
    <section
      className="section"
      id="services"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderTop: '3px solid var(--secondary)',
      }}
    >
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          Our specialized services based on proven expertise and
          industry-leading technologies
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card click-animation">
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
