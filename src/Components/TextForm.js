import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked by Aniket" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChnage = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    
    const [text, setText] = useState("");
    return (
        <>
        <div className='container'>
            <form>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleUpClick }>Convert to Uppercase</button>
            </form>
        </div>
        <div className="conatiner my-2">
            <h1>your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
        </div>
        </>
    )
}
