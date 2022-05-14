import './sign-in.css';
// import { useState, useEffect } from "react";

const SignIn = ((): JSX.Element => {
  
  return (
    <div className="SignIn">
      <div className='loginbox'>
        <div className='title'>PLAYBET</div>
        <div className='input-si'>
          <div className='input-si-title'>아이디</div>
          <input className='input-si-box' type='text' placeholder='아이디를 입력하세요'></input>          
        </div>
        <div className='input-si'>
          <div className='input-si-title'>비밀번호</div>
          <input className='input-si-box' type='password' placeholder='비밀번호를 입력하세요'></input>
        </div>
        <div className='cf-msg'>아이디 혹은 비밀번호를 확인해주세요.</div>
        <div className='btn-si-mj-320'>로그인</div>
        <div className='btn-si' id='btn-si-gg'>
          <img className='login-icon' src='img/google24.png'></img>구글로 로그인</div>
        <div className='btn-si'id='btn-si-ff'>
          <img className='login-icon' src='img/facebook24.png'></img>페이스북으로 로그인</div>
        <div className='btn-si' id='btn-si-ap'>
          <img className='login-icon' src='img/apple24.png'></img>애플로 로그인</div>
        <div className='rq-msg'> 아직 계정이 없으세요?
          <span style={{color:'#4981F2'}}>회원가입</span>
        </div>
      </div>
    </div>
  );
})




export default SignIn;