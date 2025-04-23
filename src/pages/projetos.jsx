import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import './Projetos.css';

const Projetos = ({ theme }) => {
  const [text, setText] = useState("");
  const fullText = `Projetos: \n1. BreakOut \n2. T-Rex Jump \n3. Portifolio \n
  4.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`projetos-container ${theme}`}>

      {/* Terminal */}
      <div className="terminal">
        <div className="terminal-line">
          <span className="prompt">bruno@dev:~$</span> cat projetos-info.txt
        </div>

        <div className="terminal-output">
          {text}
        </div>

        <div className="terminal-line">
          <span className="prompt">bruno@dev:~$</span>
          <span className="blinking-cursor">|</span>
        </div>

        <div className="links">
          <Link to="https://github.com/BrunoBerwig/ProvaPOO" className="btn-github" target="_blank">
           BreakOut
          </Link>
          <Link to="https://github.com/BrunoBerwig/ProvaPOO" className="btn-github" target="_blank">
          T-Rex jump
          </Link>
          <Link to="https://github.com/BrunoBerwig/api-tarefas" className="btn-github" target="_blank">
            Portifolio
          </Link>
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

export default Projetos;
