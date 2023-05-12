import React, { useState } from "react"

export default function Counter(){
    
    const [number, setNumber] = useState(0);

    function plus(){
        setNumber(number+1);
        //setNumber(number+1);
        //setNumber(number+1); 이렇게 세개가 잇어도 하나로 업데이트된다. 즉, 1만 추가됨
        //그래서 함수형으로 써줘야한다

        setNumber(prevNumber=> {
            return prevNumber+1
        })
        //그래서 플러스버튼누르면 +2가된다  
    }

    function minus(){
        setNumber(number-1)
    }
    return(
        <>
        <h1>Counter: {number}</h1>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        </>
    )
}
