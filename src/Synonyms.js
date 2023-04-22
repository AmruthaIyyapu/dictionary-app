import React from "react";
import "./Result.css";

export default function Synonyms(props) {
  if (props.synonym) {
    return (
      <div className="Synonyms">
        <span>Synonyms: </span>
        <ul>
          {props.synonym.map(function (synonym, index) {
            return <li key={index}> {synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
