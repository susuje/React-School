import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import './MenuList.css'

export default function MenuList(props){
    const menus = ["좋아요😎","정말 좋아요😍","최고에요🤩","미쳣써요🤪"]
    return(
        <ul className="container-list">
            {menus.map((moodEl)=>{
                //mood는 기분의 텍스트,  isSelected: 현재 사용자의 기분이 맞는지 틀린지 전달
                //props.onItemClick: setcurrentMood 현재기분을변경하는함수
                return (<MenuListItem mood={moodEl} isSelected={props.mood===moodEl} onClickEvt={props.onItemClick}/>)
            })}
            
        </ul>
    )
}

//mood={currentMood} onItemClick={setCurrentMood}


//<MenuListItem mood="좋아요! isSelected={props.mood==="좋아요!} onClick={props.onItemClick}/>