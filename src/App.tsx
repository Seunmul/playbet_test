import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./firstpage";
import SignIn from "./page-login/sign-in";
import SignUp from "./page-login/sign-up";
import SignUpNick from "./page-login/sign-up-nick";
import Board from "./page-board/board";

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

const message = "developed by seunmul";

const App = (): JSX.Element => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<FirstPage message={message} user={user} />}
          />
          <Route
            path="/:ID"
            element={<FirstPage message={message} user={user} />}
          />
          <Route />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignUpNick" element={<SignUpNick />} />
          <Route path="/Board" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
