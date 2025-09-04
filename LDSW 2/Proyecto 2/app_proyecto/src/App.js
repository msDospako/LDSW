import logo from './logo.svg';
import './App.css';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Acceso al sistema de inventario 22 Hermanos 
        </p>
        
        < Component />
      </header>
    </div>
  );
}

export default App;
