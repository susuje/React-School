import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import NavBar from "./NavBar";

function Hello(props) {
	const name = props.name;
  if(name){
    return <One name={name}/>
  } else {
    return <Two/>
  }
}

function One(props){
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

function Two(props){
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}


const container = document.getElementById("root");
const root = createRoot(container);
//root.render(<Hello name="크롱" />); //암것도안넣으면 다른게뜹니다
root.render(<NavBar />);
