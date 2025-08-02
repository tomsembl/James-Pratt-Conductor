import { motion } from 'framer-motion'
import { Music, Users, Clock, Star, Calendar, BookOpen, Theater, GraduationCap } from 'lucide-react'

const Repertoire = () => {
  const repertoireCategories = [
    {
      title: "Choral-Orchestral Masterworks",
      icon: <Users size={32} />,
      description: "Major works for choir and orchestra with Perth Symphonic Chorus and collaborating orchestras",
      pieces: [
        {
          composer: "George Frideric Handel",
          work: "Messiah",
          notes: "Recent performance 2023 - Perth Symphonic Chorus",
          forces: "SATB Soloists, Chorus, Orchestra"
        },
        {
          composer: "Giuseppe Verdi",
          work: "Requiem",
          notes: "Specialty repertoire - multiple performances",
          forces: "SATB Soloists, Chorus, Full Orchestra"
        },
        {
          composer: "Gabriel Fauré",
          work: "Requiem in D minor, Op. 48",
          notes: "French Romantic sacred masterwork",
          forces: "SATB Soloists, Chorus, Orchestra"
        },
        {
          composer: "Ludwig van Beethoven",
          work: "Symphony No. 9 'Choral'",
          notes: "Choral symphony with Perth Symphonic Chorus collaborations",
          forces: "SATB Soloists, Chorus, Full Orchestra"
        }
      ]
    },
    {
      title: "Operatic Repertoire",
      icon: <Star size={32} />,
      description: "Opera experience from Royal Ballet Covent Garden and theatrical productions",
      pieces: [
        {
          composer: "Classical Opera",
          work: "Royal Ballet Covent Garden Repertoire",
          notes: "Assistant conductor experience at world-renowned opera house",
          forces: "Full Opera Company, Orchestra"
        },
        {
          composer: "Musical Theatre",
          work: "Phantom of the Opera",
          notes: "Touring production conductor",
          forces: "Cast, Orchestra, Touring Ensemble"
        },
        {
          composer: "Contemporary Works",
          work: "Modern Theatrical Productions",
          notes: "Musical theatre and opera conducting experience",
          forces: "Variable Ensembles"
        }
      ]
    },
    {
      title: "Symphonic Repertoire",
      icon: <Music size={32} />,
      description: "Orchestral works and symphonic literature including Adelaide Symphony Orchestra debut",
      pieces: [
        {
          composer: "Symphony Orchestra",
          work: "Adelaide Symphony Orchestra Debut",
          notes: "Recent conducting debut marking career milestone",
          forces: "Full Symphony Orchestra"
        },
        {
          composer: "Classical Period",
          work: "Mozart, Haydn, Early Beethoven",
          notes: "Classical repertoire specialization from European training",
          forces: "Chamber to Full Orchestra"
        },
        {
          composer: "Romantic Period",
          work: "Beethoven, Brahms, Romantic Symphonies",
          notes: "Core symphonic repertoire",
          forces: "Full Symphony Orchestra"
        }
      ]
    },
    {
      title: "Choral Literature",
      icon: <BookOpen size={32} />,
      description: "Perth Symphonic Chorus repertoire and choral specializations",
      pieces: [
        {
          composer: "Sacred Choral Works",
          work: "Major Sacred Repertoire",
          notes: "Drawing from boy chorister background and current PSC leadership",
          forces: "SATB Chorus, Orchestra"
        },
        {
          composer: "Contemporary Choral",
          work: "Modern Choral Compositions",
          notes: "Innovative programming with Perth Symphonic Chorus",
          forces: "Various Choral Configurations"
        },
        {
          composer: "Community Repertoire",
          work: "Educational and Outreach Programs",
          notes: "Accessible works for community engagement",
          forces: "Community Chorus, Various Orchestrations"
        }
      ]
    }
  ]

    const specializations = [
    {
      title: "Choral-Orchestral Leadership",
      description: "Perth Symphonic Chorus artistic leadership and major choral-orchestral works",
      icon: <Users size={24} />,
      features: ["Perth Symphonic Chorus", "Messiah performances", "Verdi Requiem specialty", "Community engagement"]
    },
    {
      title: "Professional Opera Experience",
      description: "Royal Ballet Covent Garden training and theatrical production expertise",
      icon: <Theater size={24} />,
      features: ["Royal Ballet Covent Garden", "Phantom of the Opera", "Assistant conductor roles", "International experience"]
    },
    {
      title: "Symphonic Conducting",
      description: "Adelaide Symphony Orchestra debut and orchestral leadership",
      icon: <Music size={24} />,
      features: ["Adelaide Symphony debut", "Full orchestra repertoire", "Guest conducting", "Symphonic collaboration"]
    },
    {
      title: "Musical Excellence Recognition",
      description: "Brian Stacey Award recipient for outstanding musical achievement",
      icon: <GraduationCap size={24} />,
      features: ["Brian Stacey Award", "Professional recognition", "Musical leadership", "Community contribution"]
    }
  ]

  return (
    <div className="repertoire">
      {/* Hero Section */}
      <section className="repertoire-hero bg-gradient">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Repertoire</h1>
            <p className="hero-subtitle">
              From Perth Symphonic Chorus leadership to international opera experience, 
              discover the diverse repertoire that defines James Pratt's conducting artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section specializations">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Areas of Specialization</h2>
            <p>Core repertoire and expertise areas</p>
          </motion.div>

          <div className="grid grid-2">
            {specializations.map((spec, index) => (
              <motion.div 
                key={index}
                className="specialization-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-gold">{spec.title}</h3>
                <p className="spec-description">{spec.description}</p>
                <ul className="spec-features">
                  {spec.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repertoire Categories */}
      <section className="section repertoire-categories bg-dark">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Repertoire by Category</h2>
            <p>Comprehensive overview of conducted works</p>
          </motion.div>

          <div className="categories-grid">
            {repertoireCategories.map((category, index) => (
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

                <div className="pieces-list">
                  {category.pieces.map((piece, pieceIndex) => (
                    <div key={pieceIndex} className="piece-item">
                      <div className="piece-header">
                        <h4>{piece.composer}</h4>
                      </div>
                      <h5 className="work-title">{piece.work}</h5>
                      <p className="piece-notes">{piece.notes}</p>
                      <p className="piece-forces">
                        <strong>Forces:</strong> {piece.forces}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Notes */}
      <section className="section performance-notes">
        <div className="container">
          <motion.div 
            className="notes-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Performance Approach</h2>
            <div className="grid grid-2">
              <div className="approach-item">
                <h3>Interpretive Philosophy</h3>
                <p>
                  Each work is approached with deep respect for the composer's intentions 
                  while bringing fresh interpretive insights that serve the music and 
                  engage contemporary audiences. Historical performance practices inform 
                  decisions without constraining artistic expression.
                </p>
              </div>
              <div className="approach-item">
                <h3>Ensemble Development</h3>
                <p>
                  Focus on building technical precision while fostering musical expression 
                  within ensembles. Repertoire selection considers both artistic merit and 
                  the developmental needs of performers, creating growth opportunities 
                  while maintaining high performance standards.
                </p>
              </div>
              <div className="approach-item">
                <h3>Collaborative Process</h3>
                <p>
                  Working closely with soloists, section leaders, and ensemble members 
                  to create unified interpretations. Regular collaboration with orchestras, 
                  opera companies, and choirs throughout Australia ensures adaptability 
                  to different performance contexts.
                </p>
              </div>
              <div className="approach-item">
                <h3>Educational Focus</h3>
                <p>
                  Committed to expanding repertoire knowledge among performers and audiences. 
                  Programming balances familiar masterworks with lesser-known gems, 
                  providing context and insight that enhances appreciation and understanding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .repertoire-hero {
          padding: 120px 0 var(--spacing-2xl);
          text-align: center;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .specialization-card {
          text-align: center;
        }

        .spec-description {
          margin-bottom: var(--spacing-sm);
          font-weight: 500;
        }

        .spec-experience {
          font-style: italic;
          opacity: 0.8;
        }

        .categories-grid {
          display: grid;
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

        .pieces-list {
          display: grid;
          gap: var(--spacing-md);
        }

        .piece-item {
          padding: var(--spacing-sm);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          background: rgba(245, 245, 245, 0.5);
        }

        .piece-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xs);
        }

        .piece-header h4 {
          color: var(--primary-color);
          margin-bottom: 0;
        }

        .work-title {
          color: var(--secondary-color);
          margin-bottom: var(--spacing-xs);
          font-style: italic;
        }

        .piece-notes {
          margin-bottom: var(--spacing-xs);
          font-size: 0.9rem;
        }

        .piece-forces {
          font-size: 0.85rem;
          opacity: 0.8;
          margin-bottom: 0;
        }

        .approach-item {
          padding: var(--spacing-md);
        }

        .approach-item h3 {
          color: var(--accent-color);
          margin-bottom: var(--spacing-sm);
        }

        @media (max-width: 768px) {
          .category-header {
            flex-direction: column;
            text-align: center;
          }

          .piece-header {
            flex-direction: column;
            gap: var(--spacing-xs);
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}

export default Repertoire
