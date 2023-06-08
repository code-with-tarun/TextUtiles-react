import React, { useState } from 'react'


export default function TextForm(props) {
    const uppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const font = () => {
        // let fontstyle = document.getElementById("fontstyle");
        font.style.fontFamily = "verdana";
    }
    const clear = () => {
        setText("");
    }
    const lowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const removesymbol = () => {
        setText(text.replaceAll(/[!,@,#,$,%,%,^,&,*,(,),_,-,+,=,:,;,",',<,>,{,},(,),|,`,~,/]/g, ""));
    }
    const change = (e) => {
        setText(e.target.value);
    }
    const [text, setText] = useState("enter the value");
    // setText("my box");
    return (
        <>
            <div className="container">
                <div className="mt-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} id="mybox" rows="8" onChange={change} ></textarea>
                    <button className={'btn btn-dark border mx-4 mt-3'} onClick={uppercase}> change to upper case</button>
                    <button className='btn btn-dark border mx-4  mt-3' onClick={lowercase}> change to upper case</button>
                    <button className='btn btn-dark border mx-4  mt-3' onClick={removesymbol}> remove symbols</button><br></br>
                    <button className='btn btn-dark border mx-4  mt-3' onClick={clear}>clear</button>
                    {/* <button className='btn btn-dark border mx-4  mt-3' onClick={font}>font change</button> */}
                </div>
                <div className="container my-4">
                    <h4>Text summary</h4>
                    <p>words: {text.split(" ").length} and character: {text.length}</p>
                    <h2>tiem duration</h2>
                    <p>{0.008 * text.split(" ").length.toFixed(2)}</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
