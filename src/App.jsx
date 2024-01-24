import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Bio from './pages/bio/Bio';
import Media from './pages/media/Media';
import Annchante from './pages/annchante/Annchante';
import Donna from './pages/donna/Donna';
import Contact from './pages/contact/Contact';

function App() {

  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bio" element={<Bio />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/annchante" element={<Annchante />}/>
          <Route exact path='/donna' element={<Donna />}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
