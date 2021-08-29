import React, { useState } from 'react';

export default function TextFrom(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case !", "success")


    }
    const handleLoClick = () => {
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to lower case !", "success")

    }
    const handleDeClick = () => {
        let newText2 = "";
        setText(newText2);
        props.showAlert("Text Cleared !", "success")

    }

    const handleCoClick = () => {
        var newtext3 = document.getElementById("my-box")
        newtext3.select();
        navigator.clipboard.writeText(newtext3.value);
        props.showAlert("Copied to Clipboard !", "success")

    }

    const handleExtraSpaces = () => {
        let newtext4 = text.split(/[ ]+/);
        setText(newtext4.join(" "))
        props.showAlert("Removed extra spaces !", "success")

    }


    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control " value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="my-box" rows="8"></textarea>
                </div>
                <button className="btn btn-primary  mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-danger mx-1" onClick={handleDeClick}>Clear Text</button>
                <button className="btn btn-light mx-1" onClick={handleCoClick}>Copy Text</button>
                <button className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and charachers {text.length}</p>
                <p>{0.008 * text.split(" ").length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here "}</p>
            </div>
        </>
    )
}
