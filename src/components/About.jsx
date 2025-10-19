const About = () => {
  return (
    <section
      className="section"
      id="about"
      style={{
        borderTop: '3px solid var(--accent)',
        marginTop: '-2px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <h2 className="section-title" style={{ paddingTop: '2rem' }}>
          About Divine Systems
        </h2>
        <p className="section-subtitle">
          Pioneering the future of data-driven decision making with cutting-edge
          BI and data engineering solutions.
        </p>
        <div className="about-content">
          <div className="about-text">
            <p>
              Divine Systems is a BI and Data Engineering consulting firm
              helping businesses turn data into actionable insights. We work
              across structured and unstructured data, on-premise and cloud,
              covering the full data lifecycle—from legacy migrations to modern
              BI solutions. Partnering with top technology providers, we deliver
              scalable, outcome-driven solutions that give clients a competitive
              edge.
            </p>
          </div>
          <div className="about-image">
            <div
              style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, var(--secondary), var(--accent))',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem',
              }}
            >
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
