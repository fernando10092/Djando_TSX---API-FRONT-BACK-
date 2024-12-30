import './App.css';
import chamada from './scripts/api';

function App() {
  return (
    <div>
      <h1>Formulário de Envio</h1>
      <form onSubmit={chamada}>
        <label>Nome:</label>
        <br />
        <input name="nomehtml" type="text" placeholder="Nome..." />
        <br />
        <label>Sobrenome:</label>
        <br />
        <input name="sobrenomehtml" type="text" placeholder="Sobrenome..." />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
