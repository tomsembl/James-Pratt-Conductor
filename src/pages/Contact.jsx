import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Calendar, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    inquiryType: '',
    message: '',
    preferredContact: 'email'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // In a real implementation, this would send the data to a server
    alert('Thank you for your inquiry. We will respond within 24 hours.')
  }

  const contactInfo = {
    location: "Perth, Western Australia",
    email: "info@jamespratt.com",
    phone: "+61 (0) 8 XXXX XXXX",
    availability: "Available for bookings Australia-wide and internationally",
    response: "Response within 24 hours"
  }

  const inquiryTypes = [
    "Concert Performance",
    "Opera Production",
    "Guest Conducting",
    "Masterclass/Workshop",
    "Educational Residency",
    "Media Interview",
    "Collaborative Project",
    "Other"
  ]

  const bookingInfo = [
    {
      title: "Concert Performances",
      description: "Available for orchestral, choral, and chamber ensemble concerts",
      details: ["Symphonic repertoire", "Choral-orchestral works", "Opera concerts", "Educational programs"]
    },
    {
      title: "Opera Productions",
      description: "Experienced in full opera productions and concert performances",
      details: ["Classical repertoire", "Contemporary works", "Young artist programs", "Community opera"]
    },
    {
      title: "Educational Engagements",
      description: "Masterclasses, workshops, and educational residencies",
      details: ["Conducting masterclasses", "Score study sessions", "Ensemble workshops", "Educational concerts"]
    },
    {
      title: "Collaborative Projects",
      description: "Open to innovative musical collaborations and special projects",
      details: ["Cross-cultural projects", "Multimedia performances", "New music premieres", "Festival appearances"]
    }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero bg-gradient">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Contact</h1>
            <p className="hero-subtitle">
              Ready to collaborate on your next musical project? Let's discuss how 
              we can create exceptional performances together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section contact-info">
        <div className="container">
          <div className="grid grid-2">
            <motion.div 
              className="contact-details"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Get In Touch</h2>
              <p>
                Available for conducting engagements across Australia and internationally. 
                Professional inquiries are welcomed for concerts, opera productions, 
                educational programs, and collaborative projects.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <MapPin size={24} />
                  <div>
                    <h4>Location</h4>
                    <p>{contactInfo.location}</p>
                  </div>
                </div>

                <div className="contact-method">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </div>

                <div className="contact-method">
                  <Phone size={24} />
                  <div>
                    <h4>Phone</h4>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="contact-method">
                  <Linkedin size={24} />
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/pratt-james/" target="_blank" rel="noopener noreferrer">
                      Professional Profile
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <Clock size={24} />
                  <div>
                    <h4>Response Time</h4>
                    <p>{contactInfo.response}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-form card">
                <h3>Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Orchestra, Opera Company, School, etc."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType">Type of Inquiry *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Please provide details about your project, dates, repertoire, and any specific requirements..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Preferred Contact Method</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                        />
                        Email
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                        />
                        Phone
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn submit-btn">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="section booking-info bg-dark">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Booking Information</h2>
            <p>Available services and collaboration opportunities</p>
          </motion.div>

          <div className="grid grid-2">
            {bookingInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="booking-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-gold">{info.title}</h3>
                <p className="booking-description">{info.description}</p>
                <ul className="booking-details">
                  {info.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Links */}
      <section className="section professional-links">
        <div className="container">
          <motion.div 
            className="links-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Professional Connections</h2>
            <p>Current affiliations and professional networks</p>
            
            <div className="professional-orgs">
              <div className="org-card">
                <h4>Perth Symphonic Chorus</h4>
                <p>Music Director</p>
                <a href="https://www.perthsymphonicchorus.com.au/music-director" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn-outline">
                  Visit Website
                </a>
              </div>
              
              <div className="org-card">
                <h4>State Opera of South Australia</h4>
                <p>Guest Conductor</p>
                <a href="https://stateopera.com.au/artist/james-pratt/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn-outline">
                  Artist Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
          padding: 120px 0 var(--spacing-2xl);
          text-align: center;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
        }

        .contact-method svg {
          color: var(--accent-color);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-method h4 {
          color: var(--primary-color);
          margin-bottom: var(--spacing-xs);
        }

        .contact-method a {
          color: var(--accent-color);
          text-decoration: none;
        }

        .contact-method a:hover {
          color: var(--secondary-color);
        }

        .contact-form {
          background: var(--background-light);
        }

        .contact-form h3 {
          color: var(--primary-color);
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }

        .form-group {
          margin-bottom: var(--spacing-md);
        }

        .form-group label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
          color: var(--text-dark);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: var(--spacing-sm);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          font-size: 1rem;
          transition: var(--transition);
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
        }

        .radio-group {
          display: flex;
          gap: var(--spacing-md);
          margin-top: var(--spacing-xs);
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-weight: normal;
        }

        .radio-option input[type="radio"] {
          width: auto;
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-xs);
          margin-top: var(--spacing-lg);
        }

        .booking-card {
          background: var(--background-light);
        }

        .booking-description {
          margin-bottom: var(--spacing-md);
        }

        .booking-details {
          list-style: none;
          padding: 0;
        }

        .booking-details li {
          padding: var(--spacing-xs) 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .booking-details li:last-child {
          border-bottom: none;
        }

        .booking-details li:before {
          content: '•';
          color: var(--accent-color);
          margin-right: var(--spacing-xs);
        }

        .professional-orgs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }

        .org-card {
          padding: var(--spacing-lg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          text-align: center;
        }

        .org-card h4 {
          color: var(--accent-color);
          margin-bottom: var(--spacing-sm);
        }

        .org-card p {
          margin-bottom: var(--spacing-md);
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .contact-methods {
            gap: var(--spacing-md);
          }

          .radio-group {
            flex-direction: column;
          }

          .professional-orgs {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
