import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, MessageSquare, Camera, Calendar, Mail, Star } from 'lucide-react'
import MosaicTile from './components/MosaicTile'
import Modal from './components/Modal'
import BioContent from './components/BioContent'
import TestimonialsContent from './components/TestimonialsContent'
import MediaContent from './components/MediaContent'
import EventsContent from './components/EventsContent'
import ContactContent from './components/ContactContent'
import ReviewsContent from './components/ReviewsContent'
import { getAssetPath } from './utils/helpers'

function App() {
  const [activeModal, setActiveModal] = useState(null)

  const tiles = [
    {
      id: 'bio',
      title: 'Biography',
      icon: <User size={32} />,
      bgImage: getAssetPath('/images/James_Bio.jpg'),
      content: <BioContent />,
      modalTitle: 'Biography'
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      icon: <MessageSquare size={32} />,
      bgImage: getAssetPath('/images/James_and_Teddy_Tahu_Rhodes.jpg'),
      content: <TestimonialsContent />,
      modalTitle: 'Testimonials'
    },
    {
      id: 'media',
      title: 'Media Gallery',
      icon: <Camera size={32} />,
      bgImage: getAssetPath('/images/James_Conducting_Joyfully.jpg'),
      content: <MediaContent />,
      modalTitle: 'Media Gallery'
    },
    {
      id: 'events',
      title: 'Upcoming Events',
      icon: <Calendar size={32} />,
      bgImage: getAssetPath('/images/Handels_Messiah_Wide.webp'),
      content: <EventsContent />,
      modalTitle: 'Upcoming Events'
    },
    {
      id: 'reviews',
      title: 'Reviews',
      icon: <Star size={32} />,
      bgImage: getAssetPath('/images/James_Conducting_Smile.jpg'),
      content: <ReviewsContent />,
      modalTitle: 'Professional Reviews'
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: <Mail size={32} />,
      bgImage: getAssetPath('/images/James_Conducting_Serious.jpg'),
      content: <ContactContent />,
      modalTitle: 'Contact James'
    }
  ]

  const openModal = (tileId) => {
    setActiveModal(tileId)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const currentTile = tiles.find(tile => tile.id === activeModal)

  return (
    <div className="App" style={{ backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header className="site-header" style={{
        padding: '24px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #f1f3f4',
        backgroundColor: '#f8f9fa',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={getAssetPath('/images/James_Pro_Portrait.jpg')}
            alt="James Pratt"
            style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e9ecef' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <strong style={{ fontSize: 20, letterSpacing: '-0.02em' }}>James Pratt</strong>
          </div>
        </div>
      </header>

      <motion.main
        className="mosaic-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div 
          className="mosaic-grid"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              className={`tile-${tile.id}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
            >
              <MosaicTile
                title={tile.title}
                icon={tile.icon}
                bgImage={tile.bgImage}
                onClick={() => openModal(tile.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

      {/* Footer */}
      <footer className="site-footer" style={{
        padding: '24px 16px',
        textAlign: 'center',
        borderTop: '1px solid #f1f3f4'
      }}>
        <small style={{ color: '#6c757d' }}>
          © 2025 • <a href="mailto:info@jamespratt.com.au">info@jamespratt.com.au</a>
        </small>
      </footer>

      <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={currentTile?.modalTitle}
      >
        {currentTile?.content}
      </Modal>
    </div>
  )
}

export default App
