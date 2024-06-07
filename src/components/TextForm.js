import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Success", "Text converted to upper case.", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnRemove = () => {
    setText("");
    props.showAlert("Success", "Text area cleared.", "success");
  };
  const handleOnLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Success", "Text converted to lower case.", "success");
  };
  const handleCopyTextClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Success", "Text copied to clipboard.", "success");
  };

  const handleRmExtraSpace = () => {
    let filteredText = text.split(/[ ]+/); // Regex exp to find 1 or more spaces - /[ ]+/
    setText(filteredText.join(" "));
    props.showAlert("Success", "Extra spaces has been removed.", "success");
  };

  
  return (
    <>
      <div
        className="mb-3"
        // style={{ color: props.mode === "light" ? "black" : "white" }}
        style={{ color: props.themeColor.color}}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control mt-3"
          id="exampleFormControlTextarea1"
          rows={8}
          value={text}
          onChange={handleOnChange}
          placeholder="Write your text here..."
          style={{
            // backgroundColor: props.mode === "dark" ? "#2d3436" : "white",
            // color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.themeColor.textAreaBg,
            color: props.themeColor.color,
          }}
        />
        <div className="d-flex justify-content-start">
          <button className="btn btn-primary mt-3 " onClick={handleOnClick}>
            Convert Uppercase
          </button>
          <button
            className="btn btn-primary  mt-3 mx-2"
            onClick={handleOnLower}
          >
            Convert Lowercase
          </button>
          <button
            className="btn btn-primary mt-3 "
            onClick={handleCopyTextClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={handleRmExtraSpace}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-danger mt-3" onClick={handleOnRemove}>
            Clear
          </button>
        </div>
        <div className="mt-3 border border-5 border-primary-subtle rounded p-2 overflow-x-auto">
          <h3>Text Summary</h3>
          <p>
            <code>{(text.length === 0)? 0:text.trim().split(' ').length}</code>
            &emsp;Words{" "}
            <code>
              &emsp;&emsp;&emsp;
              {text.length}{" "}
            </code>{" "}
            &emsp; Characters
          </p>
          <p>
            <code>
              {Math.round(0.008 * text.trim().split(" ").length * 100) / 100}
            </code>{" "}
            Minutes read
          </p>
          <h4>Preview</h4>
          <p style={{ color: props.mode === "dark" ? "#dfe6e9" : "#2c3e50" }}>
            {text.length === 0
              ? "Enter some text to see preview here..."
              : text}
          </p>
        </div>
      </div>
    </>
  );
}
