import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Repertoire from './pages/Repertoire'
import Media from './pages/Media'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/repertoire" element={<Repertoire />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  )
}

export default App
