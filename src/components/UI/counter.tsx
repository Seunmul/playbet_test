import React from "react";
import { useEffect } from "react";

type Counter_info<Type> = {
  message: Type;
  ClickEventHandler(): void;
  counterValue: number;
};

const Counter = ({
  message,
  ClickEventHandler,
  counterValue,
}: Counter_info<string>): JSX.Element => {

  
  useEffect(() => {
    console.log("coutner event-handling");
  }, []);

  return (
    <div>
      <p>You clicked {counterValue} times</p>
      <button onClick={ClickEventHandler}> Click me </button>
      <p>{message}</p>
    </div>
  );
};

export default Counter;
