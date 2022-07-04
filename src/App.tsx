import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//@ts-expect-error : .tsx
import FirstPage from "./firstpage.tsx";
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

const message = 'developed by seunmul';

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
