import React,{useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick=()=>{
        // console.log("UpperCase was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase ","success")
    }
    const handleLoClick=()=>{
        // console.log("LowerCase was clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to LowerCase ","success")
    }
    const handleClearClick=()=>{
        // console.log("Clear was clicked "+text);
        let newText="";
        setText(newText);
        props.showAlert("Text was cleared ","success")
    }
    

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
   
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>   
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange} 
          id="myBox"
          rows="8"
          style={{backgroundColor:props.mode=== 'dark'?'#0d032f':'white' ,
          color:props.mode === 'dark'?'white':'black'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode=== 'dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charachter </p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
