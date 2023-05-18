import React, { useEffect, useState } from 'react'
import ImageList from './components/ImageList';
import useScrollBottom from './hooks/useScrollBottom';
import Loading from './components/Loading';

  //배열로받아오기
  // const images = [{"id":"10","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/6J--NXulQCs","download_url":"https://picsum.photos/id/10/2500/1667"},{"id":"11","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Cm7oKel-X2Q","download_url":"https://picsum.photos/id/11/2500/1667"},{"id":"12","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/I_9ILwtsl_k","download_url":"https://picsum.photos/id/12/2500/1667"},{"id":"13","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/3MtiSMdnoCo","download_url":"https://picsum.photos/id/13/2500/1667"},{"id":"14","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/IQ1kOQTJrOQ","download_url":"https://picsum.photos/id/14/2500/1667"}]

function App() {


  const [imageList, setImageList] = useState([]); //받아오는이미지가배열이니까
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading]= useState(false); //fetch이미지함수가실행될때 로딩이되어야함
  console.log('로딩중인가?'+isLoading)

  const isBottom=useScrollBottom();  
  //바닥에닿아 isBottom이 true가될때 새로운 이미지들을 불러와야함
  console.log(isBottom)
  
  useEffect(()=>{
    fetchImages();
  },[fetchPage]); // 맨처음마운트됐을때  실행되고, fetchPage가 변하면 실행됨

  useEffect(()=>{
    if(isBottom){ //isBottom이 true라면
      setFetchPage((prevPage)=>{
        return prevPage+1 //fetchPage의 값이바뀐다
      })
    }
  },[isBottom])

  //fetch 로 받아오는방법
  async function fetchImages(){
    setIsLoading(true); 
    try{
        const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`);
        if(!response.ok){
          throw new Error('네트워크에 문제가 있습니다.')
        }
      const data = await response.json();
       //response.json() 얘도 프로미스 반환해서 비동기로 해야해서 await해야함
      //console.log(data)
      setImageList((prevImages)=>{
        return [...prevImages, ...data]
      }); //imageList안에 이미지배열이들어간다ㅏ. 
      //이거땜시 imageList가 갱신되서 컴포넌트가 새로 렌더링됨. useEffect로 fetchImages가 실행됨 그래서 무한대로댐. 
      //console.log(imageList)
      setIsLoading(false);
    }catch(error){
      console.error("데이터를 가져오는데 문제가 생겼습니다.",error);
      setIsLoading(false);
    }
  }  //이러한 fetch를 useEffect에 담아서 실행시켯죠?

  return (
    <div>
      hello world
      <ImageList imageList={imageList}/>
      {/* <ImageList imageList={images}/>  배열로받아올때*/} 
      {isLoading && <Loading/>} 
      {/* isLoading이 true면 Loading반환해 */}
    </div>
  );
}
export default App;



// const [mouseLocation, setMouseLocation] = useState({x:0, y:0});

// //useEffect는 컴포넌트렌더링끝나고 실행됨
// useEffect(()=>{
//   window.addEventListener('mousemove',(event)=>{     //이런 이벤트를 제거하고싶을때 return 해서 클린업한다
//     //console.log(event.x , event.y);
//     setMouseLocation({x:event.x, y:event.y})
//   }); 
  

// },[]);




//네모색깔바꾸는거
// import React, { useEffect, useState } from 'react'
// import TestBox from './components/TestBox';
// import { useMouseLocation } from './hooks/useMouseLocation';



// function App() {
//   const location = useMouseLocation();

//   return (
//     <div>
//       hello world
//       <TestBox/>
//       {`x축 위치: ${location.x}, y축 위치: ${location.y}`}
//     </div>
//   );
// }
// export default App;



// {datas.map((item)=>{
//   return <img key={item.id} src={item.download_url} style={{width:item.width,height:item.height}}/>
// })}



