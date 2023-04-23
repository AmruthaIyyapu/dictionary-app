import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photo) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photo.map(function (image, index) {
            return (
              <div className="col-3" key={index}>
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    className="img-fluid"
                    alt=""
                  ></img>
                </a>
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
