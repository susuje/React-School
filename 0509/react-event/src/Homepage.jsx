import React from 'react'

export default function Homepage({user}) {
    return (
        <>
            <h1>{user.name}님 홈페이지에 오신것을 환영합니다!!</h1>
            <button>로그아웃</button>
        </>
    )
}