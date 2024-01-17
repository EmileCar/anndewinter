import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/Home';
import Bio from './pages/bio/Bio';
import Media from './pages/media/Media';

function App() {

  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bio" element={<Bio />} />
          <Route exact path="/media" element={<Media />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
