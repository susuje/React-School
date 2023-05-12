import MyList from "./components/MyList";
import Counter from "./components/Counter";


import { useState } from "react";
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}


function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1 key={i}>
      안녕, {name} {i}호
    </h1>
  ));

  return(
    <div>
      {numComponentsArray}
    </div>
  )
}



// const productList = {
//   products: [
//     { 
      
//       title: "개발자 무릎 담요",
//       price: 17500,
//       id: 101,
//     },
//     { 
//       title: "Hack Your Life 개발자 노트북 파우치",
//       price: 29000,
//       id: 102,
//     },
//     {
//       title: "우당탕탕 라이켓의 실험실 스티커북",
//       price: 29000,
//       id: 103,
//     },
//     { 
//       title: "버그를 Java라 버그잡는 개리씨 키링",
//       price: 29000,
//       id: 104,
//     },
//   ],
// };


function App() {
  const [datas,setDatas] = useState( [
    { 
      
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    { 
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    { 
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  //리액트는 state함수(set어쩌구)의 호출이 일관성을 유지하기위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리합니다.
  

                        //닫기버튼누른 li의 id
    function handleClick(id){
     // setDatas(
        //함수형업데이트..?@
      //  datas.filter((item)=>{
      //    return id !== item.id
          //삭제버튼 li가 101번을 클릭했으면 id가 101이 아닌것만 반환하는거임.
       // }) //filter은 원본데이터를 그대루두고 새로운데이터를반환하는거에요.
      //);

      //오류없이 업데이트해주는방법//함수형 업데이트라고 표현함.이를 사용하면 함수의 인자로 전달되는 state값을
      //리액트가 이전 state의 값으로 보장합니다. 때문에 상태업데이트가 비동기적을 처리된다고해도 
      //안정적으로 이전값과 이후값(버츄얼 돔)을 비교하여 처리할 수 있습니다.
      setDatas( (prevDatas)=>{
        return prevDatas.filter((item) => {
          return id !== item.id
        })
      });

    }

  return (  
    <div>
      
      {
                datas.map((item)=>{
                    return( <li key={item.id}>
                        <h1>{item.id-100} {item.title}</h1>
                        <strong>{item.price}원</strong>
                        <button onClick={()=>{
                          handleClick(item.id)
                        }}>삭제</button>
                        </li> 
                    )
                })
            }
        <Counter />
    </div>
    
  );
}
export default App;

//<button onClick={(e)=>{
//   e.target.closest('li').remove()
// }}>삭제</button> 
//이렇게해도되지만 useState를 사용해보자.