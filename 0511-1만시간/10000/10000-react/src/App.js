import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import { useState } from "react";
function App() {

//모달 껏다켯다해야하니까 상태를 t/f로 저장해야한다
const[modalShow, setModalShow] = useState(false);
//f일때는 모달이 안뜸.
//
function modalClose(){
  setModalShow(false);
}
function modalOpen(){
  setModalShow(true);
}


  return (
    <div id="app">
      <Header />
      <Main modalOpen={modalOpen}/>
      <Footer />
      {modalShow && <Modal modal={modalClose}/>}
    </div>
  );
}
export default App;


//modalClose={modalClose} 여기서 modal={modalClose} 이라고 한다면 prop대신 {modal}을 쓰는건가요?