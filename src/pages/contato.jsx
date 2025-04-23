import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { useNavigate } from 'react-router-dom';
import './Contato.css';

const Contato = ({ toggleTheme, theme }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navega de volta para a página inicial
  };

  return (
    <div className={`contato-container ${theme}`}>
      {/* Conteúdo de contato */}
      <div className="content">
        <h1>Contato</h1>

        <p>Disponível para projetos e novas oportunidades!</p>

        <div className="contact-details">
          <p>Email: brunoberwig@gmail.com</p>
          <p>Telefone: (71) 99376-2426</p>
          <p>GitHub: <a href="https://github.com/BrunoBerwig" target="_blank" rel="noopener noreferrer">github.com/BrunoSouzaBerwig</a></p>
        </div>

        {/* Botão de Voltar */}
        <button onClick={handleGoBack} className="back-button">Voltar para Home</button>
      </div>

      {/* Formas no fundo */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="shape shape4"></div>
      <div className="shape shape5"></div>
      <div className="particles"></div>
    </div>
  );
};

export default Contato;
