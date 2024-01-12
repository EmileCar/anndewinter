import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
