// const items = [
//     { id: 1, name: 'Apple', desc: '빨간건 사과' },
//     { id: 2, name: 'Banana', desc: '바나나는 길어' },
//     { id: 3, name: 'Cherry', desc: '체리는 비싸' }
// ];

//내가한코드
// function ListItem(){
//     return(
    
//     items.map((item)=>{
//         return (<>
//         <dt>{item.name}</dt>
//         <dd>{item.desc}</dd>  
//         </>) //여러줄이니까 return해야함
//     })
        
//     )
// }

// function App (props){
//     return(
//         <dl>
//             <ListItem />
//         </dl>
//     )
// }


//쌤코드2이렇게해도된다.
function ItemList() {

    const itemList = items.map(({ id, name, desc }) => {
      return (<React.Fragment key={id}>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </React.Fragment>);
    });
  
    return (
      <dl>
        {itemList}
      </dl>
    )
  
  }




//쌤코드 1
const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function ItemList(){
    return(
        items.map((item)=>{
            return(
                <>
                <dt>{item.name}</dt>
                <dd>{item.desc}</dd>
            </>
            )
        })
    )
}

function App (props){
    return(
        <dl>
            <ItemList />
        </dl>
    )
}


////쌤코드 2
function ItemList(){
    
    const itemList = items.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                <dt>{item.name}</dt>
                <dd>{item.desc}</dd>
            </React.Fragment>
            )
    })

    return(
        <dl>
            {itemList} 
            {/* <itemList / >는안댐. 변수니까. */}
        </dl>
    )
    
}

function App (props){
    return(
        
            <ItemList />
        
    )
}

export default App;