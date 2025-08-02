import { motion } from 'framer-motion'
import { Play, Image, FileText, Download, ExternalLink, Camera, Video, Music } from 'lucide-react'

const Media = () => {
  const mediaCategories = [
    {
      title: "Performance Videos",
      icon: <Video size={32} />,
      description: "Recordings of live performances and rehearsals",
      items: [
        {
          title: "Verdi Requiem - Perth Symphonic Chorus",
          description: "Complete performance with West Australian Symphony Orchestra",
          type: "video",
          duration: "90 minutes",
          year: "2023",
          venue: "Perth Concert Hall"
        },
        {
          title: "State Opera Production Highlights",
          description: "Excerpts from various operatic productions",
          type: "video",
          duration: "Various",
          year: "2020-2023",
          venue: "State Opera SA"
        },
        {
          title: "Rehearsal Process Documentary",
          description: "Behind-the-scenes look at preparation for major works",
          type: "video",
          duration: "25 minutes",
          year: "2022",
          venue: "Various"
        }
      ]
    },
    {
      title: "Audio Recordings",
      icon: <Music size={32} />,
      description: "Professional audio recordings and live performance captures",
      items: [
        {
          title: "Beethoven Symphony No. 9",
          description: "Live recording with Perth Symphonic Chorus",
          type: "audio",
          duration: "65 minutes",
          year: "2023",
          venue: "Perth Concert Hall"
        },
        {
          title: "Mozart Requiem",
          description: "Studio recording with chamber ensemble",
          type: "audio",
          duration: "55 minutes",
          year: "2022",
          venue: "Studio Recording"
        },
        {
          title: "Contemporary Choral Works",
          description: "Collection of modern compositions",
          type: "audio",
          duration: "45 minutes",
          year: "2021",
          venue: "Various"
        }
      ]
    },
    {
      title: "Performance Photography",
      icon: <Camera size={32} />,
      description: "Professional photos from concerts and productions",
      items: [
        {
          title: "Perth Symphonic Chorus Concerts",
          description: "High-resolution performance photography",
          type: "photo",
          count: "150+ images",
          year: "2020-2024",
          venue: "Perth Concert Hall & Various"
        },
        {
          title: "State Opera Productions",
          description: "Behind-the-scenes and performance shots",
          type: "photo",
          count: "200+ images",
          year: "2019-2023",
          venue: "State Opera SA"
        },
        {
          title: "Portrait Sessions",
          description: "Professional conductor portraits",
          type: "photo",
          count: "50+ images",
          year: "2018-2024",
          venue: "Various Studios"
        },
        {
          title: "Rehearsal Photography",
          description: "Candid shots of rehearsal process",
          type: "photo",
          count: "100+ images",
          year: "2020-2024",
          venue: "Various Venues"
        }
      ]
    },
    {
      title: "Press & Publications",
      icon: <FileText size={32} />,
      description: "Press coverage, reviews, and published materials",
      items: [
        {
          title: "Concert Reviews",
          description: "Reviews from major newspapers and music publications",
          type: "press",
          source: "The West Australian, Limelight Magazine",
          year: "2018-2024",
          venue: "Various Publications"
        },
        {
          title: "Interview Features",
          description: "In-depth interviews about conducting and music",
          type: "press",
          source: "ABC Classical, Music in Perth",
          year: "2020-2023",
          venue: "Various Media"
        },
        {
          title: "Program Notes",
          description: "Written program notes for major performances",
          type: "publication",
          source: "Perth Symphonic Chorus, State Opera",
          year: "2019-2024",
          venue: "Performance Programs"
        },
        {
          title: "Educational Materials",
          description: "Conducting masterclass materials and guides",
          type: "publication",
          source: "Educational Institutions",
          year: "2021-2024",
          venue: "Workshops & Masterclasses"
        }
      ]
    }
  ]

  const pressKit = {
    title: "Press Kit",
    description: "Professional materials for media and booking purposes",
    items: [
      "High-resolution professional photos",
      "Detailed biography and repertoire list",
      "Recent press reviews and coverage",
      "Performance history and upcoming dates",
      "Technical requirements and rider",
      "Audio samples and video excerpts"
    ]
  }

  const getMediaIcon = (type) => {
    switch (type) {
      case 'video': return <Video size={20} />
      case 'audio': return <Music size={20} />
      case 'photo': return <Camera size={20} />
      case 'press':
      case 'publication': return <FileText size={20} />
      default: return <FileText size={20} />
    }
  }

  return (
    <div className="media">
      {/* Hero Section */}
      <section className="media-hero bg-gradient">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Media Gallery</h1>
            <p className="hero-subtitle">
              Performance recordings, photography, and press materials showcasing 
              artistic excellence and professional achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="section featured-media">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Featured Performances</h2>
            <p>Highlights from recent concerts and productions</p>
          </motion.div>

          <div className="grid grid-2">
            <motion.div 
              className="featured-item card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="media-placeholder video-placeholder">
                <Play size={48} />
                <h3>Verdi Requiem</h3>
                <p>Perth Symphonic Chorus & WASO</p>
              </div>
              <div className="featured-content">
                <h4>Complete Performance Recording</h4>
                <p>
                  Full performance of Verdi's Requiem with Perth Symphonic Chorus 
                  and West Australian Symphony Orchestra at Perth Concert Hall.
                </p>
                <div className="media-meta">
                  <span>Duration: 90 minutes</span>
                  <span>Year: 2023</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="featured-item card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="media-placeholder photo-placeholder">
                <Camera size={48} />
                <h3>Performance Gallery</h3>
                <p>Professional Photography</p>
              </div>
              <div className="featured-content">
                <h4>Concert Photography Collection</h4>
                <p>
                  Professional photos capturing the energy and artistry of live 
                  performances with various orchestras and opera companies.
                </p>
                <div className="media-meta">
                  <span>350+ high-resolution images</span>
                  <span>Years: 2020-2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Categories */}
      <section className="section media-categories bg-dark">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Media Archive</h2>
            <p>Complete collection organized by media type</p>
          </motion.div>

          <div className="categories-grid">
            {mediaCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="category-section card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="category-header">
                  <div className="category-icon text-gold">
                    {category.icon}
                  </div>
                  <div>
                    <h3>{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                </div>

                <div className="media-list">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="media-item">
                      <div className="media-item-header">
                        <div className="media-type-icon">
                          {getMediaIcon(item.type)}
                        </div>
                        <div className="media-item-info">
                          <h4>{item.title}</h4>
                          <p className="media-description">{item.description}</p>
                        </div>
                      </div>
                      <div className="media-details">
                        {item.duration && <span>Duration: {item.duration}</span>}
                        {item.count && <span>Count: {item.count}</span>}
                        {item.source && <span>Source: {item.source}</span>}
                        <span>Year: {item.year}</span>
                        <span>Venue: {item.venue}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="section press-kit">
        <div className="container">
          <motion.div 
            className="press-kit-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-2">
              <div className="press-kit-info">
                <h2>Professional Press Kit</h2>
                <p>
                  Comprehensive materials for media representatives, venue managers, 
                  and booking agents. All resources are professionally prepared and 
                  regularly updated.
                </p>
                <ul className="press-kit-list">
                  {pressKit.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="press-kit-actions">
                  <button className="btn">
                    <Download size={20} />
                    Download Press Kit
                  </button>
                  <button className="btn btn-outline">
                    <ExternalLink size={20} />
                    View Online
                  </button>
                </div>
              </div>
              <div className="press-kit-preview">
                <div className="media-placeholder press-placeholder">
                  <FileText size={48} />
                  <h3>Press Kit Preview</h3>
                  <p>Professional Materials Package</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="section media-contact bg-gradient">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Media Inquiries</h2>
            <p>
              For additional media materials, interview requests, or performance recordings, 
              please contact our media representative.
            </p>
            <div className="contact-actions">
              <a href="/contact" className="btn">Contact Media Team</a>
              <a href="mailto:media@jamespratt.com" className="btn btn-outline">
                media@jamespratt.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .media-hero {
          padding: 120px 0 var(--spacing-2xl);
          text-align: center;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .featured-item {
          overflow: hidden;
        }

        .media-placeholder {
          background: var(--border-color);
          border-radius: var(--border-radius);
          aspect-ratio: 16/9;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-dark);
          opacity: 0.6;
          margin-bottom: var(--spacing-md);
          position: relative;
        }

        .video-placeholder {
          background: linear-gradient(135deg, #333, #555);
          color: white;
        }

        .photo-placeholder {
          background: linear-gradient(135deg, #8b4513, #d4af37);
          color: white;
        }

        .press-placeholder {
          background: linear-gradient(135deg, #1a1a1a, #333);
          color: white;
        }

        .media-placeholder h3 {
          margin-top: var(--spacing-sm);
          margin-bottom: var(--spacing-xs);
        }

        .featured-content h4 {
          color: var(--accent-color);
          margin-bottom: var(--spacing-sm);
        }

        .media-meta {
          display: flex;
          gap: var(--spacing-md);
          font-size: 0.9rem;
          color: var(--secondary-color);
          margin-top: var(--spacing-sm);
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .category-section {
          background: var(--background-light);
        }

        .category-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .category-icon {
          flex-shrink: 0;
        }

        .category-description {
          opacity: 0.8;
          margin-bottom: 0;
        }

        .media-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .media-item {
          padding: var(--spacing-sm);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          background: rgba(245, 245, 245, 0.5);
        }

        .media-item-header {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .media-type-icon {
          color: var(--accent-color);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .media-item-info h4 {
          margin-bottom: var(--spacing-xs);
          color: var(--primary-color);
        }

        .media-description {
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        .media-details {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .media-details span {
          background: rgba(212, 175, 55, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: var(--border-radius);
        }

        .press-kit-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .press-kit-list {
          margin: var(--spacing-lg) 0;
          padding-left: var(--spacing-lg);
        }

        .press-kit-list li {
          margin-bottom: var(--spacing-xs);
        }

        .press-kit-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .press-kit-actions .btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .contact-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
          margin-top: var(--spacing-lg);
        }

        @media (max-width: 768px) {
          .media-meta {
            flex-direction: column;
            gap: var(--spacing-xs);
          }

          .category-header {
            flex-direction: column;
            text-align: center;
          }

          .media-item-header {
            flex-direction: column;
            text-align: center;
          }

          .press-kit-actions {
            flex-direction: column;
          }

          .contact-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default Media
