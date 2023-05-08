import React, { useState } from 'react';

function Resume(props){
  const [like, setLike] = useState('like');
  //const [txt, setTxt] = useState('hello')
  function clickLike() {
		setLike(like? "":"like")
    //setLike(like+1) 도 가넝 (누르면 숫자올라가는예제)
    //like버튼누르면 like뜨고 또누르면 안뜨고 햇을때 if문으로해줄수도잇다. 쌤교안보기
  }

    return(
      <div>
          <h1>{props.name} 자기소개서</h1>
          <h2>{props.hello}</h2>
          <h3>취미: {props.hobby}</h3>
          <h3>좋아하는 음식: {props.food}</h3>
          <h3>좋아하는 색: {props.color}</h3>
          <button onClick={clickLike}>like</button>
          {/* <input type='text' value={txt}/> */}
          <p>{like}</p>
      </div>
    )
  }
  
export default Resume;

//onClick={clickLike} onClick은 함수이름을 바로넣어야한다.
//이렇게 표현할수도있다.<button onClick={() => setLike(like + 1)}>like <span>{like}</span></button>