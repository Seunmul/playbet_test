import "./css/sign-up.css";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const SignUp = (): JSX.Element => {
  return (
    <div className="sign-up">
      <div className="sign-up-loginbox">
        <div className="sign-up-title" style={{ margin: "38px 0px 40px 0px" }}>
          간편 회원가입
        </div>
        <Link
          to="/SignUpNick"
          style={{ textDecorationLine: "none", color: "black" }}
        >
          <div className="btn-si" id="btn-si-gg">
            <div id="login-icon-size">
              <img className="login-icon" src="img/google24.png"></img>
            </div>
            <div>구글로 로그인</div>
            <div id="login-icon-size"></div>
          </div>
        </Link>

        <div className="btn-si" id="btn-si-ff">
          <div id="login-icon-size">
            <img className="login-icon" src="img/facebook24.png"></img>
          </div>
          <div>페이스북으로 로그인</div>
          <div id="login-icon-size"></div>
        </div>

        <div className="btn-si" id="btn-si-ap">
          <div id="login-icon-size">
            <img className="login-icon" src="img/apple24.png"></img>
          </div>
          <div>애플로 로그인</div>
          <div id="login-icon-size"></div>
        </div>

        <div className="sign-up-title" style={{ margin: "18px 0px 8px 0px" }}>
          PLAYBET 계정 만들기
        </div>
        <div className="input-si-validation">
          <div className="input-si-title">아이디</div>
          <input
            className="input-si-box"
            type="text"
            placeholder="아이디를 입력해주세요"
          ></input>
        </div>
        <div className="cf-msg">아이디 혹은 비밀번호를 확인해주세요.</div>

        <div className="input-si">
          <div className="input-si-title">닉네임</div>
          <input
            className="input-si-box"
            type="text"
            placeholder="(한글/영문/숫자) 최대 10자"
          ></input>
        </div>
        <div className="input-si">
          <div className="input-si-title">비밀번호</div>
          <input
            className="input-si-box"
            type="password"
            placeholder="(영문/숫자/특수문자) 8-16자리"
          ></input>
        </div>
        <div className="input-si">
          <div className="input-si-title">비밀번호 확인 </div>
          <input
            className="input-si-box"
            type="password"
            placeholder="(영문/숫자/특수문자) 8-16자리"
          ></input>
        </div>

        <Link
          to="/SignIn"
          style={{ textDecorationLine: "none", color: "black" }}
        >
          <div className="btn-si-mj-320" style={{ margin: "40px 0px" }}>
            회원가입
          </div>
        </Link>

        <div className="rq-msg">
          이미 계정이 있으신가요?
          <Link to="/SignIn">
            <span style={{ color: "#4981F2" }}>로그인</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
