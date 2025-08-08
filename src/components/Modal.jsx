import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose, children, title }) => {
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { 
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { 
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const backdropVariants = {
    hidden: { 
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  const buttonVariants = {
    initial: { scale: 1, rotate: 0, opacity: 0.8 },
    hover: { 
      scale: 1.1, 
      rotate: 90,
      opacity: 1,
      transition: { 
        duration: 0.2,
        type: 'spring',
        stiffness: 400
      }
    },
    tap: { scale: 0.9 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="modal-close"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={onClose}
            >
              <X size={24} />
            </motion.button>
            
            {title && <h2 className="modal-title">{title}</h2>}
            
            <div className="modal-body">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
