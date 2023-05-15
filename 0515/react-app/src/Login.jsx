import React, { useState } from 'react'

export default function Login() {
    const [email,setEmail] = useState('');
    const [pw,setPw] = useState('');

    const [emailValid,setEmailValid] = useState(false);
    const [pwValid,setPwValid] = useState(false);

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }
    const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
        setPwValid(true);
        } else {
        setPwValid(false);
        }
    };
    return (
    <div className='page'>
        <div className='titleWrap'>
            이메일과 비밀번호를<br/>
            입력해주세요
        </div>
        <div className='contentWrap'>
            <div className='inputTitle'>이메일 주소</div>
            <div className='inputWrap'>
                <input className='input' placeholder='test@gmail.com' value={email} onChange={handleEmail}/>
            </div>
            <div className='errorMessageWrap'>
                올바른 이메일을 입력해주세요.
            </div>

            <div style={{marginTop:"26px"}} className='inputTitle' value={pw} onChange={handlePw}>비밀번호</div>
            <div className='inputWrap'>
                <input className='input' placeholder='영문, 숫자, 특수문자 포함 8자 이상'/>
            </div>
            <div className='errorMessageWrap'>
                영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
            </div>
        </div>

        <div>
            <button disabled={true} className='bottomButton'>확인</button>
        </div>
    </div>
  )
}
