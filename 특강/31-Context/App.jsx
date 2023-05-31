
  function ShowNum(props) {
    const num = React.useContext(NumContext);
  
    // props.num 불러오는 무언가...대신하는거
    return <div>{num}</div>;
  }
  
  // Button.jsx
  function Button(props) {
    return (
      <button
        onClick={props.onClick}
        style={{
          width: "50px",
          height: "50px",
        }}>
        <ShowNum />
        {props.children}
      </button>
    );
  }
  function Counter(props) {
    const num = React.useContext(NumContext);
    const 실행시키면num증가 = () => {
      props.setNum(num + 1);
    };
    const 실행시키면num감소 = () => {
      props.setNum(num - 1);
    };
    return (
      <>
        <span>여기 숫자 {num}</span>
        <div>
          <span>이름:우경석</span>
        </div>
        <Button onClick={실행시키면num증가}>+</Button>
        <Button onClick={실행시키면num감소}>-</Button>
      </>
    );
  }
  function ShowDubble() {
    const num = React.useContext(NumContext);
    return <div>{num * 2}</div>;
  }
  
  const NumContext = React.createContext();
  
  // HomePage.jsx
  function HomePage() {
    const [num, setNum] = React.useState(0);
    
    return (                    //{num:num} 으로 넘길수도 이씀.
      <NumContext.Provider value={num}>
        <h1>숫자 카운터 만들기</h1>
        <Counter setNum={setNum} />
        <ShowDubble num={num} />
      </NumContext.Provider>
    );
  }
  
  function App() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HomePage />);
  }
  
  App();