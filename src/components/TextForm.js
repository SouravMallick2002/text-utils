import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert('Text converted to uppercase', 'success');
};

  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted text to lowercase!", "success");
  };

  const handleInitialClick = () => {
    let newText = capitalizeFirstLetterEachWord(Text);
    setText(newText);
    props.showAlert("Capitalized first letter in the text!", "success");
  };

  // Function to capitalize the first letter of each word
  const capitalizeFirstLetterEachWord = (text) => {
    return text
      .split(" ") // Split the text into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words back into a string
  };

  const handleCopy = () => {
    var Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert("Copied!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared Text!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.Mode === 'dark' ? 'white' : 'black',}}>
        <div className="mb-3" >
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.Mode === "dark" ? "grey" : "white",
              color:props.Mode === 'dark' ? 'white' : 'black'
            }}
          ></textarea>
        </div>
        <div className="row">
          <div className="col-md-2">
            <button
              className="btn btn-outline-primary"
              onClick={handleUpClick}
              style={{ fontSize: "14px" }}
            >
              CONVERT TO UPPERCASE
            </button>
          </div>

          <div className="col-md-2">
            <button
              className="btn btn-outline-primary"
              onClick={handleLoClick}
              style={{ fontSize: "14px" }}
            >
              convert to lowercase
            </button>
          </div>

          <div className="col-md-2">
            <button
              className="btn btn-outline-primary"
              onClick={handleInitialClick}
              style={{ fontSize: "14px" }}
            >
              Capitalize First Letter
            </button>
          </div>

          <div className="col-md-2">
            <button
              className="btn btn-outline-primary"
              onClick={handleCopy}
              style={{ fontSize: "14px" }}
            >
              Copy Text
            </button>
          </div>

          <div className="col-md-2">
            <button
              className="btn btn-outline-danger"
              onClick={handleClearClick}
            >
              Clear Text
            </button>
          </div>


        </div>
      </div>

      <div className="container my-3" style={{color:props.Mode === 'dark' ? 'white' : 'black',}}>
        <h2>Your text summary</h2>
        <p>
          The text contains{" "}
          {Text.split(/\s+/).filter((word) => word.length > 0).length} words and{" "}
          {Text.length} characters
        </p>

        <p>
          This might take {0.008 * Text.split(" ").length} minutes to read it.
        </p>
        <h2 className="my-2">Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Insert heading here",
};
