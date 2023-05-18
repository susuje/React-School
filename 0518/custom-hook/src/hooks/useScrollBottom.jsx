import { useState, useEffect } from "react";

export default function useScrollBottom() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{ //스크롤이될때일어나는이벤트
          setIsBottom(Math.ceil(document.documentElement.scrollTop+window.innerHeight+30)>=document.documentElement.offsetHeight) //불리언값을반환
        })
    },[]);

    return isBottom;
}


//hook은 함수다!
//document.documentElement.scrollTop //상단으로부터얼마나스크롤되었는지
//document.documentElement.offsetHeight //사용자가보고잇는html문서의 총 높이값을 알려준다.
//사용자가 보고있는 현재 뷰포트의 높이 window.innerHeight
//document.documentElement.scrollTop+window.innerHeight //마지막 페이지에 도달하면 값이 사용자가보고잇는html문서의 총 높이값(offsetHeight)이됨.