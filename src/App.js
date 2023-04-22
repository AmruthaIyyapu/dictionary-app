import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="mt-5 pt-5">Dictionary</h1>
          <Dictionary />
        </header>

        <footer>
          This website is coded by Amrutha Iyyapu and is open sourced at
          <a
            href="https://github.com/AmruthaIyyapu/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
