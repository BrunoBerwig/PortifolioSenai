import React from 'react';
import BackgroundWeb from '../components/BackgroundWeb';
import ThemeToggle from '../components/ThemeToggle';
import './Sobre.css';

const Sobre = ({ theme, toggleTheme }) => {
  return (
    <div className={`sobre-container ${theme}`}>
      {/* Fundo com partículas */}
      <BackgroundWeb theme={theme} />

      {/* Botão de tema */}
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />

      {/* Conteúdo principal */}
      <div className="content">
        <img src="/assets/minha-foto.jpg" alt="Foto da equipe" className="profile-img" />

        <h1>Sobre o Projeto</h1>

        <section>
          <h2>👨‍💻 Quem desenvolveu</h2>
          <p>
            Projeto desenvolvido por <strong>Bruno Berwig</strong>, da turma de <strong>Desenvolvimento de Sistemas</strong> — SENAI [Unidade Exemplo].
          </p>
        </section>

        <section>
          <h2>🚀 Por que criamos?</h2>
          <p>
            Criamos este projeto com o objetivo de aplicar na prática o que aprendemos no curso,
            desenvolvendo uma aplicação com React, foco em design moderno, responsividade e boa experiência de usuário.
          </p>
        </section>

        <section>
          <h2>🛠️ Tecnologias utilizadas</h2>
          <ul>
            <li>React.js</li>
            <li>React Router DOM</li>
            <li>JavaScript ES6+</li>
            <li>CSS3</li>
            <li>tsparticles</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
