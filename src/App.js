import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Projetos from './pages/projetos';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} theme={theme} />} />
        <Route path="/sobre" element={<Sobre theme={theme} />} />
        <Route path="/contato" element={<Contato theme={theme} />} />
        <Route path="/projeto" element={<Projetos theme={theme} />} />
      </Routes>
    </Router>
  );
}

export default App;
