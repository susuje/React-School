import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };
  const [isFirstRender,setFirstRender] = useState(true)

  useEffect(() => {
    //이게 지금 처음 입장했을때 실행이되고있다. 처음 들어왔을때 감지해서 안실행시키고싶음
    //실행을 시켜야할지 말아야할지에 대한 상태를 만들어줄까?
    if(isFirstRender){
        console.log('난 처음 렌더링되었는지 확인하고잇어. 첫번째군')
        setFirstRender(false)
    } else{
        if(count%2){
            alert("홀수입니다")
            }else{
            alert("짝수입니다")
            }
    }

    return()=>{alert("클린업")};
  }, [count])
  //count가 바뀌기직전에 뭔가 하고싶다
//버튼 누르면 카운트곧바뀜 뜨고 ->홀수입니다 가 뜸
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}
export default Counter;

//상태변경=> cleanup=> useEffect