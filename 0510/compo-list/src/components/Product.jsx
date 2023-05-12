import React, { useState } from "react"

const productList = {
    products: [
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
    ],
  };
//강사님 코드도보자 이건내코드
export default function Product(props){
    

    
    return(
        <ul>
            {
                productList.products.map((item)=>{
                    return(<li key={item.id}>
                        <h1>{item.id-100} {item.title}</h1>
                        <strong>{item.price}원</strong>
                        <button onClick={props.close}>삭제</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}


//강사님코드