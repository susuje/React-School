import React, { useEffect, useState } from 'react'
import styled from "styled-components"

//styled 컴포넌트도 컴포넌트이기때문에 대문자로써주자
const Item = styled.div`
    margin: 60px auto;

    ul{
        padding: 10px;
    }
    li{
        margin: 20px 0;
        border: 1px solid black;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 10px;
        list-style: none;
        box-shadow: 4px 4px 6px rgba(0,0,0,0.1);
    }
`

export default function NationList() {
    
    const [nations, setNations]=useState([]);
    const [url, setUrl] = useState("http://localhost:3000/nations")
    
    
    useEffect(()=>{
        const fetchData = async() =>{

            try {
                const response = await fetch(url);

                if(!response.ok){
                    throw new Error("네트워크 응답에 문제가 있다")
                }
                const json = await response.json();//response.json() 도 프로미스 반환하므로 기다려야함.
                setNations(json);

            } catch (error) {
                console.error('데이터를 가져오는데 문제가 발생했습니다.',error)
            }

            
        }

        fetchData();
    },[url]);
    //useEffect에서 두번째인자가 []빈배열일때 한번만 실행되므로 NationList()컴포넌트가 그려질때 초기화되므로  url 의 값은 계속 초기값"http://localhost:3000/nations"이 들어간다
    console.log(nations,"nations"); 
    //nations에 데이터가잇어요

    return (
    <Item>
        <h2>나라 목록</h2>
        <ul> 
            {nations.map((nation)=>{
                return <li key={nation.id}> 
                            <h3>나라 이름 : {nation.title}</h3>
                            <p>인구 수 : {nation.population}</p>
                        </li>
            })} 
        </ul>
        <div>
            <button onClick={()=>{setUrl("http://localhost:3000/nations?loc=europe")}}>유럽 목록</button>
            <button onClick={()=>{setUrl("http://localhost:3000/nations")}}>전체 목록</button>
        </div>
    </Item>
    )
}

// const [nations, setNations]=useState([]);
// fetch("http://localhost:3000/nations") 
//     .then(response=>response.json()) 
//     .then(json=> setNations(json));
//     console.log(nations)  

//     무한으로 호출됨. setNations(json) 에서 nations가 바껴서 NationList 컴포넌트함수가 다시 렌더링이됨.. 그럼 또 fetch를 해서 다시 setNations(json)실행-> 무한반복


    //async await쓰기전
    // useEffect(()=>{
    //     fetch("http://localhost:3000/nations") //프로미스반환
    //     .then(response //fulfuilled된 상태의 값이 요안에 들어감 resolve된함수=>{
    //         if(!response.ok){ // http상태코드가 200번대 아닐경우
    //             throw new Error("네트워크 응답에 문제가 있다")
    //         }
    //         return response.json() //리스폰스객체를 json으로 변환 ,프로미스반환
    //     }) 
    //     .then(json=> setNations(json)) ///배열데이터를 받아온다 http://localhost:3000/nations
    //     .catch((error)=>{
    //         console.error('데이터를 가져오는데 문제가 발생했습니다.',error)
    //     })
    // },[])

    //async 는 프로미스를 반환

    //http://localhost:3000/nations?population=200  하면 popu가 200d인 데이터만 나옴