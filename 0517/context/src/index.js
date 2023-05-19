import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App1";
import {AppConsumer} from "./AppConsumer";
// export { UserInfo,AppConsumer} 이므로 두개를 빼서 중괄호안에다가넣어줘야한다.
import App3 from "./App3"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App3 />);
