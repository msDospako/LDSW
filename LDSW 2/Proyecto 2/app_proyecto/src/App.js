import logo from './logo.svg';
import './App.css';
import Component from './component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Acceso a plataforma virtual 22 hermanos
        </p>

        <Component />
      </header>
    </div>
  );
}

export default App;