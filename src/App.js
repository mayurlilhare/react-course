import logo from './logo.svg';
import './App.css';
import AndOr from './module1/And_Or';
import ES6ArrayMethods from './module1/es6ArrayMethods';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      {/* <AndOr/> */}
      <ES6ArrayMethods />
    </div>
  );
}

export default App;
