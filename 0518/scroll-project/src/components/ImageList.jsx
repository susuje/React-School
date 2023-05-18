import React from 'react'

export default function ImageList({imgs}) {
  return (
    <ul>
        {imgs.map((item)=>{
            return (
                <li key={item.id}>
                    <img src={item.download_url} style={{width:400, height:250}}/>
                </li>
            )
        })}
    </ul>
  )
}
