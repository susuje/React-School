import React from "react";
import './Main.css'
import { useState } from "react";
//webpack문법
                          //{modalOpen}
export default function Main(props) {

  const [expert, setExpert]=useState('');
  const [trainingTime,setTrainingTime]=useState(0);
  const [dday,setDday] = useState(0);
  //위에서 useState(0)이면 0이뜬다.&& 연산자에서 true 가 나오면 그 값의 원래값을 보여줌/ boolean은 jsx에 안나옴. 
  //암튼 0으로 하면 number는 나오기때문에 0이 화면에그려지는거다. 빈문자열은 렌더링안댐.
  // !!dday하면 boolean값을 반환해서 0이안뜬다.
  const handleSubmit=(e)=>{
    e.preventDefault();
    setDday(Math.ceil(10000/trainingTime));
  }
  

    return (
      <main>
      <h2 className="a11y">필요한 시간 알아보기</h2>
      <form className="cont-input" onSubmit={handleSubmit}>
          <p className="txt-wannabe">나는
            <input type="text" required value={expert} onChange={(e)=>setExpert(e.target.value)}/>전문가가 될것이다.
          </p>
          <p className="txt-time">그래서 앞으로 매일 하루에
            <input type="number" required value={trainingTime} onChange={(e)=>setTrainingTime(e.target.value)}/>시간씩 훈련할 것이다.
          </p>
          <button type="submit" className="btn-exc">나는 며칠동안 훈련을 해야 1만시간이 될까?</button>
      </form>
      {!!dday && <section className="cont-result">
          <h3 className="a11y">결과 확인</h3>
          <p className="txt-wannabe">
              당신은 <strong>{expert}</strong> 전문가가 되기 위해서<br />
              대략 <strong>{dday}</strong>일 이상 훈련하셔야 합니다! :&#41;
          </p>
          <button type="button" className="btn-go" onClick={props.modalOpen}>훈련하러가기 GO!GO!</button>
          <button type="button" className="btn-share">공유하기</button>
      </section>}
  </main>
    );
}
