import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// @ts-expect-error : .tsx
import Counter from "./components/counter.tsx";
import "./firstpage.css";
// @ts-expect-error : .tsx
import Input_si from "./components/Input_si.tsx";
// @ts-expect-error : .tsx
import Btn_si from "./components/Btn_si.tsx";


interface User {
  name: string;
  id: number;
  age: number;
}
type AppProps<Type> = {
  message: Type;
  user: User;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
//const App = ({ message }: AppProps) => <div>{message}</div>;

// you can choose annotate the return type so an error is raised if you accidentally return some other type
//const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

// you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//const App = ({ message }: { message: string }) => <div>{message}</div>;

type Log = string | number;
const log: Log = `[22-06-27] 1. testing typescript, react + react-dom-router\n\n
 [22-06-28] 2. sign-up-nickname make\n
 [22-06-29] 3. board.tsx make\n
 [22-07-04] 4. structure optimazation\n

 `;

const FirstPage = ({ message, user }: AppProps<string>): JSX.Element => {
  const [count, setCount] = useState(0);

  const output = identity<string>("myString");
  const outnum = identity<number>(10);
  const outtest = identity(10);

  const params = useParams(); //for react router

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  useEffect(() => {
    console.log(user as object, user.name);
    console.log(typeof output, typeof outnum, typeof outtest);
  }, []);

  useEffect(() => {
    console.log("counter lodaed - " + count + " times\n\n");
    document.title = `You clicked ${count} times : ${params.ID}`;
  }, [count]);

  return (
    <div className="firstpage">
      <div className="main-title">PLAYBET</div>
      <Counter
        ClickEventHandler={() => {
          console.log("counter clicked");
          setCount(count + 1);
        }}
        counterValue={count}
      />

      <div className="msg">
        <br></br>
        {message}
        <br></br>--------<br></br>
        <Link to="/SignIn">Go to SIGN-UP-PAGE</Link>
        <br></br> <br></br>
        <p className="log">
          {log}
          <br></br>
          <br></br>
        </p>
      </div>

      <div> ID:{params.ID}</div>
      <Input_si
        title="비밀번호"
        input_type="password"
        placeholder="비밀번호를 입력하세요"
      ></Input_si>
      <Btn_si
       loginBy="구글로 로그인"
       imgSrc="img/google24.png"
      ></Btn_si>
    </div>
  );
};

export default FirstPage;

// const [loaded, setLoaded] = useState(0);
// const test = <Type,>(x: Type): Type => {
//   document.title = `You clicked ${count} times`;
//   console.log("loaded : " + loaded + "-----\n");
//   setLoaded(loaded + 1);

//   return x;
// };