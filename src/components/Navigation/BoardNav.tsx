import React from "react";

import classes from './BoardNav.module.css'
const BoardNav = () => {
    return (
      <div className={classes["board-p-m-nav"]}>
        <div className={classes["board-p-m-nav-menu"]}>
          <div className={classes["board-p-m-menu"]}>
            <div className={classes["board-m-list"]}>전체글</div>
            <div className={classes["board-m-list"]}>ㅇㅈ글</div>
          </div>
          <button className={classes["board-p-m-btn"]}>글쓰기</button>
        </div>
      </div>
    );
  };

  export default BoardNav