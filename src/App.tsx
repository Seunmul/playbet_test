import "./App.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
 [22-06-29] 3. board.tsx make
 `;

const App = ({ message, user }: AppProps<string>): JSX.Element => {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(0);

  const output = identity<string>("myString");
  const outnum = identity<number>(10);
  const outtest = identity(10);

  const params = useParams(); //for react router

  const test = <Type,>(x: Type): Type => {
    document.title = `You clicked ${count} times`;
    console.log("loaded : " + loaded + "-----\n");
    setLoaded(loaded + 1);

    return x;
  };

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  useEffect(() => {
    console.log(user as object, user.name);
    console.log(typeof output, typeof outnum, typeof outtest);
  }, []);

  useEffect(() => {
    console.log(message, count);
    test("---closed---");
  }, [count]);

  return (
    <div className="App">
      <div className="main-title">PLAYBET</div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <div className="msg">
        <br></br>
        {message}
        <br></br>
        --------
        <br></br>
        <Link to="/SignIn">Go to SIGN-UP-PAGE</Link>
        <br></br>
        <br></br>
        <p className="log">
          {log}
          <br></br>
          <br></br>
        </p>
      </div>

      <div> ID:{params.ID}</div>
    </div>
  );
};


export default App;
