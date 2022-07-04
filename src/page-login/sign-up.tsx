import "./css/sign-up.css";
import { Link } from "react-router-dom";
// @ts-expect-error : .tsx
import Input_si from "../components/Input_si.tsx";
// @ts-expect-error : .tsx
import Btn_si from "../components/Btn_si.tsx";

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
          <Btn_si loginBy="구글로 로그인" imgSrc="img/google24.png"></Btn_si>
        </Link>
        <Btn_si loginBy="페이스북으로 로그인" imgSrc="img/facebook24.png"></Btn_si>
        <Btn_si loginBy="애플로 로그인" imgSrc="img/apple24.png">
        </Btn_si>

        <div className="sign-up-title" style={{ margin: "18px 0px 8px 0px" }}>
          PLAYBET 계정 만들기
        </div>

        <Input_si
          title="아이디"
          input_type="text"
          placeholder="아이디를 입력해주세요"
        ></Input_si>
        <div className="cf-msg">아이디 혹은 비밀번호를 확인해주세요.</div>

        <Input_si
          title="닉네임"
          input_type="text"
          placeholder="(한글/영문/숫자) 최대 10자"
        ></Input_si>

        <Input_si
          title="비밀번호"
          input_type="password"
          placeholder="(영문/숫자/특수문자) 8-16자리"
        ></Input_si>

        <Input_si
          title="비밀번호 확인"
          input_type="password"
          placeholder="(영문/숫자/특수문자) 8-16자리"
        ></Input_si>

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
