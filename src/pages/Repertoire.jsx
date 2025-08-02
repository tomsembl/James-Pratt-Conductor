import { motion } from 'framer-motion'
import { Music, Users, Clock, Star, Calendar, BookOpen } from 'lucide-react'

const Repertoire = () => {
  const repertoireCategories = [
    {
      title: "Choral-Orchestral Masterworks",
      icon: <Users size={32} />,
      description: "Major works for choir and orchestra",
      pieces: [
        {
          composer: "Giuseppe Verdi",
          work: "Requiem",
          notes: "Signature work - extensive performance experience",
          difficulty: "Advanced",
          forces: "SATB Soloists, Chorus, Full Orchestra"
        },
        {
          composer: "Wolfgang Amadeus Mozart",
          work: "Requiem in D minor, K. 626",
          notes: "Classical masterwork",
          difficulty: "Advanced",
          forces: "SATB Soloists, Chorus, Orchestra"
        },
        {
          composer: "Ludwig van Beethoven",
          work: "Symphony No. 9 'Choral'",
          notes: "Fourth movement with chorus",
          difficulty: "Advanced",
          forces: "SATB Soloists, Chorus, Full Orchestra"
        },
        {
          composer: "Johannes Brahms",
          work: "Ein deutsches Requiem",
          notes: "Romantic choral masterpiece",
          difficulty: "Advanced",
          forces: "Soprano & Baritone Soloists, Chorus, Orchestra"
        }
      ]
    },
    {
      title: "Operatic Repertoire",
      icon: <Star size={32} />,
      description: "Opera productions and concert performances",
      pieces: [
        {
          composer: "Giuseppe Verdi",
          work: "La Traviata",
          notes: "State Opera productions",
          difficulty: "Advanced",
          forces: "Full Opera Company, Orchestra"
        },
        {
          composer: "Giacomo Puccini",
          work: "Tosca",
          notes: "Dramatic opera experience",
          difficulty: "Advanced",
          forces: "Principal Cast, Chorus, Orchestra"
        },
        {
          composer: "Wolfgang Amadeus Mozart",
          work: "The Marriage of Figaro",
          notes: "Classical opera buffa",
          difficulty: "Advanced",
          forces: "Ensemble Cast, Orchestra"
        },
        {
          composer: "Contemporary Works",
          work: "Modern Opera Productions",
          notes: "State Opera collaborations",
          difficulty: "Varied",
          forces: "Variable Ensembles"
        }
      ]
    },
    {
      title: "Symphonic Repertoire",
      icon: <Music size={32} />,
      description: "Orchestral works and symphonic literature",
      pieces: [
        {
          composer: "Ludwig van Beethoven",
          work: "Symphonies No. 1-9",
          notes: "Complete symphonic cycle experience",
          difficulty: "Advanced",
          forces: "Full Symphony Orchestra"
        },
        {
          composer: "Johannes Brahms",
          work: "Symphonies No. 1-4",
          notes: "Romantic symphonic repertoire",
          difficulty: "Advanced",
          forces: "Full Symphony Orchestra"
        },
        {
          composer: "Wolfgang Amadeus Mozart",
          work: "Symphonies & Concertos",
          notes: "Classical period specialization",
          difficulty: "Intermediate to Advanced",
          forces: "Chamber to Full Orchestra"
        }
      ]
    },
    {
      title: "Choral Literature",
      icon: <BookOpen size={32} />,
      description: "Specialized choral works and arrangements",
      pieces: [
        {
          composer: "Johann Sebastian Bach",
          work: "Mass in B minor",
          notes: "Baroque choral masterwork",
          difficulty: "Advanced",
          forces: "SATB Soloists, Chorus, Baroque Orchestra"
        },
        {
          composer: "George Frideric Handel",
          work: "Messiah",
          notes: "Oratorio performance experience",
          difficulty: "Intermediate to Advanced",
          forces: "SATB Soloists, Chorus, Orchestra"
        },
        {
          composer: "Franz Schubert",
          work: "Mass in A♭ major",
          notes: "Romantic sacred work",
          difficulty: "Advanced",
          forces: "SATB Soloists, Chorus, Orchestra"
        },
        {
          composer: "Contemporary Composers",
          work: "Modern Choral Works",
          notes: "21st-century repertoire",
          difficulty: "Varied",
          forces: "Various Combinations"
        }
      ]
    }
  ]

  const specializations = [
    {
      area: "Verdi Requiem",
      description: "Renowned expertise in conducting this masterwork with full orchestra and chorus",
      experience: "Multiple performances with major orchestras and choirs"
    },
    {
      area: "Opera Conducting",
      description: "Extensive experience with State Opera of South Australia",
      experience: "Classical and contemporary operatic works"
    },
    {
      area: "Choral-Orchestral Works",
      description: "Specialization in large-scale works combining choir and orchestra",
      experience: "Regular performances with Perth Symphonic Chorus and WASO"
    },
    {
      area: "Educational Repertoire",
      description: "Works suitable for developing ensembles and educational contexts",
      experience: "Adaptation of repertoire for various skill levels"
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
              Extensive experience across orchestral, operatic, and choral literature, 
              from classical masterworks to contemporary compositions.
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
                <h3 className="text-gold">{spec.area}</h3>
                <p className="spec-description">{spec.description}</p>
                <p className="spec-experience">{spec.experience}</p>
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
                        <span className="difficulty-badge">{piece.difficulty}</span>
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

        .difficulty-badge {
          background: var(--accent-color);
          color: var(--text-dark);
          padding: 0.25rem 0.5rem;
          border-radius: var(--border-radius);
          font-size: 0.8rem;
          font-weight: 600;
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

          .difficulty-badge {
            align-self: flex-start;
          }
        }
      `}</style>
    </div>
  )
}

export default Repertoire
