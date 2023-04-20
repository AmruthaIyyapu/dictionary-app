import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(word);
  }

  function handleChange(event) {
    let userInputWord = event.target.value;
    setWord(userInputWord);
  }
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
        <input type="submit" value="SEARCH" className="m-5 btn btn-light p-3" />
      </form>
    </div>
  );
}
