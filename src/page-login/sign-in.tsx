import './css/sign-in.css';
// import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const SignIn = ((): JSX.Element => {
  
  return (
    <div className="SignIn">
      <div className='SignIn-loginbox'>
        <div className='SignIn-title' style={{margin:'60px 0px 0px 0px'}}>PLAYBET</div>
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
          <div><img className='login-icon' src='img/google24.png'></img></div>
          <div style={{margin:'80px 80px'}}>구글로 로그인</div>
        </div>
        <div className='btn-si'id='btn-si-ff'>
          <div><img className='login-icon' src='img/facebook24.png'></img></div>
          <div style={{margin:'60px 60px'}}>페이스북으로 로그인</div>
        </div>
        <div className='btn-si' id='btn-si-ap'>
          <div><img className='login-icon' src='img/apple24.png'></img></div>
          <div style={{margin:'80px 80px'}}>애플로 로그인</div>
        </div>
        <div className='rq-msg'> 아직 계정이 없으세요?
          <Link to="/SignUp"><span style={{color:'#4981F2'}}>회원가입</span></Link>
        </div>
      </div>
    </div>
  );
})




export default SignIn;