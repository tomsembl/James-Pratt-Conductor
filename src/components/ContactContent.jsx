import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react'

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    eventType: 'general'
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      eventType: 'general'
    })
  }

  return (
    <motion.div 
      className="contact-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-header">
        <h3>Get in Touch</h3>
        <p>Contact James for performance bookings, collaborations, and inquiries</p>
      </div>
      
      <div className="contact-grid">
        <div className="contact-info">
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Mail size={24} />
            <div className="contact-card-content">
              <h4>Email</h4>
              <p>james.pratt@conductor.com</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Phone size={24} />
            <div className="contact-card-content">
              <h4>Phone</h4>
              <p>+61 8 9XXX XXXX</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MapPin size={24} />
            <div className="contact-card-content">
              <h4>Location</h4>
              <p>Perth, Western Australia</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="social-links"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4>Follow James</h4>
            <div className="social-buttons">
              <a 
                href="https://www.instagram.com/james.frames" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/pratt-james/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
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
            <label htmlFor="email">Email Address</label>
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
            <label htmlFor="eventType">Inquiry Type</label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
            >
              <option value="general">General Inquiry</option>
              <option value="booking">Performance Booking</option>
              <option value="collaboration">Collaboration</option>
              <option value="masterclass">Masterclass/Workshop</option>
              <option value="media">Media Interview</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="btn-submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={18} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default ContactContent
