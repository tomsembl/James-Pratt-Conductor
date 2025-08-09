import { motion } from 'framer-motion'
import { Quote, ThumbsUp } from 'lucide-react'

const ReviewsContent = () => {
  const reviews = [
    {
      title: "Masterful Orchestra Direction",
      review: "Conductor James Pratt coaxed the majesty of the opening Sinfonia from Perth Baroque Orchestra in broad then precise gestures",
      reviewer: "David Cusworth",
      role: "Music Critic",
      organization: "The West Australian",
      date: "2024"
    },
    {
      title: "Deft Direction from the Podium",
      review: "'All we like sheep have gone astray', nimbly executed with deft direction from the podium",
      reviewer: "David Cusworth",
      role: "Music Critic",
      organization: "The West Australian",
      date: "2024"
    },
    {
      title: "Triumphant Hallelujah Chorus",
      review: "All then stood for the Hallelujah chorus; trumpets pitching in with timpani and full ensemble, rallying to an ovation for the ages",
      reviewer: "David Cusworth",
      role: "Music Critic",
      organization: "The West Australian",
      date: "2024"
    },
    {
      title: "Sharp Pace and Musical Excellence",
      review: "Down in the pit, the players of the Adelaide Symphony Orchestra keep up a sharp pace under conductor James Pratt. The opening overture is fulsome and serves as an enticing appetiser to the action.",
      reviewer: "Arts Hub",
      role: "Music Review",
      organization: "Arts Hub",
      date: "2023"
    },
    {
      title: "Well-Judged Musical Direction",
      review: "Down in the pit, the ASO are a great delight… conductor James Pratt gives well-judged length and pliability to line, giving Sullivan's score ample room to breathe while moving proceedings along at speed.",
      reviewer: "Indaily",
      role: "Music Review",
      organization: "Indaily",
      date: "2023"
    },
    {
      title: "Superb Orchestra Management",
      review: "With James Pratt conducting the performance, the Adelaide Symphony Orchestra sounds superb. Pratt's tempi are spot-on, and his management of dynamic levels always works to support the performers.",
      reviewer: "Glam Adelaide",
      role: "Music Review",
      organization: "Glam Adelaide",
      date: "2023"
    },
    {
      title: "Energy and Musical Gusto",
      review: "Musical Director James Pratt faithfully delivers Sullivan's score, but with more energy and gusto than I have heard in a long while.",
      reviewer: "Stage Whispers",
      role: "Music Review",
      organization: "Stage Whispers",
      date: "2023"
    },
    {
      title: "Skilful and Perceptive Conducting",
      review: "James Pratt is a skilful conductor of the Adelaide Symphony Orchestra, accompanying the singers with perception.",
      reviewer: "The Advertiser",
      role: "Music Review",
      organization: "The Advertiser",
      date: "2023"
    }
  ]

  return (
    <motion.div 
      className="reviews-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="reviews-header">
        <h3>Press Reviews</h3>
        <p>Critical acclaim from leading music publications and media outlets</p>
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
        <p>All reviews are from published music critics and established media outlets.</p>
      </div>
    </motion.div>
  )
}

export default ReviewsContent
