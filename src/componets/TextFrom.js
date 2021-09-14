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
        navigator.clipboard.writeText(text);
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
                <button disabled={text.length === 0} className="btn btn-primary  mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>

                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>

                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleDeClick}>Clear Text</button>

                <button disabled={text.length === 0} className="btn btn-light mx-1 my-1" onClick={handleCoClick}>Copy Text</button>

                <button disabled={text.length === 0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and charachers {text.length}</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}