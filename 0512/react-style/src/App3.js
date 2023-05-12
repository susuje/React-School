// import React from "react";
// import styled from "styled-components";

// const ContentDiv = styled.div`
//     margin: 40px;
// `;

// const ContentH2 = styled.h2`
//     color: ${(props) => (props.name === 'hello'? 'red' : 'black')};
//     width: 200px;
//     margin: 0 auto;
//     text-align: center;
// `;


// const App = () => {
//     return (
//         <ContentDiv>
//             <ContentH2 name="hello">Q&A~</ContentH2>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
//                 corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
//                 aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
//                 Nemo, ullam.
//             </p>
//         </ContentDiv>
//     );
// };

// export default App;

//'////예제2
import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`
const UniAfter = styled.div`
    &:after {
    content: "!!";
}`
function App() {
    return (
        <div>
            <UniAfter>goood</UniAfter>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
        </div>
    );
}

export default App;

