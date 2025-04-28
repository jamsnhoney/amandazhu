import './App.css';
import { Routes, Route } from "react-router-dom";

// pages
import Homepage from './pages/Homepage';
import Extracurriculars from './pages/Extracurriculars';
import Bioinformatics from './pages/Bioinformatics';
import DesignStuffPage from './pages/DesignStuffPage'
// import GraphicIllustrationPage from './pages/GraphicIllustration';
import HackathonsPage from './pages/Hackathons';
import Contactpage from './pages/ContactPage'

// hackathon page 
import HacksPage from './pages/HacksPage';

// components
import Navbar from './components/Navbar';
import Homepage2 from './components/Homepage2.js'
import Banner1 from './components/Banner1'
import Footer from './components/Footer';


// main app
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
                <Homepage2 />
                <Banner1 />
                <Extracurriculars />
                <Footer/>
              </>
            }
          />
          <Route
            path="/bioinformatics"
            element={
              <>
                <Bioinformatics/>
                <HacksPage/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/design"
            element={
              <>
                <DesignStuffPage/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/extracurriculars"
            element={
              <>
                <HackathonsPage/>
                <Footer/>
              </>
            }
          />

          <Route
            path="/contact"
            element={ <>
              <Contactpage/>
              <Footer/>
            </>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
