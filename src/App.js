import logo from './logo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to the Vertoal App.
        </p>
                <a
                    className="App-link"
                    href="https://vertoal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn more about Vetoal
        </a>
            </header>
        </div>
    );
}

export default App;
