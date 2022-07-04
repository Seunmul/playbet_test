import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

//@ts-expect-error : .tsx
import App from "./App.tsx";
//@ts-expect-error : .tsx
import SignIn from "./page-login/sign-in.tsx";
//@ts-expect-error : .tsx
import SignUp from "./page-login/sign-up.tsx";
//@ts-expect-error : .tsx
import SignUpNick from "./page-login/sign-up-nick.tsx";
//@ts-expect-error : .tsx
import Board from "./page-board/board.tsx";

interface User {
  name: string;
  id: number;
  age: number;
}

const user: User = {
  name: "geonha",
  id: 1,
  age: 24,
};

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <Router>
    <Routes>
      <Route
        // path="/" exact render={(): JSX.Element=> <App message="developed by seunmul" user={user} />}
        path="/" element={<App message="developed by seunmul" user={user} />}
      />
        <Route path="/:ID" element={<App message="developed by seunmul" user={user}/>}/>
      <Route/>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUpNick" element={<SignUpNick />} />
      <Route path="/Board" element={<Board />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
