import React, { useState } from 'react'

export default function TextForm(props) {

    const handelUpClick = ()=>{
        //console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
       props.showAlert("CONVERTED TO UPPER CASE ","SUCCESS");
    }

    const handelLoClick = ()=>{
        //console.log("uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("CONVERTED TO LOWER CASE ","SUCCESS");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("EXTRA SPACES WAS REMOVED ","SUCCESS");
    }



    const handelClearClick = ()=>{
        //console.log("uppercase was clicked"+text);
        let newText='';
        setText(newText);
        props.showAlert("Cleared all ","SUCCESS");
    }

    const handelOnChange = (event)=>{
       // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState();
    // text="new text"; wrong way to chage the text value
   // setText(" changed text");
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#0a055e'}}> 
        <h1> {props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#0a055e'}} id="myBox"   rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handelUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handelLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>EXTRA SPACES WAS REMOVED</button>
        <button className="btn btn-primary" onClick={handelClearClick}>Clear</button>
        <div className='container my-4' style={{color:props.mode==='dark'?'white':'#0a055e'}}>
            <h4>SUMMARY OF THE CONTENT</h4>
            {/* <p>Total words are= {text.split(" ").length} and characters are= {text.length} </p>
             <p>Total time to read the word={0.008*text.split(" ").length}min.</p> */}
            <p>{text}</p>
        </div>
    </div>
  )
}





