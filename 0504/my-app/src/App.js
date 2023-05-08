
import './App.css';
import TripList from './components/tripList/TripList'

function App() {

    return (
      <div>
        <TripList />
      </div>
    );
  }


export default App;



// function List(props){
//   if(props.list.visited===true){

//   }
//   return(
//     <div className='list'>
//       <ul>
//         <li>{props.list[0].area}</li>
//         <li>{props.list[1].area}</li>
//         <li>{props.list[2].area}</li>
//         <li>{props.list[3].area}</li>
//       </ul>
//     </div>
//   )
// }

// function App() {
//   let list = [
//     { no: 1, area: "대전", visited: false },
//     { no: 2, area: "부산", visited: true },
//     { no: 3, area: "목포", visited: false },
//     { no: 4, area: "제주도", visited: false },
//   ];

//   return (
//     <div>
//       <List list = {list}/>
//     </div>
//   );
// }
