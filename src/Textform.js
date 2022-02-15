import React from 'react';
import { useState } from 'react';

export default function Textform(props) {

    const [text, setText] = useState("");
    // const defaultText= "Enter text here";
    // const [numOfChar, setNumOfChar] = useState(defaultText.length);
    // const [numOfWord, setNumOfWord] = useState(defaultText.match(/(\w+)/g).length);

    function handleUpperCase(){

        console.log("Uppercase was clicked");
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);  
    }

    function handleLowerCase(){
        console.log("lowercase is clicked");
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);

    }

    function handleClearText(){
        console.log("clear text is clicked");
        
        setText("");

    }

    function handleExtraSpaces(){

        console.log("Extra spaces clicked");

        let newText = text.split(/[ ]+/);

        setText(newText.join(" "));

    }


    function handleCopy(){

        console.log("handle copy clicked");

        var copyText = text;
        // copyText.select();

        navigator.clipboard.writeText(copyText);
    }

    // function handleDownload(){
    //     console.log("download text is clicked");
        
    //         var textFileAsBlob = new Blob(text, {type:'text/plain'}); 
    // var downloadLink = <a>Download File</a>;
    // downloadLink.download = "Example.txt";
    // // downloadLink.innerHTML = "Download File";
    // if (window.webkitURL != null)
    // {
    //     // Chrome allows the link to be clicked
    //     // without actually adding it to the DOM.
    //     downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    // }
    // // else
    // // {
    // //     // Firefox requires the link to be added to the DOM
    // //     // before it can be clicked.
    // //     downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    // //     downloadLink.onclick = destroyClickedElement;
    // //     downloadLink.style.display = "none";
    // //     document.body.appendChild(downloadLink);
    // // }

    // downloadLink.click();

    // }
    

    function handleOnChange(event){
        console.log("text changing");

        setText(event.target.value);
        console.log(text);
        // if(text != ""){
        //     setNumOfChar(text.length);
        //     setNumOfWord(text.match(/(\w+)/g).length);
        // }
        // else{
        //     setNumOfChar(0);
        //     setNumOfWord(0);
        // }
    }
  return (
      <>
      <div className={`container my-3 ${props.mode==='light'?'text-dark':'text-light'}`}>

          <div className="mb-3">
              {/* <label htmlFor="myBox" style={{textAlign: 'center'}} className={`form-label  ${props.mode==='light'?'text-dark':'text-light'}`}>{props.label}</label> */}
              <h2 style={{textAlign:'center'}}>{props.label}</h2>
              <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#04050B', color:props.mode==='light'?'black':'white'}}id="myBox" rows="8" value={text} onInput={handleOnChange}  placeholder="Enter text here..."></textarea>
          </div>

          
              
                  <button className="btn btn-primary  mx-1" onClick={handleUpperCase}>Convert to uppercase</button>
              
              
                  <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to lowercase</button>
              
              
                  <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
              
              
                  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
              
              
                  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
              
                    </div>

          <div className={`my-3 container ${props.mode==='light'?'text-dark':'text-light'}`} >
              <h3 className={`${props.mode==='light'?'text-dark':'text-light'}`}>Your text summary</h3>
              <ul >
                  <li>Number of charcters: {text.length}</li>
                  <li>Number of words: {text.match(/(\w+)/g)===null?0:text.match(/(\w+)/g).length}</li>
                  
              </ul>
              <h3  >Preview</h3>
              <p>{text}</p>
          </div>
      </>);
}


// function saveTextAsFile(textToWrite, fileNameToSaveAs)
// {
//     var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
//     var downloadLink = document.createElement("a");
//     downloadLink.download = fileNameToSaveAs;
//     downloadLink.innerHTML = "Download File";
//     if (window.webkitURL != null)
//     {
//         // Chrome allows the link to be clicked
//         // without actually adding it to the DOM.
//         downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
//     }
//     else
//     {
//         // Firefox requires the link to be added to the DOM
//         // before it can be clicked.
//         downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
//         downloadLink.onclick = destroyClickedElement;
//         downloadLink.style.display = "none";
//         document.body.appendChild(downloadLink);
//     }

//     downloadLink.click();
// }
// <textarea id=t>Hey</textarea><br>


