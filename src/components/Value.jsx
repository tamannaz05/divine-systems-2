const Value = () => {
  const values = [
    {
      number: 'Tech',
      title: 'Proven Expertise',
      description:
        'Specialized experience with enterprise-grade solutions including Oracle OBIEE, Tableau, Power BI, and modern cloud platforms.',
    },
    {
      number: 'Zero',
      title: 'Downtime Migrations',
      description:
        'Seamless on-premise to cloud data migrations with minimal business disruption and comprehensive data integrity assurance.',
    },
    {
      number: '360°',
      title: 'Complete Solutions',
      description:
        'End-to-end services from data warehousing and integration to advanced BI implementation and custom dashboard development.',
    },
    {
      number: '24/7',
      title: 'Dedicated Support',
      description:
        'Ongoing support and maintenance services ensuring your BI systems operate at peak performance with continuous optimization.',
    },
  ]

  return (
    <section
      className="section"
      id="value"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderTop: '3px solid var(--primary)',
      }}
    >
      <div className="container">
        <h2 className="section-title">How We Add Value</h2>
        <p className="section-subtitle">
          Why organizations choose Divine Systems for their BI and data
          engineering needs
        </p>
        <div className="value-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <span className="value-number">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Value
