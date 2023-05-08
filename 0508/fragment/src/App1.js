import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}




let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function App() {
    return (
      list.map((item)=>{
        return (<>
          <h1>{item.area}</h1>
          <p>{item.visited ? "true" : "false"}</p>  
        </>) //여러줄이니까 return해야함
      })
    )
}

// function App() {
  
//     let lists = list.map((item)=>{
//       return (<h1>{item.area}</h1>)
//     })
//     return lists
// }
export default App;
