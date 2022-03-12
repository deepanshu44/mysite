import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import "./App.css"

function App() {
    const [color,setColor] = useState(["primary","danger","warning","success","light"])
    const [num,setNum] = useState(0)
    useEffect(()=>{
	setTimeout(() => setColor((prevColor) => {
	    let mprevColor = [...prevColor];
	    mprevColor.unshift(mprevColor.pop())
	    return mprevColor;
	}), 400)
    },[color])
    let Buttons2 =  ["danger","warning"].map((v,k) => (<Button variant={v}>Hello</Button>))
  return(
  <div> 
    some data
    {Buttons2}<Button>hello</Button><br/><br/>
    <Button variant={color[0]}>Color</Button>
    <Button variant={color[1]}>Color</Button>
    <Button variant={color[2]}>Color</Button>
    <Button variant={color[3]}>Color</Button>
    <Button variant={color[4]}>Color</Button>
    {num}
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
