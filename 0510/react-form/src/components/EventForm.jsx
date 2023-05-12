import React from "react"
import './EventForm.css'
import { useState } from "react"


export default function EventForm({addData}){

    const[title,setTitle]=useState('');
    const [date,setDate]= useState('');
    const [food,setFood]= useState('짜장면');

    function resetForm(){
        setTitle("");
        setDate("");
    }

    function handleSubmit(e){ //제출하기누르면 실행되는함수입니다.
        e.preventDefault();

        const formData = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            date: date,
            food:food
        }
        // console.log(formData) 입력후 제출하기누르면 잘뜬다.

        addData(formData);
        resetForm();
    }
    
    return(
        <form className="event-form" onSubmit={handleSubmit}> 
            <label htmlFor="">
                <strong>Event Title:</strong>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            <label htmlFor="">
                <strong>Event Date: </strong>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            </label>
            <label>
                <select onChange={(e)=>{setFood(e.target.value)}}>
                    <option value="짜장면">짜장면</option>
                    <option value="유산슬">유산슬</option>
                    <option value="탕슉">탕슉</option>
                </select>
            </label>

            <button type="submit">제출하기</button>
            <button type="reset" onClick={resetForm}>초기화</button>
        </form>
    )
}
