import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginPlatfrom from "../components/Login/LoginPlatform";
import Input_si from "../components/UI/Input_si";
import Btn_si_mj from "../components/UI/Btn_si_mj";
import ValidMsg from "../components/UI/ValidMsg";

import styles from "./SignUp.module.css";

const SignUp = (): JSX.Element => {
  const [isValid, setIsValid] = useState(true);

  const validHandler = () => {
    setIsValid(!isValid);
  };

  // <div>
  //   {[1, 2, 3].map((num, idx) => {
  //     <div key={idx}>{num}</div>;
  //   })}
  // </div>;
  // const Input_si_list = [
  //   ["아이디", "text", "아이디를 입력해주세요"],
  //   ["닉네임", "text", "(한글/영문/숫자) 최대 10자"],
  // ].map((info: Array<string>, idx: number) => {
  //   console.log(info),
  //     (
  //       <Input_si
  //         title={info[0]}
  //         type={info[1]}
  //         placeholder={info[2]}
  //         key={idx}
  //       />
  //     );
  // });

  return (
    <div className={styles["sign-up"]}>
      <div className={styles["sign-up-loginbox"]}>
        <div
          className={styles["sign-up-title"]}
          style={{ margin: "38px 0px 40px 0px" }}
        >
          간편 회원가입
        </div>
        <LoginPlatfrom style={{ marginBottom: "18px" }} />

        <div
          className={styles["sign-up-title"]}
          style={{ margin: "18px 0px 8px 0px" }}
        >
          PLAYBET 계정 만들기
        </div>
        {/* <>{Input_si_list}</> */}

        <Input_si
          title="아이디"
          type="text"
          placeholder="아이디를 입력해주세요"
        >
          <ValidMsg check={isValid}>
            아이디 혹은 비밀번호를 확인해주세요.
          </ValidMsg>
        </Input_si>

        <Input_si
          title="닉네임"
          type="text"
          placeholder="(한글/영문/숫자) 최대 10자"
        ></Input_si>

        <Input_si
          title="비밀번호"
          type="password"
          placeholder="(영문/숫자/특수문자) 8-16자리"
        ></Input_si>

        <Input_si
          title="비밀번호 확인"
          type="password"
          placeholder="(영문/숫자/특수문자) 8-16자리"
        ></Input_si>

        <Link
          to="/SignIn"
          style={{ textDecorationLine: "none", color: "black" }}
        >
          <Btn_si_mj style={{ margin: "20px 0px" }}>회원가입</Btn_si_mj>
        </Link>

        <div className={styles["rq-msg"]}>
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
