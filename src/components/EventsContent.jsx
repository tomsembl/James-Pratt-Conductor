import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react'

const EventsContent = () => {
  const upcomingEvents = [
    {
      title: 'Perth Symphonic Chorus - Spring Concert',
      date: '2025-09-15',
      time: '7:30 PM',
      venue: 'Perth Concert Hall',
      location: 'Perth, WA',
      description: 'An evening of classical masterpieces featuring works by Mozart, Brahms, and contemporary Australian composers.',
      ticketsAvailable: true,
      image: '/images/James_Conducting_Joyfully.jpg'
    },
    {
      title: 'Chamber Music Ensemble',
      date: '2025-10-02',
      time: '2:00 PM',
      venue: 'Government House Ballroom',
      location: 'Perth, WA',
      description: 'Intimate afternoon performance featuring baroque and romantic chamber works.',
      ticketsAvailable: true,
      image: '/images/James_Conducting_Smile.jpg'
    },
    {
      title: 'Christmas Choral Spectacular',
      date: '2025-12-08',
      time: '7:00 PM',
      venue: 'St. George\'s Cathedral',
      location: 'Perth, WA',
      description: 'Traditional and contemporary Christmas carols with full chorus and orchestra.',
      ticketsAvailable: false,
      image: '/images/Handels_Messiah_Wide.webp'
    },
    {
      title: 'Masterclass: Advanced Conducting',
      date: '2025-11-20',
      time: '10:00 AM',
      venue: 'WA Academy of Performing Arts',
      location: 'Mount Lawley, WA',
      description: 'Educational masterclass for aspiring conductors and music students.',
      ticketsAvailable: true,
      image: '/images/James_Conducting_Bach_St_Matthew_Passion.jpg'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-AU', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <motion.div 
      className="events-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="events-header">
        <h3>Upcoming Events</h3>
        <p>Join us for upcoming performances and musical events</p>
      </div>
      
      <div className="events-list">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            
            <div className="event-content">
              <div className="event-date">
                <Calendar size={20} />
                <span>{formatDate(event.date)}</span>
              </div>
              
              <div className="event-details">
                <h4>{event.title}</h4>
                <p className="event-description">{event.description}</p>
                
                <div className="event-meta">
                  <div className="event-time">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-location">
                    <MapPin size={16} />
                    <span>{event.venue}, {event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="event-actions">
                {event.ticketsAvailable ? (
                  <button className="btn-ticket">
                    <Ticket size={16} />
                    Get Tickets
                  </button>
                ) : (
                  <span className="sold-out">Sold Out</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="events-footer">
        <p>For private bookings and performance inquiries, please use the contact form.</p>
      </div>
    </motion.div>
  )
}

export default EventsContent
