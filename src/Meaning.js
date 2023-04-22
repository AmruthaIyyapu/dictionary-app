import React from "react";
import "./Result.css";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="partofspeech">{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        <p>{props.meaning.definition}</p>
        <p>{props.meaning.example}</p>
      </div>
    </div>
  );
}
