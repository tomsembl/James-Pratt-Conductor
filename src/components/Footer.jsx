import { Mail, Phone, MapPin, Music, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-content grid grid-3">
          <div className="footer-section">
            <div className="footer-logo">
              <Music size={32} />
              <h3>James Pratt</h3>
            </div>
            <p>Professional Conductor and Musical Director</p>
            <p>Music Director of Perth Symphonic Chorus</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/repertoire">Repertoire</a></li>
              <li><a href="/media">Media</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Perth, Western Australia</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:info@jamespratt.com">info@jamespratt.com</a>
              </div>
              <div className="contact-item">
                <Linkedin size={16} />
                <a href="https://www.linkedin.com/in/pratt-james/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} James Pratt. All rights reserved.</p>
            <p>Professional Conductor & Musical Director</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: var(--spacing-2xl) 0 var(--spacing-lg);
          margin-top: auto;
        }

        .footer-content {
          margin-bottom: var(--spacing-xl);
        }

        .footer-section h3,
        .footer-section h4 {
          color: var(--accent-color);
          margin-bottom: var(--spacing-sm);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-sm);
          color: var(--accent-color);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: var(--spacing-xs);
        }

        .footer-links a {
          color: var(--text-light);
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--accent-color);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-light);
        }

        .contact-item a {
          color: var(--text-light);
          transition: var(--transition);
        }

        .contact-item a:hover {
          color: var(--accent-color);
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: var(--spacing-lg) 0;
        }

        .footer-bottom-content {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-bottom-content p {
          margin-bottom: var(--spacing-xs);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
