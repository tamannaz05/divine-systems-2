const Team = () => {
  const teamMembers = [
    {
      avatar: 'BI',
      title: 'BI Specialists',
      description:
        'Expert consultants specializing in Oracle OBIEE/OAS, Tableau, and Power BI implementations with deep industry knowledge.',
    },
    {
      avatar: 'DE',
      title: 'Data Engineers',
      description:
        'Skilled engineers experienced in data warehousing and modern ETL solutions using cutting-edge technologies.',
    },
    {
      avatar: 'CA',
      title: 'Cloud Architects',
      description:
        'Certified professionals specializing in cloud migrations and cloud-native data solutions for enterprise clients.',
    },
    {
      avatar: 'DS',
      title: 'Data Scientists',
      description:
        'Advanced analytics experts who help unlock insights from both structured and unstructured data sources.',
    },
    {
      avatar: 'SE',
      title: 'Full Stack Developers',
      description:
        'Software developers proficient in developing both the frontend and backend of applications.',
    },
  ]

  return (
    <section
      className="section"
      id="team"
      style={{ borderTop: '3px solid var(--accent)' }}
    >
      <div className="container">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-subtitle">
          Meet the data experts behind Divine Systems
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.avatar}</div>
              <h3>{member.title}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
