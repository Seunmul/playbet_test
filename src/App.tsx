import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./pages/Firstpage";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import SignUpNick from "./pages/Login/SignUpNick";
import BoardPage from "./pages/Board/BoardPage";

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
          <Route path="/SignUpNick:Platform" element={<SignUpNick />} />
          <Route path="/BoardPage" element={<BoardPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
