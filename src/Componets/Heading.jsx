import React from "react";
import  "./App.css"

export default function Heading(props) {
  return (
    <div className="container headings">
      <h2 className="text-center">{props.text}</h2>
      <h4 className="text-center">
        I Design Beautiful Things, And I Love What I Do.
      </h4>
    </div>
  );
}
