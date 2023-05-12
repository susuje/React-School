import React from "react";
import styled, { css } from 'styled-components'


const One = styled.button`
    border: 0;
    padding: 30px 50px;
    font-size: 24px;
    border-radius: 40px;
    background-color: blue;
    color: white;
`;
const Two = styled(One)`
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(125,94,163,1) 0%, rgba(0,212,255,1) 100%);
   
`
const Three =styled(One)`
background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
border-radius: 0px 50px 50px 50px;

`




const App = () => {
	return (
    <>  
        <One>Hello</One>
        <Two>Hello🎄</Two>
        <Three>버튼3🎅</Three>
    </>
	);
};
  
export default App;

//<One></One> 은안댐 .컴포넌트가아님. 그냥 css를 저장하는겨.