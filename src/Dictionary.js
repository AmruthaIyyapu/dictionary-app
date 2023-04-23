import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [loaded, setLoaded] = useState(false);
  let [wordInfo, setWordInfo] = useState(null);
  let [photo, setPhoto] = useState();

  function handleResponse(response) {
    // console.log(response.data.meanings[1].definition);
    setWordInfo(response.data);
  }

  function handleImageResponse(response) {
    // console.log(response.data);
    setPhoto(response.data.photos);
  }

  function search() {
    const apiKey = "908boa3025t814b4e4df14078410efc3";
    // https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    let userInputWord = event.target.value;
    setWord(userInputWord);
  }

  function Load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary container">
        <form onSubmit={handleSubmit}>
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
        <Photos photo={photo} />
      </div>
    );
  } else {
    Load();
    return "Loading...";
  }
}
