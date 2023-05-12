import { useState } from "react";
import Login from './Login'
import Homepage from './Homepage'
import Modal from './Modal'

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234',
    name: '수연'
  }

  const [login,setLogin]= useState(false);
  //login 이 false면 로그인이안되어잇는거임.
  const[modalShow, setModalShow] = useState(true);
  //modalShow가 true이면 모달창이뜨고 false이면 모달창 안뜸.
  function modalClose(){
    setModalShow(false);
  }
  
  console.log(login);
  return (
    <>
      {login ? <Homepage user={user} /> : < Login infoUser={user} setLogin={setLogin} />}
      {modalShow && < Modal modalClose={modalClose}>
        <h2>사용약관에 대해 말씀드리겠습니다.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum laborum, quo facilis eaque quam optio aliquam nam provident. Laboriosam delectus, atque doloremque nam harum molestias ab quisquam! Quis, pariatur.</p>
        <a href="#none">더 보기</a>
      </Modal>}
    </>
  )

}
//여기서 모달의 상태를 결정하는 state를 해서 모달을보여줄지말지결정한다.
export default App;


//상태가 변화하는게 총 두가지 //로그인됐니안됐니 // 모달창보여줄까 말까//


//질문 modalShow가 false면 false를 반환하잖아용 그럼 화면에서 아무일도 안일어나나요??


//&& 는 마지막 트루시랑 첫번째 falsy 반환?
//t&&t 일때 두번째 t
// && 연산자
// 첫번째 falsy
// 마지막 truthy
// 값을 반환


//1&&2  ===> 2 둘다 trusy 니까 마지막 truthy 반환
// && 연산자
// falsy한 값이 있으면 - 첫번째 falsy 값을 반환
// 없으면 - truthy중에 마지막 truthy 값을 반환 
//0&&2 0이 falsy

// 1||2||3  ===>1
// 0||0||false // false 반환. 마지막 falsy 