import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <HelloLicat/>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer> 
      {(value) =>  {//context사용하려면 콜백함수사용해야함 . //Consumer의 콜백함수이다.
        {console.log(value)} //value는 {name: 'gary', id: 'garyIsFree'}
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      }} 
    </UserInfo.Consumer>
  );
};

export default App;

