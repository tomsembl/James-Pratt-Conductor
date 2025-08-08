import { motion } from 'framer-motion'

const BioContent = () => {
  return (
    <motion.div 
      className="bio-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bio-header">
        <img 
          src="/images/James_Pro_Portrait.jpg" 
          alt="James Pratt - Professional Portrait"
          className="bio-photo"
        />
        <div className="bio-intro">
          <h3>James Pratt</h3>
          <p className="bio-title">Professional Conductor & Musical Director</p>
        </div>
      </div>
      
      <div className="bio-content-text">
        <section>
          <h4>Distinguished Musical Leadership</h4>
          <p>
            James Pratt's musical journey began as a boy chorister in Adelaide, developing 
            into an accomplished conductor with international experience. As Music Director 
            of Perth Symphonic Chorus, he brings exceptional artistry and technical expertise 
            to Australia's classical music scene.
          </p>
        </section>
        
        <section>
          <h4>International Experience</h4>
          <p>
            With assistant conductor experience at Royal Ballet Covent Garden, training in 
            Hamburg, and his recent debut with Adelaide Symphony Orchestra, James combines 
            European conducting traditions with deep musical scholarship and inspiring leadership.
          </p>
        </section>
        
        <section>
          <h4>Current Role</h4>
          <p>
            As Music Director of Perth Symphonic Chorus, James leads one of Western Australia's 
            premier choral ensembles, bringing passion and precision to orchestral, operatic, 
            and choral performances across Australia.
          </p>
        </section>
        
        <section>
          <h4>Awards & Recognition</h4>
          <p>
            Winner of the Brian Stacey Memorial Trust 2011, enabling advanced studies with 
            renowned conductors and furthering his development as a musical leader.
          </p>
        </section>
        
        <section>
          <h4>Recent Performances</h4>
          <div className="bio-images">
            <div className="bio-image-item">
              <img src="/images/Bach_St_Matthew_Passion_Wide.jpg" alt="Bach St Matthew Passion Wide" />
              <p>Conducting Bach's St Matthew Passion - Wide view</p>
            </div>
            <div className="bio-image-item">
              <img src="/images/James_Bowing_Messiah_24.jpg" alt="Messiah 2024" />
              <p>After Handel's Messiah 2024 performance</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default BioContent
