import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {

  const btns = ['1','2','3','4','5','6','7','8','9','0','+','-','*','=','C'];
  const [displaydata,setDisplaydata] = useState('');
  const handleClick = (e) =>{
    console.log(e.target.innerText);
    if(e.target.innerText === 'C')
      {
        setDisplaydata('');
        return ;
      }
    if(e.target.innerText === '=')
      {
        let ans = eval(displaydata);
        setDisplaydata(ans); 
        return ;
      }
    let tempstring = displaydata+e.target.innerText;
    setDisplaydata(tempstring);
    console.log("hiii");
  }
  return (
   
      <div className="main_container">
        <Display data = {displaydata}></Display>
        <Buttons btns = {btns} handleClick = {handleClick}></Buttons>
      </div>
  );
}

export default App;
