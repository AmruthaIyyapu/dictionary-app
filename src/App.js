import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="mt-5 pt-5">Dictionary</h1>
          <Dictionary defaultKeyword="sunset" />
        </header>

        <footer>
          This website is coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/72624-amrutha-iyyapu"
            target="_blank"
            rel="noreferrer"
          >
            <em>Amrutha Iyyapu</em>
          </a>{" "}
          and is open sourced at{" "}
          <a
            href="https://github.com/AmruthaIyyapu/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            <em>Github</em>
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
