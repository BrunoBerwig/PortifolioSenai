import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { Link } from 'react-router-dom';
import './Sobre.css';

const Sobre = ({ toggleTheme, theme }) => {
  return (
    <div className={`sobre-container ${theme}`}>

      <div className="terminal">
        <div className="terminal-line">
          <span className="prompt">bruno@dev:~$</span> cat sobre-mim.txt
        </div>

        <div className="terminal-output">
{`Nome: Bruno de Souza Berwig
Idade: 18 anos
Estudante: Desenvolvimento de Sistemas - SENAI
Stack: [React, JavaScript, Node.js, CSS, HTML]
GitHub: https://github.com/brunoberwig
LinkedIn: https://www.linkedin.com/in/brunoberwig`}
        </div>

        <div className="terminal-line">
          <span className="prompt">bruno@dev:~$</span>
          <span className="blinking-cursor">|</span>
        </div>

        <Link to="/" className="back-home">← Voltar para o Início</Link>
      </div>

      {/* Background shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
    </div>
  );
};

export default Sobre;
