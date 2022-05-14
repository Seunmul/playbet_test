import './App.css';
import { useState, useEffect } from "react";
interface User {
  name: string;
  id: number;
  age: number;
}
type AppProps<Type> = {
  message: Type;
  user: User
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
//const App = ({ message }: AppProps) => <div>{message}</div>;

// you can choose annotate the return type so an error is raised if you accidentally return some other type
//const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

// you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//const App = ({ message }: { message: string }) => <div>{message}</div>;



const App = ({ message, user }: AppProps<string>): JSX.Element => {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(0);
  
  const test = <Type,>(x: Type): Type => {
    
    function identity<Type>(arg: Type): Type {
      return arg;
    }
    const output = identity<string>("myString");
    const outnum = identity<number>(10);
    const outtest = identity(10);

    document.title = `You clicked ${count} times`;
    console.log("-----\n"+loaded);
    setLoaded(loaded+1);
    console.log(message);
    console.log(user as object)
    console.log(user.name);
    console.log(typeof output);
    console.log(typeof outnum);
    console.log(typeof outtest);
    return x;
  }

  useEffect(() => {
    console.log(test("---closed---"))
  },[]);
  return (
    <div className="App">
      <div className='title'>PLAYBET</div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div>{message}</div>
    </div>
  );
}




export default App;
