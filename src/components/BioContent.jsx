import { motion } from 'framer-motion'
import { getAssetPath } from '../utils/helpers'

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
          src={getAssetPath("/images/James_Pro_Portrait.jpg")} 
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
          <h4>Professional Recognition</h4>
          <p>
            Winner of the Brian Stacey Emerging Conductors Award (Australia), James has conducted successful theatrical and concert performances in Australia and internationally. The first person to graduate with a Master's Degree in Orchestral Conducting from the University of Adelaide, James won major prizes at the Edouard Toldra Conducting Competition with the Chamber Orchestra of Catalonia in 2013.
          </p>
        </section>
        
        <section>
          <h4>International Mentorship & Experience</h4>
          <p>
            He maintains a close friendship with mentor Maestro Donato Renzetti, having assisted the maestro for opera and symphonic concerts in Italy. James was offered a position as cover conductor at the Royal Ballet, Covent Garden under Barry Wordsworth, working on Romeo and Juliet. In 2016, James was invited to work with Maestro Titus Engel at the Impuls Festival, conducting world premieres of new works with the Zafraan Ensemble in Berlin and Dessau.
          </p>
        </section>
        
        <section>
          <h4>Current Appointments</h4>
          <p>
            In 2022 James was appointed as the Music Director for Perth Philharmonic Orchestra and Perth Symphonic Chorus and conducted the following works: Mendelssohn Violin Concerto in E Minor featuring Australian Brandenburg Orchestra Concertmaster Shaun Lee-Chen as soloist, Dvorak Mass in D Major, Brahms' Schicksalslied and Handel's Messiah.
          </p>
        </section>
        
        <section>
          <h4>Opera & Concert Engagements</h4>
          <p>
            In 2023 James was engaged to conduct the following titles with the State Opera of South Australia HMS Pinafore with the Adelaide Symphony, The Sorcerer Big Sing Gala Concert and Trial By Jury Adelaide Fringe Festival. Other engagements in 2023, included the Australian premiere of Invicitus: A Passion, by Howard Goodall, in a program with J.S. Bach's Christ Lag in Todes Banden.
          </p>
          <p>
            In April 2024, James conducted Bach's St Matthew Passion with Perth Symphonic Chorus and Perth Baroque Orchestra, and Handel's Messiah, the final performance at the Perth Concert Hall. Recent concert works include the Fauré Requiem and Debussy's Prélude à l'Après-midi d'un faune.
          </p>
        </section>
        
        <section>
          <h4>Upcoming Performances</h4>
          <p>
            Upcoming performances include the Verdi Requiem with Perth Philharmonic Orchestra (September 2025), Messiah at His Majesty's Theatre (December 2025).
          </p>
        </section>
        
        <section>
          <h4>Performance Gallery</h4>
          <div className="bio-images">
            <div className="bio-image-item">
              <img src={getAssetPath("/images/Bach_St_Matthew_Passion_Wide.jpg")} alt="Bach St Matthew Passion Wide" />
              <p>Conducting Bach's St Matthew Passion with Perth Symphonic Chorus and Perth Baroque Orchestra</p>
            </div>
            <div className="bio-image-item">
              <img src={getAssetPath("/images/James_Bowing_Messiah_24.jpg")} alt="Messiah 2024" />
              <p>After Handel's Messiah 2024 - the final performance at Perth Concert Hall</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default BioContent
