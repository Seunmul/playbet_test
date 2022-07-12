import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginPlatfrom from "../../components/Login/LoginButton";
import Input_si from "../../components/UI/Input_si";
import Btn_si_mj from "../../components/UI/Btn_si_mj";
import ValidMsg from "../../components/ValidMsg";

import styles from "./SignIn.module.css";

const SignIn = (): JSX.Element => {
  const [isValid, setIsValid] = useState(true);

  const validHandler = () => {
    setIsValid(!isValid);
  };

  return (
    <div className={styles["sign-in"]}>
      <div className={styles["sign-in-loginbox"]}>
        <div
          className={styles["sign-in-title"]}
          style={{ margin: "60px 0px 0px 0px" }}
        >
          PLAYBET
        </div>
        <Input_si
          title="아이디"
          type="text"
          placeholder="아이디를 입력하세요"
        />
        <Input_si
          title="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
        >
          <ValidMsg check={isValid}>
            아이디 혹은 비밀번호를 확인해주세요.
          </ValidMsg>
        </Input_si>
        <Link
          to="/BoardPage"
          style={{ textDecorationLine: "none", color: "black" }}
        >
          <Btn_si_mj style={{ marginTop: "24px" }}>로그인</Btn_si_mj>
        </Link>
        <LoginPlatfrom />

        <div className={styles["rq-msg"]}>
          아직 계정이 없으세요?
          <Link to="/SignUp">
            <span style={{ color: "#4981F2" }}>회원가입</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
