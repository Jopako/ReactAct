import React, { useState } from 'react';

function Contador()
{
    const [cont, setContador] = useState(0);

    return  <div className='pANDb'>

            <p>Você clicou {cont} vezes!</p>

            <button onClick={() => setContador(cont + 1)}       >+</button>
            <button onClick={() => setContador(cont - 1)}       >-</button>

            </div>
     

}

export default Contador;