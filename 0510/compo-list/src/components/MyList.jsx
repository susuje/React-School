import React from "react"

export default function MyList(){
    const items = [
        {id:1, name:"해장국"},
        {id:2, name:"김치찌개"},
        {id:3, name:"라면"}
    ];
    const itemList = [];

    items.forEach((item)=>{
        itemList.push(<li key={item.id}>{item.name}</li>)
    });

    return(
        <ul>
            {itemList}
        </ul>
    )
}

//items.map을 이용해서 한번다시풀어보자  왜냐면 forEach는 별로안슴.