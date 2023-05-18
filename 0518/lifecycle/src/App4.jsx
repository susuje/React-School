import React, { useEffect, useState, useLayoutEffect } from 'react'

export default function App4() {
    const [num, setNum] = useState(0);

    useLayoutEffect(() => {

        setNum(10); //사실은 엄청 오래걸리고 어려운 로직

    }, [num]);

    return (
        <>
            <div>{num}</div>
            <button onClick={() => setNum(prevNum => prevNum + 1)}>클릭</button>
        </>
    )
}


//useEffect - 컴포넌트 업데이트됐을때
// 마운트됐을때 실행