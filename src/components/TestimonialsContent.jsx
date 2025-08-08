import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TestimonialsContent = () => {
  const testimonials = [
    {
      text: "James brings exceptional artistry and technical precision to every performance. His leadership has elevated our chorus to new heights.",
      author: "Perth Symphonic Chorus Member",
      role: "Soprano Section"
    },
    {
      text: "Working with James at Royal Ballet Covent Garden was inspiring. His understanding of operatic nuance is remarkable.",
      author: "Royal Opera House Colleague",
      role: "Assistant Director"
    },
    {
      text: "His debut with Adelaide Symphony Orchestra was masterful. James has a rare ability to bring out the best in every musician.",
      author: "Adelaide Symphony Orchestra",
      role: "Principal Violinist"
    },
    {
      text: "James combines technical excellence with genuine musicality. He makes complex works accessible and moving.",
      author: "Audience Member",
      role: "Concert Regular"
    }
  ]

  return (
    <motion.div 
      className="testimonials-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="testimonials-header">
        <h3>What People Say</h3>
        <p>Testimonials from colleagues, musicians, and audiences</p>
        <div className="testimonials-feature-image">
          <img 
            src="/images/James_and_Teddy_Tahu_Rhodes.jpg" 
            alt="James Pratt with Teddy Tahu Rhodes"
            className="feature-image"
          />
          <p className="image-caption">James with renowned baritone Teddy Tahu Rhodes</p>
        </div>
      </div>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="testimonial-quote">
              <Quote size={24} className="quote-icon" />
              <p>"{testimonial.text}"</p>
            </div>
            <div className="testimonial-author">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TestimonialsContent
