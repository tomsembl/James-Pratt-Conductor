import { motion, AnimatePresence } from 'framer-motion'
import { Play, Camera, Music, X } from 'lucide-react'
import { useState } from 'react'
import { getAssetPath } from '../utils/helpers'

const MediaContent = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const mediaItems = [
    {
      type: 'photo',
      title: 'James with Teddy Tahu Rhodes',
      thumbnail: getAssetPath('/images/James_and_Teddy_Tahu_Rhodes.jpg'),
      description: 'James with renowned baritone Teddy Tahu Rhodes'
    },
    {
      type: 'photo',
      title: 'Professional Portrait',
      thumbnail: getAssetPath('/images/James_Pro_Portrait.jpg'),
      description: 'Professional portrait of James Pratt'
    },
    {
      type: 'photo',
      title: 'Conducting in Black & White',
      thumbnail: getAssetPath('/images/James_Conducting_3_BW.jpg'),
      description: 'Artistic black and white portrait of James conducting'
    },
    {
      type: 'photo',
      title: 'Bach St Matthew Passion - Wide Shot',
      thumbnail: getAssetPath('/images/Bach_St_Matthew_Passion_Wide.jpg'),
      description: 'Wide view of James conducting Bach\'s St Matthew Passion'
    },
    {
      type: 'photo',
      title: 'Bach St Matthew Passion - Performance',
      thumbnail: getAssetPath('/images/Bach_St_Matthew_Passion_Wide_2.jpg'),
      description: 'Another perspective of the St Matthew Passion performance'
    },
    {
      type: 'photo',
      title: 'Bach St Matthew Passion - Bowing',
      thumbnail: getAssetPath('/images/James_Bowing_Bach_St_Matthew_Passion.jpg'),
      description: 'James taking a bow after conducting Bach\'s St Matthew Passion'
    },
    {
      type: 'photo',
      title: 'Messiah 2024 - Bowing',
      thumbnail: getAssetPath('/images/James_Bowing_Messiah_24.jpg'),
      description: 'James bowing after Handel\'s Messiah performance in 2024'
    },
    {
      type: 'photo',
      title: 'Conducting Session',
      thumbnail: getAssetPath('/images/James_Conducting_2.jpg'),
      description: 'James in action during a conducting session'
    },
    {
      type: 'photo',
      title: 'Bach St Matthew Passion - Conducting',
      thumbnail: getAssetPath('/images/James_Conducting_Bach_St_Matthew_Passion.jpg'),
      description: 'James conducting Bach\'s monumental St Matthew Passion'
    },
    {
      type: 'photo',
      title: 'Joyful Conducting',
      thumbnail: getAssetPath('/images/James_Conducting_Joyfully.jpg'),
      description: 'James conducting with evident joy and passion'
    },
    {
      type: 'photo',
      title: 'Serious Conducting',
      thumbnail: getAssetPath('/images/James_Conducting_Serious.jpg'),
      description: 'James in focused concentration during a performance'
    },
    {
      type: 'photo',
      title: 'Conducting with a Smile',
      thumbnail: getAssetPath('/images/James_Conducting_Smile.jpg'),
      description: 'James conducting with warmth and enthusiasm'
    },
    {
      type: 'photo',
      title: 'Messiah 2024 - With Soloist Fiona Campbell',
      thumbnail: getAssetPath('/images/James_Conducting_Soloist_Messiah_24.jpg'),
      description: 'James conducting alongside soloist Fiona Campbell OAM during Messiah 2024'
    },
    {
      type: 'photo',
      title: 'Trial By Jury - Soloists',
      thumbnail: getAssetPath('/images/James_Trial_By_Jury_Soloists.jpg'),
      description: 'James with soloists from Gilbert & Sullivan\'s Trial By Jury 2024'
    },
    {
      type: 'photo',
      title: 'Handel\'s Messiah Wide Shot',
      thumbnail: getAssetPath('/images/Handels_Messiah_Wide.webp'),
      description: 'Wide shot of James conducting Handel\'s Messiah with full chorus and orchestra'
    }
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'video': return <Play size={24} />
      case 'photo': return <Camera size={24} />
      case 'audio': return <Music size={24} />
      default: return <Camera size={24} />
    }
  }

  const openImageModal = (item) => {
    setSelectedImage(item)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <motion.div 
      className="media-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="media-header">
        <h3>Media Gallery</h3>
        <p>Photos, videos, and recordings from performances and events</p>
      </div>
      
      <div className="media-grid">
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            className={`media-item ${item.type}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => openImageModal(item)}
          >
            <div className="media-thumbnail">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="media-image"
              />
              <div className="media-overlay">
                <button className="play-button">
                  {getIcon(item.type)}
                </button>
              </div>
            </div>
            <div className="media-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="media-type">{item.type.toUpperCase()}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="image-modal-content"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="image-modal-close" onClick={closeImageModal}>
                <X size={20} />
              </button>
              <img
                src={selectedImage.thumbnail}
                alt={selectedImage.title}
                className="image-modal-image"
              />
              <div className="image-modal-info">
                <h4>{selectedImage.title}</h4>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default MediaContent
