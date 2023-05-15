import { useState } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
    
  }
  return s;
}

function TryUseMemo() {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
  
    const handleCountUp = (e) => {
      setCount(count + 1)
      console.log(count)
    }
    const handleCountUpTwo = (e) => {
      setCountTwo(countTwo + 1)
      console.log(countTwo)
    }
  
    console.log('랜더링!!')

    //평소에는 memo되어잇는걸 가져다씀.
        //countTwo가 바뀌엇을때 부하 함수를 실행시키는 메모 . 부하실행시킨후 result에 넣어줌.
        //countTwo가 값이안바뀌면 이전에 계산한 값을 가져온다.
    // const result = useMemo(()=>{
    //   return 부하()
    // }, [countTwo])
  
    return (
      <div className="App">
        <h1>계산 결과 : {result}</h1>
        <div>{count}</div>
        <button onClick={handleCountUp}>up!</button>
        <div>{countTwo}</div>
        <button onClick={handleCountUpTwo}>up!</button>
      </div>
    );
}
export default TryUseMemo;

//useMemo는 기억해주는거야.그리고 기억해둔값을 가져올수잇엇다.