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
      </div>
    </div>
  );
}

export default App;
