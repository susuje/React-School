import React, {useEffect, useState} from 'react'
import ImageList from './components/ImageList';

function App() {
  const[imageList, setImageList] = useState([]);

  useEffect(()=>{
    fetchImages()
  },[]);

  async function fetchImages(){
    try{
      const response = await fetch("https://picsum.photos/v2/list?page=3&limit=5");
      if(!response.ok){
        throw new Error('네트워크에 문제가 있습니다.')
      }
      const data = await response.json(); //data는 배열이다. ImageList에다 옮겨야한다.
      setImageList(data) //imageList에 위 url 배열이들어감.
      
    }catch(error){
      console.error("데이터를 가져오는데 문제가 생겼습니다",error);
    }
  }
  return (
    <div>
      hello world
      <ImageList imgs={imageList}/>
    </div>
  );
}
export default App;
