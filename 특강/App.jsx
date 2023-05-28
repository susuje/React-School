// function MyHeader(props) {
//     console.log(props.pageName);
//     return (
//       <>
//         <h1>아 이건 제목이야 여기는 {props.pageName}!</h1>
//         <h2>이건 부제목이야 여기는 {props.pageName} 부제목!</h2>
//       </>
//     );
//   }

  //구조분해할당    //또는 {pageName,a}
  function MyHeader(props) {
    const {pageName,a}= props//props 이 안에 pageName와a라는 키로 값을가져올수잇다
    return (
      <>
        <h1>아 이건 제목이야 여기는 {pageName}!</h1>
        <h2>이건 부제목이야 여기는 {pageName} 부제목!</h2>
      </>
    );
  }


  //console.log(props); 
//   {
//     pageName: "홈페이지",
//     a: "a"
//   }

function HomePage(params) {
    return (
      <div>
        <MyHeader pageName="홈페이지" a="a" />
        <MyHeader pageName="페이지2" a="a" />
        <MyHeader pageName="홈페이지3" a="a" />
        <MyHeader pageName="홈페이지4" a="a" />
      </div>
    );
  }
  
  function App() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // const header = document.createElement("h1");
    // header.innerText = "아 이건 제목이야";
    // root.appendChild(header);
    root.render(<HomePage />);
  }
  
  App();
  
  // jsx란 무엇인가(기초편)
  // react component에서 props
  // react hook state
  // 메모장 합시다
  
  // jsx좀 더 살펴보기 <<
  // 기능분리하는법 (사람들이랑 같이하는법) <<