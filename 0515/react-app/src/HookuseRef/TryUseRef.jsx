import React, { useState, useEffect, useRef } from "react";

function Counter2() {
  const [num2, setNum2] = useState(0);
  const num = useRef(0);

  return (
    <>
      <button onClick={() => setNum2(num2 + 1)}>버튼</button>
      <div>{num2}</div>
      <button
        onClick={() => {
          num.current += 1;
          console.log(num.current);
        }}>
        버튼
      </button>
      <div>{num.current}</div>
    </>
  );
}

export default Counter2;

//num 이 계속0인이유는 함수를 다ㅣ시실행해서. let num = 0;이기때문에
//setNum2하면 num2가 1로 바뀜. 리액트한테 새로그려조 라고 말함. 이 과정에서 Counter2 함수를 새로 실행시켜주는거임.그다음 1로바뀐걸그려주는거임. 그래서 num이 계속0으로변함. 암튼  num처럼 0이라고 변수를지정한 경우 초기화가계속일어남.

//setNum2를 통해 num2가 바뀌면 Counter2가 다시실행됨 화면이새로그려짐.