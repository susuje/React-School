import { useState , useEffect } from "react";

export function useMouseLocation(iniVal){
    const [mouseLocation, setMouseLocation] = useState(iniVal || {x:0, y:0}); 
    // ||는 가장 마지막 t를 반환. 초기값을안주고 undefined일 경우도 있으니까.


    useEffect(()=>{
        window.addEventListener('mousemove',(event)=>{     
        setMouseLocation({x:event.x, y:event.y})
        }); 
    },[]);

    return mouseLocation
}

//이 함순 mouseLocation을 반환해아한다. 현재마우스의위치값