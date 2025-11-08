import Mensagem from './components/Mensage';
import Contador from './components/Contador';
import ListaLivros from './components/ListaLivros';
import CampoTexto from './components/CampoTexto';
import './style.css';

function App() 
{

  return (
    <div className="container">
     
      <div className='mensage'>
      <Mensagem nome="João" />
      </div>

      
      <div className="contador">

        <h3>Contador</h3>
        <Contador/>

      </div>

      <div className="livros">
        
        <h3>Meus Livros:</h3>
        <ListaLivros/>

      </div>

    <CampoTexto/>

    
    </div>
  );
}

export default App;
