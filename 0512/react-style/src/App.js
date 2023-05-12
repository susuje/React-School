import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
${reset}

    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`
//Example 까지 스타일이 적용됨. Example에도위에처럼 span{color:blue;}로 css를 따로 줫는데 빨간색이유지된다. 
//이 글로벌 스타일은 다른 스타일보다 나중에 로딩이 되어 같은 가중치라면 기본적으로 우선순위가 높다는 특징이 있습니다.
//하지만 Example에서 클래스로 css를 설정하면 클래스로된게 우선된다. 가중치가 더 높으므루.

function App() {


  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}

export default App;




//   const name = '이호준'
// const age = 10

// function 인사(문구, 이름, 나이){
//     console.log(문구[0]) //'이름은 '
//     console.log(문구[1]) //'이고 나이는 '
//     console.log(문구[2])//'입니다.'
//     console.log(문구, 이름, 나이)
//     return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
// }

// const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

// console.log(인사문구)
