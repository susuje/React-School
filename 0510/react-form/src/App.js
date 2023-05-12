import { useState } from "react";
import EventForm from "./components/EventForm";
import ItemGenerator from "./components/ItemGenerator";

function App( ) {

  const [datas, setDatas] = useState([])

  //console.log(datas);

  //datas 배열에 데이터를 추가하는 목적을 가지는 함수입니다.
  const addData =(data)=>{
    setDatas([...datas,data])
  }

  console.log(datas); //타이틀이랑 날짜를 입력한뒤 제출하기누르면 요기 datas에 들어감. 또 입력하고 제출하기누르면 [{},{}]두개가들어감.

  return (
    <div>
      <ItemGenerator datas={datas}/>
      <EventForm addData={addData}/>
    </div>
  );
}
export default App;

//eventForm에서 setDatas를 통해 formData를 보낼수이떠,