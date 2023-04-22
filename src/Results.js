import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>

        <div className="meaning">
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
