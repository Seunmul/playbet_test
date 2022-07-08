import React from "react";
import { useEffect } from "react";

type Counter_info<Type> = {
  message: Type;
  ClickEventHandler: object;
  counterValue: number;
};

const Counter = (props: Counter_info<string>): JSX.Element => {
  const count = props.counterValue;
  // console.log(props)

  useEffect(() => {
    console.log("coutner event-handling");
  }, [count]);

  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <button
          onClick={() => {
            props.ClickEventHandler;
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Counter;
