import React, { useState } from 'react';
import './Projeto.css';

function Projeto() {
  const [mostrarVideo, setMostrarVideo] = useState(false);

  return (
    <div className="projeto">
      <h2>Nosso Projeto</h2>
      <p><strong>Problema:</strong> Descreve o problema que o projeto resolve.</p>
      <p><strong>Diferencial:</strong> O que torna esse projeto único.</p>
      <p><strong>Público-alvo:</strong> Jovens, estudantes, etc.</p>

      <div className="midia">
        <img src="/assets/prototipo.png" alt="Protótipo" />
        <button onClick={() => setMostrarVideo(!mostrarVideo)}>
          {mostrarVideo ? 'Esconder Vídeo' : 'Mostrar Vídeo'}
        </button>
        {mostrarVideo && (
          <video width="320" height="240" controls>
            <source src="/assets/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        )}
      </div>

      <a href="/assets/relatorio.pdf" target="_blank" rel="noopener noreferrer">
        📄 Ver Relatório PDF
      </a>
      <br />
      <a href="https://link-para-apresentacao" target="_blank" rel="noopener noreferrer">
        🔗 Ver Apresentação Online
      </a>
    </div>
  );
}

export default Projeto;
