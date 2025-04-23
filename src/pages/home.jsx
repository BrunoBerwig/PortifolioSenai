import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import './Home.css';

const Home = ({ toggleTheme, theme }) => {
  const [text, setText] = useState("");
  const fullText = `Brruno de Souza Berwig, estudante de Desenvolvimento de Sistemas no SENAI. 
  `;
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={`home-container ${theme}`}>
      <div className="content">
        <img
          src="https://avatars.githubusercontent.com/u/170362084?v=4"
          alt="Minha foto"
          className="profile-img"
        />

        <div className="terminal">
          <div className="terminal-line">
            <span className="prompt">bruno@dev:~$</span> {text}
          </div>
          <div className="terminal-line">
            <span className="prompt">bruno@dev:~$</span>
            <span className="blinking-cursor">|</span>
          </div>
        </div>

        <div className="nav-links">
          <Link to="/sobre">Sobre</Link>
          <Link to="/projeto">Projetos</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </div>
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="shape shape4"></div>
      <div className="shape shape5"></div>
      <div className="particles"></div>
    </div>
  );
};

export default Home;
