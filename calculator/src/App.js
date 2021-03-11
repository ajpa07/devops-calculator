import React, {useState, useEffect, useRef} from 'react';
import "./App.css";
import * as Math from "mathjs";
import { isInteger } from 'mathjs';

function App() {
  const [result, setResult] = useState("0");
  const inputRef = useRef(null);
   
  useEffect(() => inputRef.current.focus());

  function click(e){
    if((e.target.name === 'ln' || e.target.name === '√') && result.split(e.target.name)[0] !== ''){
      setResult("Error");
    }
    else if((e.target.name === '!' || e.target.name === '^') && result.split(e.target.name)[0] === ''){
      setResult("Error");
    }
    else {
      setResult(
        result + e.target.name
      );
    }
  }


  function changeSign(){
    if(result.substring(0, 1) === "-"){
     setResult(result.substring(1, result.length));
    }
    else{
     setResult("-" + result);
    }
  }
     

  function clear(){
    setResult("");
  }


  function back(){
    let resultString = result.toString();
    setResult(resultString.slice(0,resultString.length-1));
   
  }

  
  function calculate() { 
    let value_array = [];
      if(result.includes("!")) { 
            
          let size = result.length; 
          let n = Number(result.slice(0, size-1)); 
          if(isInteger(n) && n >= 0){
            let f = 1; 
            
          for(let i = 2; i <= n; i++) 
              f = f*i; 
          setResult(f.toString()); 

          }
          else{
            setResult("Error");
          }
          
      }
      else if(result.includes("^")) {   
        value_array = result.split('^');
        setResult(Math.pow(Number(value_array[0]),Number(value_array[1])).toString());
      } 
      else if(result.includes("ln")) {    
        value_array = result.split('ln');
        setResult(Math.log(Number(value_array[1])).toString());
     }   
     else if(result.includes('√')) {    
        value_array = result.split('√');
        setResult(Math.sqrt(Number(value_array[1])).toString());
     }   
     else {   
          setResult(result);
      }    
  } 


  function inputChangedHandler(e) {
    const currentInput = result;
    
}


  return (
    <div className="App">
      <h3>Scientific Calculator</h3>
      <form>
        <input type="text" title="display" value={result} ref={inputRef}
        onChange={(e)=>inputChangedHandler(e) }
        />
      </form>
      <div className="keypad">
         <button id="clear" onClick={clear}>Clear</button>
         <button id="backspace" onClick={back}>Back</button>
         <button name='^' onClick={click}>^</button>
         <button name='7' onClick={click}>7</button>
         <button name='8' onClick={click}>8</button>
         <button name='9' onClick={click}>9</button>
         <button name='&#8730;' onClick={click}>&#8730;</button>
         <button name='4' onClick={click}>4</button>
         <button name='5' onClick={click}>5</button>
         <button name='6' onClick={click}>6</button>
         <button name='!' onClick={click}>!</button>
         <button name='1' onClick={click}>1</button>
         <button name='2' onClick={click}>2</button>
         <button name='3' onClick={click}>3</button>
         <button name='ln' onClick={click}>ln</button>
         <button name='0' onClick={click}>0</button>
         <button name='.' onClick={click}>.</button>
         <button name='&#177;' onClick={changeSign}>&#177;</button>
         <button id="equals" onClick= {calculate}>=</button> 
         
      </div>
    </div>
  );
}

export default App;
