import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {currentTheme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
