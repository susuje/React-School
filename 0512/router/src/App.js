import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name="쿠롱" />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

//   http://localhost:3000/one 주소일시 렌더링됨
function One(props){
  return <h1>{props.name} world1</h1>
}


function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;
//5월9일 리엑트이벤트폴더에 조건식있음.


//세션이란 , 네이버 로그인햇다가 ㅡ브라우저닫고 다시들어오면 로그인이이미되어잇음
//Link는 a태그랑 똑같은거임. link를 통해 url을 바꿀수잇다!

//쿼리스트링 : 질문을 스트링에담아넘겨준다. 보통 '?'로 시작합니다. 서버개발자들이 프엔한테 얘기합니다.