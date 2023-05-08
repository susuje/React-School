import React from "react";
import './MenuListItem.css'

export default function MenuListItem(props){
    
        const onItemClick=()=>{
            props.onClickEvt(props.mood)
            //setCurrentMood(moodEl)
        }
        const getBGColor=()=>{
            if(props.isSelected){
                return 'skyblue'
            }
        }
        return(    
        <li>
            <button className="btn-item" onClick={onItemClick} style={{backgroundColor: getBGColor()}}>기분이 : {props.mood}</button>
        </li>
        
    )
}