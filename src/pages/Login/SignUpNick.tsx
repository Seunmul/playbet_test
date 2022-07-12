import React from "react";
import { Link, useParams } from "react-router-dom";

import Input_si from "../../components/UI/Input_si";
import Btn_si_mj from "../../components/UI/Btn_si_mj";
import styles from "./SignUpNick.module.css";

const SignUpNick = (): JSX.Element => {
  const params = useParams(); //for react router

  let through: string;
  console.log(params)
  switch (params.Platform) {
    case ":gg":
      through = "구글";
      break;
    case ":fb":
      through = "페이스북으";
      break;
    case ":ap":
      through = "애플";
      break;
    default:
      through = "";
      break;
  }

  return (
    <div className={styles["sign-up-nick"]}>
      <div className={styles["sign-up-nick-loginbox"]}>
        <div
          className={styles["sign-up-nick-title"]}
          style={{ margin: "38px 0px 40px 0px" }}
        >
          {through}로 회원가입이 완료되었습니다.<br></br>
          사용할 닉네임을 입력해주세요
        </div>
        <Input_si
          title="닉네임"
          type="text"
          placeholder="(한글/영문/숫자) 최대 10자"
        />

        <Link
          to="/SignIn"
          style={{ textDecorationLine: "none", color: "black" }}
        >
          <Btn_si_mj style={{margin:"40px 0px"}}>회원가입</Btn_si_mj>
        </Link>
      </div>
    </div>
  );
};

export default SignUpNick;
