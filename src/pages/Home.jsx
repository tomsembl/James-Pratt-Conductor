import { motion } from 'framer-motion'
import { Award, Music, Users, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const achievements = [
    {
      icon: <Music size={32} />,
      title: "Music Director",
      description: "Perth Symphonic Chorus",
      detail: "Leading one of Western Australia's premier choral ensembles"
    },
    {
      icon: <Award size={32} />,
      title: "Award Winner",
      description: "Stacey Trust Award 2011",
      detail: "Recognized for excellence in musical leadership"
    },
    {
      icon: <Users size={32} />,
      title: "Opera Conductor",
      description: "State Opera of South Australia",
      detail: "Experienced in operatic and symphonic repertoire"
    },
    {
      icon: <Calendar size={32} />,
      title: "Performance Leader",
      description: "Major Works Specialist",
      detail: "Expert in Verdi Requiem and classical masterworks"
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero bg-gradient">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>James Pratt</h1>
            <h2 className="hero-subtitle">Professional Conductor & Musical Director</h2>
            <p className="hero-description">
              Music Director of Perth Symphonic Chorus, bringing passion and precision 
              to orchestral, operatic, and choral performances across Australia.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn">Learn More</Link>
              <Link to="/contact" className="btn btn-outline">Book Performance</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="grid grid-2">
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Distinguished Musical Leadership</h2>
              <p>
                James Pratt brings exceptional artistry and technical expertise to his role 
                as a professional conductor. As Music Director of the Perth Symphonic Chorus, 
                he has established himself as a leading figure in Western Australia's classical 
                music scene.
              </p>
              <p>
                With extensive experience conducting for State Opera of South Australia and 
                expertise in major choral-orchestral works including Verdi's Requiem, James 
                combines deep musical knowledge with inspiring leadership.
              </p>
              <Link to="/about" className="btn">Full Biography</Link>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <Music size={64} />
                <p>Professional Portrait</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section achievements bg-dark">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Professional Excellence</h2>
            <p>Recognized achievements and current leadership roles</p>
          </motion.div>
          
          <div className="grid grid-2">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="achievement-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="achievement-icon text-gold">
                  {achievement.icon}
                </div>
                <h3>{achievement.title}</h3>
                <h4 className="text-gold">{achievement.description}</h4>
                <p>{achievement.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="section current-projects">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Current Leadership</h2>
            <p>Active roles and upcoming performances</p>
          </motion.div>

          <div className="grid grid-2">
            <motion.div 
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Perth Symphonic Chorus</h3>
              <p className="project-role">Music Director</p>
              <p>
                Leading Western Australia's premier symphonic chorus in performances 
                of major choral-orchestral works. The chorus performs regularly with 
                the West Australian Symphony Orchestra and presents independent concerts 
                throughout the year.
              </p>
              <a href="https://www.perthsymphonicchorus.com.au/music-director" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-outline">
                Learn More
              </a>
            </motion.div>

            <motion.div 
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>State Opera Collaborations</h3>
              <p className="project-role">Guest Conductor</p>
              <p>
                Regular collaborations with State Opera of South Australia, conducting 
                diverse operatic repertoire and working with international artists. 
                Specializing in both traditional and contemporary works.
              </p>
              <Link to="/repertoire" className="btn btn-outline">
                View Repertoire
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta bg-gradient">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Collaborate?</h2>
            <p>
              Available for conducting engagements, guest appearances, and musical collaborations.
            </p>
            <Link to="/contact" className="btn">Get In Touch</Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-subtitle {
          color: var(--accent-color);
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          margin-bottom: var(--spacing-lg);
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .about-preview {
          padding-top: calc(var(--spacing-2xl) + 80px);
        }

        .about-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .image-placeholder {
          background: var(--border-color);
          border-radius: var(--border-radius);
          aspect-ratio: 3/4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-dark);
          opacity: 0.6;
        }

        .section-header {
          margin-bottom: var(--spacing-xl);
        }

        .achievement-card {
          text-align: center;
          background: var(--background-light);
        }

        .achievement-icon {
          margin-bottom: var(--spacing-sm);
        }

        .achievement-card h4 {
          margin-bottom: var(--spacing-sm);
        }

        .project-card {
          position: relative;
        }

        .project-role {
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
        }

        .cta {
          text-align: center;
        }

        .cta h2 {
          margin-bottom: var(--spacing-md);
        }

        .cta p {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-lg);
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
