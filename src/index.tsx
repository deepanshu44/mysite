import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import "./App.css"

function App() {
    const [status,setStatus] = useState({val:0,color:""})
    const [array,setArray] = useState([
	{num:1,color:"red",active:false},
	{num:2,color:"green",active:false},
	{num:3,color:"blue",active:false},
	{num:4,color:"orange",active:false},
	{num:5,color:"purple",active:false}
    ])
    const test = (val:number,color:string) => {
	setStatus(() => ({val,color}))
	setArray((prev) => {
	    let array = [...prev]
	    array.map((z) => {
		if (z.num===val) {
		    z.active=true
		    return z;
		}else if (z.num===status.val) {
		    z.active === false
		    return z;
		}
	    });
	    return array;
	})
    }
    function styles(a,color) {
	return{
	    backgroundColor:a===status.val?color:"white",
	    color:a===status.val?"white":color
	};

}

    const buttons = array.map((value) => <button  key={value.num.toString()} onClick={()=>test(value.num,value.color)} style={styles(value.num,value.color)}>{value.color}</button>);
    return(
    <div className="top">
      <div className="bar">
	{buttons}
	<div>a</div>
      </div>
      <div style={{backgroundColor:status.color}}>
	{status.val}
      </div>
    </div>
    );
    
}

ReactDOM.render(<App />, document.getElementById("root"));
