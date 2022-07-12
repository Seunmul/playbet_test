import React from "react";

import BoardNav from "../../components/Navigation/BoardNav";
import classes from "./css/Board.module.css";

const Board = () => {
  return (
    <div className={classes["board-p"]}>
      <div className={classes["board-p-main"]}>
        <BoardNav />

        <div className={classes["board-p-m-table"]}>
          글목록
          <div className={classes["board-p-m-table-fr"]}>글목록 첫 행</div>
          {[1, 2, 3].map((num) => (
            <div className={classes["board-p-m-table-list"]} key={num}>
              {num}
            </div>
          ))}
        </div>

        <BoardNav />

        <div className={classes["board-p-m-foot"]}>
          게시판 풋바
          <div className={classes["board-p-footer-list"]}> 글 목록 번호</div>
          <div className={classes["board-p-footer-search"]}> 글 검색</div>
        </div>
      </div>

      <div className={classes["board-p-sidebar"]}>사이드바</div>
    </div>
  );
};

export default Board;
