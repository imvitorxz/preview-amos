import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS
import Header from './Components/Header';

// PAGES
import Home from './Pages/Home';
import Conversas from './Pages/Conversas';
import Usuario from './Pages/Usuario';
import Privacidade from './Pages/Privacidade';
import Sobre from './Pages/Sobre';

function App() {

  document.title = 'Amós - Home';

  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conversas" element={<Conversas />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
