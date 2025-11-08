import React, { useState } from 'react';

function CampoTexto()
{
    const [texto, setTexto] = useState('');

  return (
    <div className="campo-texto">
      <h3>Digite algo:</h3>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Você digitou: {texto}</p>
    </div>
  );
}

export default CampoTexto;