import "./css/sign-in.css";
import { Link } from "react-router-dom";
// @ts-expect-error : .tsx
import Input_si from "../components/Input_si.tsx";
// @ts-expect-error : .tsx
import Btn_si from "../components/Btn_si.tsx";

const SignIn = (): JSX.Element => {
  return (
    <div className="sign-in">
      <div className="sign-in-loginbox">
        <div className="sign-in-title" style={{ margin: "60px 0px 0px 0px" }}>
          PLAYBET
        </div>
        <Input_si
          title="아이디"
          input_type="text"
          placeholder="아이디를 입력하세요"
        ></Input_si>
        <Input_si
          title="비밀번호"
          input_type="password"
          placeholder="비밀번호를 입력하세요"
        ></Input_si>
        <div className="cf-msg">아이디 혹은 비밀번호를 확인해주세요.</div>

        <Link
          to="/Board"
          style={{ textDecorationLine: "none", color: "black" }}
        >
          <div className="btn-si-mj-320">로그인</div>
        </Link>

        <Link
          to="/SignUpNick"
          style={{ textDecorationLine: "none", color: "black" }}
        >
          <Btn_si loginBy="구글로 로그인" imgSrc="img/google24.png"></Btn_si>
        </Link>
        <Btn_si loginBy="페이스북으로 로그인" imgSrc="img/facebook24.png"></Btn_si>
        <Btn_si loginBy="애플로 로그인" imgSrc="img/apple24.png"></Btn_si>
        <div id="btn-si-ap"> </div>
        
        <div className="rq-msg">
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
