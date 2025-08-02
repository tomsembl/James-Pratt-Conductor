import { motion } from 'framer-motion'
import { Award, Music, GraduationCap, Users, Calendar, Star } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      title: "Music Director",
      organization: "Perth Symphonic Chorus",
      period: "Current",
      description: "Leading Western Australia's premier symphonic chorus in performances with the West Australian Symphony Orchestra and independent concerts. Responsible for artistic direction, repertoire selection, and choir development.",
      highlights: ["Regular collaborations with WASO", "Major choral-orchestral works", "Community engagement programs"]
    },
    {
      title: "Conductor",
      organization: "State Opera of South Australia",
      period: "Guest Engagements",
      description: "Regular conducting engagements with State Opera, working with international artists and diverse operatic repertoire from classical to contemporary works.",
      highlights: ["International artist collaborations", "Diverse operatic repertoire", "Classical and contemporary works"]
    },
    {
      title: "Specialist Conductor",
      organization: "Major Choral Works",
      period: "Ongoing",
      description: "Renowned expertise in conducting major choral-orchestral masterworks, particularly Verdi's Requiem and other significant classical repertoire.",
      highlights: ["Verdi Requiem specialist", "Major orchestral works", "Choral-symphonic repertoire"]
    }
  ]

  const education = [
    {
      degree: "Professional Conducting Studies",
      institution: "Advanced Musical Training",
      specialization: "Orchestral and Choral Conducting"
    }
  ]

  const awards = [
    {
      year: "2011",
      award: "Stacey Trust Award",
      description: "Recognized for exceptional musical leadership and contribution to the classical music community.",
      significance: "This prestigious award acknowledges outstanding achievement in musical performance and leadership."
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
              <div className="image-placeholder">
                <Music size={64} />
                <p>Professional Portrait</p>
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
                James Pratt has established himself as one of Western Australia's most 
                respected conductors, currently serving as Music Director of the Perth 
                Symphonic Chorus. His leadership combines deep musical scholarship with 
                inspiring artistic vision, creating memorable performances that resonate 
                with both performers and audiences.
              </p>
              <p>
                With extensive experience in operatic conducting through his work with 
                State Opera of South Australia, James brings versatility and expertise 
                to a wide range of musical genres. His particular specialization in major 
                choral-orchestral works, including Verdi's Requiem, has earned him recognition 
                as a leading interpreter of the great classical masterworks.
              </p>
              <p>
                The recipient of the prestigious Stacey Trust Award in 2011, James continues 
                to contribute significantly to Australia's classical music landscape through 
                his conducting, leadership, and commitment to musical excellence.
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
