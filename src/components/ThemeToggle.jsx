import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {currentTheme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
    </button>
  );
};

export default ThemeToggle;
