import Hello from './Components/Hello'
import Time from './Components/Time'
import Resume from './Components/Resume'
import Colortext from './Components/ColorText'


function Licat(props){
  const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};

  return(
    <div>
        <h1 style={someStyle}>안녕, {props.name} 1호</h1>
        <h1>안녕, {name} 2호!</h1>
        <div className="newClass"/>
    </div>
  )
}

// function Time(){
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth()+1;
//   const date = today.getDate();
//   const hour = today.getHours();
//   const min = today.getMinutes();
//   const sec = today.getSeconds();
//   return(
//     <div style={{backgroundColor:"black", color:"white"}}>
//         <h1 style={{color:'red'}}>년 : {year}</h1>
//         <h1>월/일 : {month}/{date}</h1>
//         <h1>시간 : {hour}시 {min}분 {sec}초</h1>
//       </div>
//   )
// }


function App() {
	

  return (
    <div>
      <Hello name="Gary" /> 
		  <Time />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <Colortext color="red"/>
          <Colortext color="green"/>
          <Colortext color="blue"/>
    </div>
  );
   //name="Gary" props로 넘겨주면 Licat함수 Licat() 괄호에 (props) 매개변수를써야합니다. 
}

export default App;

