import logo from './logo.svg';
import './App.css';

function App() {
  const varParagraph = "Petit test de paragraphe afin de tester la variable injectée dans le code"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello la piscine</h1>
        <p>
          {varParagraph}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
