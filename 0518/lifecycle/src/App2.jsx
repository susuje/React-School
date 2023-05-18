import React, { useEffect, useState } from "react";

function getName(){
	console.log("사실은 겁나 오래기다리는중...");
	return "개리";
}

function App() {
  const [name, setName] = useState(getName);   //getName() 이엿음. 더이상 콘솔이 찍히지않는다.
  const [num, setNum] = useState(0);
  return(
    <>
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>

    </>
  )
}

export default App;

//<button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button> 
//                              이 함수형 업데이트는 이전 상태의 state값을 가져옴
// 뭔가를 더하는것처럼 전의 값이 중요할때 함수형 업데이트를 많이 사용한다.

//0510 폴더에 보면 함수형업데이트를 정리해놓으심.