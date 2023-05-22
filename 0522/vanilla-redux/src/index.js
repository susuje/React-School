
import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = createStore(rootReducer,composeWithDevTools());
//console.log(store.getState())
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);




// import {createStore} from 'redux';

// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const number = document.getElementById("number"); // 수량
// const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
// const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

// const PRICE = 17500;


// //dispatch  함수 선언
// const addNumber = () =>{
//     store.dispatch({type:"ADD"});
// }

// const substractNumber=()=>{
//     store.dispatch({type:"SUBSTRACT"});
// }

// //reducer 함수 선언
//                     //state값 초기화
// const countReducer = (state=0,action)=>{
//     switch (action.type) {
//         case "ADD":
//             minus.disabled=false;
//             return state+1;
//         case "SUBSTRACT":
//             plus.disabled = false;
//             return state-1;
//         default : {
//             return state;
//         }
//     }
// }
// const store= createStore(countReducer);


// //let count = 0;


// // // UI Update - text
// const handleWrite= () => {
//     number.innerText = store.getState();
//     quantity.innerHTML = store.getState();
//     totalPrice.innerHTML = store.getState() * PRICE;
// };

// store.subscribe(handleWrite);



















// // State Change
// const addNumber = () => {
//     count += 1;
//     minus.disabled = false;
//     updateResult(count);
// };

// // State Change
// const substractNumber = () => {
//     count -= 1;
//     plus.disabled = false;
//     updateResult(count);
// };

// // Init
// number.innerHTML = count;
// updateResult(count);


// Event
// plus.addEventListener("click", addNumber);
// minus.addEventListener("click", substractNumber);