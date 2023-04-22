import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example";
import "./Result.css";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="partofspeech">{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        <p>
          <span>Meaning: </span>
          {props.meaning.definition}
        </p>
        <Example example={props.meaning.example} />
        {/* <p>{props.meaning.example}</p> */}
        <Synonyms synonym={props.meaning.synonyms} />

        <hr />
      </div>
    </div>
  );
}
