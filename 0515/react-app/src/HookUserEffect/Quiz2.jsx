import React, { useState, useEffect } from 'react';

    function Time(props) {
    const [today, setToday] = useState(new Date());
    const [hour, setHour] = useState(today.getHours());
    const [min, setMin] = useState(today.getMinutes());
    const [sec, setSec] = useState(today.getSeconds());
    console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
    useEffect(()=>{
        const interval = setInterval(() => {
                const t = new Date();
                setToday(t);
                setHour(t.getHours());
                setMin(t.getMinutes());
                setSec(t.getSeconds());
        }, 1000);
        return()=>{
            clearInterval(interval)
        } 
    },[today]);
    
    // useEffect(() => {
    //     setInterval(() => {
    //       const today = new Date();
    //       setToday(today);
    //       setHour(today.getHours());
    //       setMin(today.getMinutes());
    //       setSec(today.getSeconds());
    //     }, 1000);
    //   }, []); //이거질문하기



    //리액트는값이바뀌면 다시그려줍니다.
    return (
        <div>
        <h1>
            시간 : {hour}시 {min}분 {sec}초
        </h1>
        </div>
    );
    }

export default Time

//암튼useEffect란 state가 변경되어 렌더링 될 때 실행하는 부분!
 //   setTimeout(() => {
    //     setToday(new Date());
    //     setHour(today.getHours());
    //     setMin(today.getMinutes());
    //     setSec(today.getSeconds());
    //   }, 1000);