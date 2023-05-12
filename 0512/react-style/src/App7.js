import React from "react";
import './App.css'

//import 순서바꾸면 css가 덮어씌여진다.


const App = () => {
  return (
    <>
       <nav className="box">
        <ul>
          <li id="detail" className="text">
            상세정보
          </li>
          <li id="qa" className="text">
            Q&A
          </li>
          <li id="review" className="text">
            Review
          </li>
        </ul>
      </nav>
      
    </>
  );
};

export default App;