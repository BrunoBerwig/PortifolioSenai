import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import './Home.css';

const Home = ({ toggleTheme, theme }) => {
  return (
    <div className={`home-container ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      
      {/* Formas geométricas no fundo */}
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

      <div className="content">
        <img src="https://avatars.githubusercontent.com/u/170362084?v=4" alt="Minha foto" className="profile-img" />

        <h1>Bruno de Souza Berwig</h1>

        <p className="sobre-mim">
         Estudante de Desenvolvimento de Sistemas no SENAI e freelancer.
        </p>

        <div className="nav-links">
          <Link to="/sobre">Sobre</Link>
          <Link to="/projeto">Projetos</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
