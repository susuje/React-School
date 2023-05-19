import React, { useRef, useState, useMemo } from 'react'

export default function App2() {
// const inputName = useRef(null)
// const inputId = useRef(null)//useRef이용시
const [userInfo, setUserInfo] = useState([])
const [name, setName] = useState('')
const [id, setId] = useState('')

function handleInputName(e){
    console.log(e)
    setName(e.target.value)
    console.log('렌더링 - 1')
}

function handleInputId(e){
    console.log(e)
    setId(e.target.value)
    console.log('렌더링 - 2')
}

function handleSubmit(e){
    //console.log(e)
    e.preventDefault()
    const newInfo = [...userInfo, {name, id}]
    // inputName.current.value = ''//useRef이용시
    // inputId.current.value = ''
    setId('');
    setName('');

    e.target[0].focus();
    // inputName.current.focus() //useRef이용시
    setUserInfo(newInfo)
    console.log('렌더링 - 3')
}

// 모든 렌더링에 함께 렌더링되는 이슈가 있습니다.
function getNum(li){
    console.log('렌더링!')
    return li.length
}

const num = useMemo(() =>{
    getNum(userInfo)
} , [userInfo]);

return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='이름을 입력하세요'
        onChange={handleInputName}
        // ref={inputName}//useRef이용시
        value={name}
        />
        <input 
        type='text'
        placeholder='아이디를 입력하세요'
        onChange={handleInputId}
        // ref={inputId}
        value={id}
        />
        {/* <button type='submit' onclick={handleSubmit}>회원 명부 작성</button> */}
        <button type='submit'>회원 명부 작성</button>
    </form>
    <ul>
        {
        userInfo.map((value, index) => (
            <li key={index}>
            <h3>이름 : {value.name}</h3>
            <strong>아이디 : {value.id}</strong>
            </li>
        ))
        }
    </ul>
    <span>현재 회원 수 : {num}</span>
    </>
)
}

//state값이 바귀면 컴포넌트가 계속 재랜더링이됨.

//<span>현재 회원 수 : {getNum(userInfo)}</span>
//그래서 getNum이 자꾸실행되어서 useMemo를 쓰는게좋다.

//form 에 submit이벤트를 넣어야함. console.log(e)보면  target:form 에 이벤트객체로 form의 자식요소input에 접근할수잇음.