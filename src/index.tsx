import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import "./App.css"

function App() {
    const [color,setColor] = useState("primary")
    const [num,setNum] = useState(0)
    useEffect(()=>{
	setTimeout(() => {
	    setColor("danger")
	    setNum(() => num+1)
	}, 2000)
    })
    let Buttons2 =  ["danger","warning"].map((v,k) => (<Button variant={v}>Hello</Button>))
  return(
  <div> 
    some data
    {Buttons2}<Button>hello</Button>
    <Button variant={color}>Color</Button>
    {num}
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
