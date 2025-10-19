import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: false, message: '' })

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID'
    const templateId = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text)
          setStatus({
            submitting: false,
            submitted: true,
            error: false,
            message: 'Message sent successfully! We\'ll get back to you soon.',
          })
          // Reset form
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            subject: '',
            message: '',
          })
          // Reset success message after 5 seconds
          setTimeout(() => {
            setStatus({ submitting: false, submitted: false, error: false, message: '' })
          }, 5000)
        },
        (error) => {
          console.error('Email send failed:', error.text)
          setStatus({
            submitting: false,
            submitted: false,
            error: true,
            message: 'Failed to send message. Please try again or contact us directly.',
          })
        }
      )
  }

  return (
    <section
      className="section"
      id="contact"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderTop: '3px solid var(--secondary)',
      }}
    >
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to transform your data into actionable insights? Let's discuss
          how Divine Systems can help your business thrive.
        </p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email Us</h3>
                <p>info@divinesystems.com</p>
                <p>support@divinesystems.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri: 9AM - 6PM EST</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Location</h3>
                <p>Global Data Solutions</p>
                <p>Serving clients worldwide</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Weekend: By Appointment</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="user_name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user_email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="user_phone">Phone Number</label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              {status.message && (
                <div
                  className={`form-status ${
                    status.error ? 'form-status-error' : 'form-status-success'
                  }`}
                >
                  <i
                    className={`fas fa-${
                      status.error ? 'exclamation-circle' : 'check-circle'
                    }`}
                  ></i>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
