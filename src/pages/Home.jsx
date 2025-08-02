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
      description: "Brian Stacey Memorial Trust 2011",
      detail: "Enabling advanced studies with renowned conductors"
    },
    {
      icon: <Users size={32} />,
      title: "Opera Experience",
      description: "Royal Ballet Covent Garden",
      detail: "Assistant conductor at world-renowned opera house"
    },
    {
      icon: <Calendar size={32} />,
      title: "Symphony Debut",
      description: "Adelaide Symphony Orchestra",
      detail: "Recent conducting debut marking career milestone"
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
                James Pratt's musical journey began as a boy chorister in Adelaide, developing 
                into an accomplished conductor with international experience. As Music Director 
                of Perth Symphonic Chorus, he brings exceptional artistry and technical expertise 
                to Australia's classical music scene.
              </p>
              <p>
                With assistant conductor experience at Royal Ballet Covent Garden, training in 
                Hamburg, and his recent debut with Adelaide Symphony Orchestra, James combines 
                European conducting traditions with deep musical scholarship and inspiring leadership.
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
              <div className="image-container">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQEnpWqLoGfFZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716263189232?e=1756944000&v=beta&t=aok7lUIcmhweVOZrEa82qej9xs60MERhmvzjLkaAZU0" 
                  alt="James Pratt - Professional Portrait"
                  className="profile-photo"
                />
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
              <h3>International Experience</h3>
              <p className="project-role">Assistant Conductor & Studies</p>
              <p>
                Gained invaluable experience as assistant conductor at Royal Ballet Covent Garden 
                and through conducting studies in Hamburg, Germany. Also conducted Phantom of the 
                Opera tour, developing expertise across operatic and theatrical repertoire.
              </p>
              <Link to="/about" className="btn btn-outline">
                Read Biography
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

        .image-container {
          border-radius: var(--border-radius);
          overflow: hidden;
          aspect-ratio: 1;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          margin: 0 auto;
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
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
