import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase", "Success")
      }
      
      const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lowercase", "Success")
      }
      
      const handleCopy = () => {
        console.log('I am Copy');
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied!", "Success")
      }
      
      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been erased!", "Success")
      }
      
      const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
      }
      
      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaker is on!", "Success")
    }

    const [text, setText] = useState("");
    // text = ("New Text")     wrong way to change the value 
    // setText = ("New text");     // correct way to change the value
  return (
    <>
    <div className="container" style = {{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          onChange={handleOnChange}
          style={{backgroundColor : props.mode === 'dark'?'grey':'white', color : props.mode === 'dark'?'white':'#042743'}}
          value={text}
          rows="8"
          ></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
    </div>
    <div className="container my-2" style = {{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preivew</h3>
        <p>{text.length > 0? text : "Enter text to preview"}</p>
    </div>
    </>
  );
} 
