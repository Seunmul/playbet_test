import React from "react";
import { Link } from "react-router-dom";

import Btn_si from "../UI/Btn_si";

interface Props {
  style?:object;
}

const LoginPlatform = ({style}:Props) => {
  
  return (
    <div className="LoginPlatFrom"style={style}>
      <Link
        to="/SignUpNick:gg"
        style={{ textDecorationLine: "none", color: "black" }}
      >
        <Btn_si loginBy="구글로 로그인" imgSrc="img/google24.png" />
      </Link>
      <Link
        to="/SignUpNick:fb"
        style={{ textDecorationLine: "none", color: "black" }}
      >
        <Btn_si loginBy="페이스북으로 로그인" imgSrc="img/facebook24.png" />
      </Link>
      <Link
        to="/SignUpNick:ap"
        style={{ textDecorationLine: "none", color: "black" }}
      >
        <Btn_si loginBy="애플로 로그인" imgSrc="img/apple24.png" />
      </Link>
    </div>
  );
};

export default LoginPlatform;
