import React from 'react'
import { UserInfo } from './AppConsumer'

export default function HelloLicat() {
  return (
    <UserInfo.Consumer>
        {(value)=>{
            return <div>HelloLicat{value.id}</div>
            }
        }
    </UserInfo.Consumer>
    
  )
}


//Consumer는 거의안쓴다