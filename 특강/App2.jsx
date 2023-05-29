const { useState } = React;




                //{onClick}
function Button(props) {
    //console.log(props);
    //  props {children: '+', onClick: ƒ}
    
    return (
        <button
        onClick={props.onClick} // props안 onClick안에 실행시키면num증가함수가 들어있다 또는{onClick}
        style={{
            width: "50px",
            height: "50px",
        }}>
        {props.children}
        </button>
    );
}


function Counter(props) {
    const [num,setNum]= useState(0);

    const 증가=()=>{
        props.setNum((cur)=>cur+1)


    }
    
    const 감소=()=>{
        props.setNum(props.num-1)
    }
    // jsx안에서 값을 사용하고싶으면 {}로 감싸!
    //함수도 값이다! 
    return (
    <>
        <span>여기 숫자 {props.num}</span>
        <Button onClick={증가}>+</Button>
        <Button onClick={감소}>-</Button>
    </>
    );
}



function HomePage() {
    //원래는 COunter컴포에만 num이라는 state가 필요함
    //그런데 그 상위에잇는 HomePage에서 num라는 state가 필요해짐
    const [num, setNum] = React.useState(0);

    
    // 상태 끌어올리기 언쩨씀???
    // 내가 전달해줄수없는 컴포넌트가 생겼을때 공통 부모에서 관리하도록 하고싶을때
    return (
    <>
        <h1>숫자 카운터 만들기</h1>
        <Counter num={num} setNum={setNum} />
        <div>{num * 2}</div>
    </>
    );
}

function App() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HomePage />);
}

App();




// function Counter(props) {
//     const [num,setNum]= useState(0);

//     const 증가=()=>{
//         props.setNum((cur)=>cur+1)
//         //setNum(num+1)
//         //setNum((현재num상태)=>현재num상태+1)
//         //const 콜백 = (현재num상태)=>현재num상태+1
//         //이거 혹시 갱신된다는게 state가 curl에 할당되는지 질문하신걸까요? 네네 
//         //setNum((cur)=>cur+1) 요렇게해도되는데 cur에 자동적으로 state가 갱신되는건가요? ㅇㅇ

//     }
    
//     const 감소=()=>{
//         props.setNum(props.num-1)
//     }
//     // jsx안에서 값을 사용하고싶으면 {}로 감싸!
//     //함수도 값이다! 
//     return (
//     <>
//         <span>여기 숫자 {props.num}</span>
//         <Button onClick={증가}>+</Button>
//         <Button onClick={감소}>-</Button>
//     </>
//     );
// }




//{children,...props} = props

// function Button({ children, ...props }) {
//   console.log(props);
  //  props {onClick:  실행시키면num증가}
  // props는 js 객체다!!!
//   return ( 
//     <button onClick={props.onClick} style={{ width: "50px", height: "50px" }}>
//       {children}
//     </button>
//   );
// }