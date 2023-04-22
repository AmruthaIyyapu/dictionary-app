import React from "react";
import "./Result.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <span>Example: </span>
        {props.example}
      </div>
    );
  } else {
    return null;
  }
}
