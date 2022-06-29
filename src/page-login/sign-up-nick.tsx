import React from "react";
import { Link } from "react-router-dom";
import "./css/sign-up-nick.css";

const SignUpNick = (): JSX.Element => {
  return (
    <div className="sign-up-nick">
      <div className="sign-up-nick-loginbox">
        <div
          className="sign-up-nick-title"
          style={{ margin: "38px 0px 40px 0px" }}
        >
          구글로 회원가입이 완료되었습니다.<br></br>
          사용할 닉네임을 입력해주세요
        </div>

        <div className="input-si">
          <div className="input-si-title">닉네임</div>
          <input
            className="input-si-box"
            type="text"
            placeholder="(한글/영문/숫자) 최대 10자"
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
      </div>
    </div>
  );
};

export default SignUpNick;
