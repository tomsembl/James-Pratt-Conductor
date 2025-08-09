import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { getAssetPath } from '../utils/helpers'

const TestimonialsContent = () => {
  const testimonials = [
    {
      text: "I found James to be a pleasure to work with, and possessing a devotion to the art of conducting",
      author: "Barry Wordsworth",
      role: "Principal Guest Conductor Royal Ballet"
    },
    {
      text: "James is very gifted technically, with a clear yet supple vocabulary of gestures. His experience as a singer gives him unique insight into voices, and the technical and interpretive challenges faced by singers in the opera house and the concert hall",
      author: "Simon Hewett",
      role: "Music Professional"
    },
    {
      text: "James' conducting is supported by a keen musical intelligence and a well-developed technique. Given the right opportunities he could be a huge asset to Australia's musical future",
      author: "Graham Abbott",
      role: "Music Professional"
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
        <h3>Professional Testimonials</h3>
        <p>Endorsements from distinguished conductors and music professionals</p>
        <div className="testimonials-feature-image">
          <img 
            src={getAssetPath("/images/James_and_Teddy_Tahu_Rhodes.jpg")} 
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
              <span className="name">{testimonial.author}</span>
              <span className="title">{testimonial.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TestimonialsContent
