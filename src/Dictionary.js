import React, { useEffect, useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState();
  let [loaded, setLoaded] = useState(false);
  let [wordInfo, setWordInfo] = useState();

  useEffect(() => {
    setLoaded(false);
  }, [word]);

  function handleResponse(response) {
    // console.log(response.data.meanings[1].definition);

    setWordInfo(response.data);
  }

  function search(event) {
    event.preventDefault();
    setLoaded(true);
    const apiKey = "908boa3025t814b4e4df14078410efc3";
    // https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    let userInputWord = event.target.value;
    setWord(userInputWord);
  }

  if (loaded) {
    return (
      <div className="Dictionary container">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word"
            autoFocus="ON"
            className="w-75"
            onChange={handleChange}
          />
          <input
            type="submit"
            value="SEARCH"
            className="m-5 btn btn-light p-3"
          />
        </form>
        <Results result={wordInfo} />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word"
            autoFocus="ON"
            className="w-75"
            onChange={handleChange}
          />
          <input
            type="submit"
            value="SEARCH"
            className="m-5 btn btn-light p-3"
          />
        </form>
      </div>
    );
  }
}
