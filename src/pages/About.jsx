import { motion } from 'framer-motion'
import { Award, Music, GraduationCap, Users, Calendar, Star } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      title: "Music Director",
      organization: "Perth Symphonic Chorus",
      period: "Current",
      description: "Leading Western Australia's premier symphonic chorus, known for his innovative programming and collaborative approach with orchestras including the West Australian Symphony Orchestra.",
      highlights: ["Regular collaborations with WASO", "Innovative choral programming", "Community engagement initiatives"]
    },
    {
      title: "Assistant Conductor",
      organization: "Royal Ballet Covent Garden",
      period: "Previous",
      description: "Gained invaluable operatic experience as assistant conductor at one of the world's most prestigious opera houses, working with international artists and classical repertoire.",
      highlights: ["World-class opera experience", "International artist collaborations", "Classical and romantic repertoire"]
    },
    {
      title: "Conductor",
      organization: "Phantom of the Opera Tour",
      period: "Previous",
      description: "Developed expertise in musical theatre conducting, managing the complex demands of long-running theatrical productions and touring logistics.",
      highlights: ["Musical theatre expertise", "Touring production management", "Theatrical conducting skills"]
    },
    {
      title: "Guest Conductor",
      organization: "Adelaide Symphony Orchestra",
      period: "Recent Debut",
      description: "Made conducting debut with the Adelaide Symphony Orchestra, demonstrating versatility across orchestral repertoire and marking a significant career milestone.",
      highlights: ["Orchestral conducting debut", "Professional milestone", "Symphonic repertoire expansion"]
    }
  ]

  const education = [
    {
      degree: "Music Studies",
      institution: "University of Adelaide",
      specialization: "Conducted advanced musical studies"
    },
    {
      degree: "Advanced Conducting Studies",
      institution: "Hamburg, Germany",
      specialization: "European conducting traditions and technique"
    }
  ]

  const awards = [
    {
      year: "2011",
      award: "Brian Stacey Memorial Trust Award",
      description: "Awarded to support advanced conducting studies with mentor Dobbs Franks and opportunities to observe Sir Simon Rattle and other distinguished conductors.",
      significance: "This prestigious award recognizes exceptional musical talent and provides support for advanced study with leading conductors. James used the award to pursue opportunities with renowned maestros and deepen his understanding of conducting technique."
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero bg-gradient">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About James Pratt</h1>
            <p className="hero-subtitle">
              A distinguished conductor bringing passion, precision, and artistic excellence 
              to orchestral, operatic, and choral performances across Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="section biography">
        <div className="container">
          <div className="grid grid-2">
            <motion.div 
              className="bio-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-container">
                <img 
                  src="https://staceytrust.wordpress.com/wp-content/uploads/2018/07/jamespratt.jpg" 
                  alt="James Pratt - Professional Portrait"
                  className="professional-portrait"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="bio-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Musical Leadership Excellence</h2>
              <p>
                James Pratt's musical journey began as a boy treble chorister in Adelaide, 
                where he discovered his lifelong passion for choral music. This early foundation 
                shaped his understanding of vocal artistry and ensemble precision that would 
                later define his conducting career.
              </p>
              <p>
                After completing his studies at the University of Adelaide, James was awarded 
                the prestigious Brian Stacey Award in 2011, which provided him with opportunities 
                to further his conducting studies in Hamburg, Germany. This international experience 
                exposed him to European conducting traditions and refined his technical skills under 
                the mentorship of distinguished maestros.
              </p>
              <p>
                James gained significant opera experience as an assistant conductor at the Royal 
                Ballet Covent Garden in London, where he worked with world-class artists and learned 
                the intricacies of operatic conducting. He further honed his theatrical conducting 
                skills during the Phantom of the Opera tour, developing expertise in musical theatre 
                performance.
              </p>
              <p>
                Most recently, James made his conducting debut with the Adelaide Symphony Orchestra, 
                marking a significant milestone in his career. As Music Director of Perth Symphonic 
                Chorus, he continues to champion choral music while expanding the ensemble's artistic 
                horizons through innovative programming and collaborative performances.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section experience bg-dark">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Professional Experience</h2>
            <p>Current positions and significant conducting engagements</p>
          </motion.div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-item card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <h4 className="text-gold">{exp.organization}</h4>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="highlights">
                  <h5>Key Highlights:</h5>
                  <ul>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section awards">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Awards & Recognition</h2>
            <p>Acknowledgments of excellence in musical leadership</p>
          </motion.div>

          {awards.map((award, index) => (
            <motion.div 
              key={index}
              className="award-item card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="award-content">
                <div className="award-icon">
                  <Award size={48} />
                </div>
                <div className="award-details">
                  <h3>{award.award}</h3>
                  <span className="award-year">{award.year}</span>
                  <p className="award-description">{award.description}</p>
                  <p className="award-significance">{award.significance}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Musical Philosophy */}
      <section className="section philosophy bg-gradient">
        <div className="container">
          <motion.div 
            className="philosophy-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Musical Philosophy</h2>
            <div className="philosophy-text">
              <p>
                "Music has the power to unite, inspire, and transform. As a conductor, 
                I believe in creating an environment where musicians can achieve their 
                highest artistic potential while serving the greater vision of the work."
              </p>
              <p>
                "Whether leading a symphonic chorus, conducting opera, or interpreting 
                the great masterworks, my approach centers on deep musical understanding, 
                clear communication, and fostering the collaborative spirit that makes 
                great music possible."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          padding: 120px 0 var(--spacing-2xl);
          text-align: center;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .bio-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .image-container {
          border-radius: var(--border-radius);
          overflow: hidden;
          aspect-ratio: 3/4;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .professional-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .experience-item {
          background: var(--background-light);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-sm);
        }

        .period {
          background: var(--accent-color);
          color: var(--text-dark);
          padding: 0.25rem 0.5rem;
          border-radius: var(--border-radius);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .experience-description {
          margin-bottom: var(--spacing-sm);
        }

        .highlights h5 {
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }

        .highlights ul {
          padding-left: 1.5rem;
        }

        .highlights li {
          margin-bottom: 0.25rem;
        }

        .award-item {
          max-width: 800px;
          margin: 0 auto;
        }

        .award-content {
          display: flex;
          gap: var(--spacing-lg);
          align-items: flex-start;
        }

        .award-icon {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .award-details h3 {
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }

        .award-year {
          background: var(--accent-color);
          color: var(--text-dark);
          padding: 0.25rem 0.5rem;
          border-radius: var(--border-radius);
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: var(--spacing-sm);
        }

        .award-description {
          margin-bottom: var(--spacing-sm);
        }

        .award-significance {
          font-style: italic;
          opacity: 0.8;
        }

        .philosophy-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .philosophy-text {
          font-size: 1.1rem;
        }

        .philosophy-text p {
          font-style: italic;
          margin-bottom: var(--spacing-lg);
          position: relative;
        }

        .philosophy-text p:before {
          content: '"';
          font-size: 3rem;
          color: var(--accent-color);
          position: absolute;
          left: -2rem;
          top: -1rem;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .experience-header {
            flex-direction: column;
            gap: var(--spacing-xs);
          }

          .award-content {
            flex-direction: column;
            text-align: center;
          }

          .philosophy-text p:before {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default About
