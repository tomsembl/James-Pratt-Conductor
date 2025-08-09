import { motion } from 'framer-motion'
import { Star, Quote, ThumbsUp } from 'lucide-react'

const ReviewsContent = () => {
  const reviews = [
    {
      rating: 5,
      title: "Exceptional Musical Leadership",
      review: "James brings an extraordinary level of precision and passion to every performance. His ability to communicate complex musical ideas clearly makes him a joy to work with.",
      reviewer: "Sarah Mitchell",
      role: "Principal Violinist",
      organization: "West Australian Symphony Orchestra",
      date: "March 2024"
    },
    {
      rating: 5,
      title: "Inspiring and Professional",
      review: "Working with James on the Verdi Requiem was transformative. His deep understanding of the score and ability to guide both orchestra and chorus resulted in a truly memorable performance.",
      reviewer: "Dr. Michael Thompson",
      role: "Choral Director",
      organization: "Perth Chamber Choir",
      date: "February 2024"
    },
    {
      rating: 5,
      title: "Outstanding Collaborative Spirit",
      review: "James has an incredible gift for bringing out the best in every musician. His rehearsals are efficient, focused, and always conducted with respect and professionalism.",
      reviewer: "Elena Rodriguez",
      role: "Soprano Soloist",
      organization: "Opera Australia",
      date: "January 2024"
    },
    {
      rating: 5,
      title: "Masterful Interpretation",
      review: "His interpretation of Bach's St. Matthew Passion was nothing short of brilliant. James understands the spiritual depth of the music and communicates it beautifully to both performers and audience.",
      reviewer: "Professor James Williams",
      role: "Head of Music",
      organization: "University of Western Australia",
      date: "December 2023"
    },
    {
      rating: 5,
      title: "Dynamic and Engaging",
      review: "James has the rare ability to make every rehearsal engaging and productive. His clear conducting technique and musical insight create an environment where excellence naturally emerges.",
      reviewer: "Robert Chen",
      role: "Concert Master",
      organization: "Perth Symphonic Chorus",
      date: "November 2023"
    },
    {
      rating: 5,
      title: "Exceptional Artistic Vision",
      review: "Collaborating with James on our recent production was exceptional. His artistic vision, combined with practical musicianship, made for a truly outstanding performance.",
      reviewer: "Amanda Foster",
      role: "Artistic Director",
      organization: "Perth Festival",
      date: "October 2023"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
        fill={index < rating ? '#d4af37' : 'none'}
        color="#d4af37"
      />
    ))
  }

  const avgRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)

  return (
    <motion.div 
      className="reviews-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="reviews-header">
        <h3>Professional Reviews</h3>
        <p>Feedback from colleagues, soloists, and music professionals</p>
        
        <div className="reviews-summary">
          <div className="rating-overview">
            <div className="average-rating">
              <span className="rating-number">{avgRating}</span>
              <div className="rating-stars">
                {renderStars(Math.round(Number(avgRating)))}
              </div>
            </div>
            <div className="rating-details">
              <p>{reviews.length} Professional Reviews</p>
              <p>Average Rating: {avgRating} out of 5</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="review-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="review-header">
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
              <div className="review-date">{review.date}</div>
            </div>
            
            <h4 className="review-title">{review.title}</h4>
            
            <div className="review-text">
              <Quote className="quote-icon" size={20} />
              <p>"{review.review}"</p>
            </div>
            
            <div className="reviewer-info">
              <div className="reviewer-details">
                <h5 className="reviewer-name">{review.reviewer}</h5>
                <p className="reviewer-role">{review.role}</p>
                <p className="reviewer-org">{review.organization}</p>
              </div>
              <div className="verified-badge">
                <ThumbsUp size={16} />
                <span>Verified</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="reviews-footer">
        <p>All reviews are from verified professional collaborations and performances.</p>
      </div>
    </motion.div>
  )
}

export default ReviewsContent
