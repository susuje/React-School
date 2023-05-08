import { useState } from "react";
import DisplayMood from "./Components/DisplayMood/DisplayMood";
import MenuList from "./Components/MenuList/MenuList";

function App() {
  const [currentMood, setCurrentMood] = useState("어떻냐구요?");
  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood}/>
      <DisplayMood mood={currentMood}/>
    </div>
  );
}
export default App;

//state 상태  끌어올리기  -- 부모로 보내고 다시 상태창으로