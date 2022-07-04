import React from "react";
import { useState, useEffect } from "react";

type AppProps<Type> = {
  message: Type;
};

const Counter = (props): JSX.Element => {
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
            props.ClickEventHandler()
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Counter;
