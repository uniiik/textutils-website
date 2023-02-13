import React from "react";
import { useState } from "react";
/*we have imported usestate in this file  */

export default function TextForm() {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLowClick = () => {
    let newtext2 = text.toLowerCase();
    setText(newtext2);
  };
  const handleClearClick = () => {
    let newtext2 = "";
    setText(newtext2);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleRemove = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(
    "" /*what we want to print inside the text box as default value*/
  ); /*text mein hamari dedfault value jo likhi hogi and setText ek function h that we will be using to update out text */
  //text = "new text wrong one";
  // {
  //   /*wrong way to change state or value of text */
  // }
  // setText("new text here");
  // {
  //   /*correct way to change state*/
  // }
  return (
    <>
      <div>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
          {/*we have used text use state in this text area*/}
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to Uppercase
        </button>

        <button className="btn btn-primary   mx-2" onClick={handleLowClick}>
          convert to lowercase
        </button>

        <button className="btn btn-primary   mx-2" onClick={handleClearClick}>
          clear text
        </button>
        <button className="btn btn-primary   mx-2" onClick={handleCopy}>
          copy text
        </button>
        <button className="btn btn-primary   mx-2" onClick={handleRemove}>
          Remove extra spaces
        </button>
      </div>

      <div className="container  my-3">
        <h2>Your Text Summary Here</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p> {text.split(" ").length * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p> {text}</p>
      </div>
    </>
  );
}
