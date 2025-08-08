import { motion } from 'framer-motion'

const MosaicTile = ({ 
  title, 
  icon, 
  bgImage, 
  bgColor = '#1a1a1a', 
  onClick, 
  className = '',
  size = 'normal' 
}) => {
  const tileVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -8,
      transition: { 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1]
      }
    },
    tap: { 
      scale: 0.98,
      y: -4,
      transition: { duration: 0.1 }
    }
  }

  const iconVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.1, 
      y: -4,
      transition: { 
        duration: 0.3, 
        ease: 'easeOut'
      }
    }
  }

  const overlayVariants = {
    initial: { opacity: 1 },
    hover: { 
      opacity: 0.8,
      transition: { duration: 0.4 }
    }
  }

  const contentVariants = {
    initial: { y: 0 },
    hover: { 
      y: -4,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      className={`mosaic-tile ${className} ${size}`}
      variants={tileVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : 'none'
      }}
    >
      <motion.div 
        className="tile-overlay"
        variants={overlayVariants}
      />
      
      <motion.div 
        className="tile-content"
        variants={contentVariants}
      >
        <motion.div 
          className="tile-icon"
          variants={iconVariants}
        >
          {icon}
        </motion.div>
        <h3 className="tile-title">{title}</h3>
      </motion.div>
      
      <div className="tile-border" />
    </motion.div>
  )
}

export default MosaicTile
