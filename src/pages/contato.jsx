import React, { useState } from 'react';
import './Contato.css';

function Contato() {
  const [formData, setFormData] = useState({ nome: '', mensagem: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contato">
      <h2>Contato</h2>
      <p>Email institucional: contato@senaiprojeto.com.br</p>
      <p>
        Redes Sociais: 
        <a href="https://instagram.com/aluno" target="_blank" rel="noreferrer"> Instagram</a>, 
        <a href="https://linkedin.com/in/aluno" target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
      <form>
        <input name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleChange} />
        <textarea name="mensagem" placeholder="Mensagem" value={formData.mensagem} onChange={handleChange}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
