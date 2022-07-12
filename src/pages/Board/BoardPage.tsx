import React from "react";

import NavBar from "./NavBar";
import BetList from "./BetList";
import Board from "./Board";

import classes from "./css/BoardPage.module.css";

const BoardPage = () => {
  return (
    <div className={classes["board-page"]}>
      <NavBar></NavBar>
      <BetList></BetList>
      <Board></Board>
      <footer className="board-footbar">최하단 푸터 바</footer>
    </div>
  );
};
export default BoardPage;
