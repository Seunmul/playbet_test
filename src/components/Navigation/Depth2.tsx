import React from "react";
import classes from "./Depth2.module.css";
const Depth2 = () => {
  return (
    <div className={classes.border}>
      <div className={classes.main}>
        <div className={classes.list}>자유게시판</div>
        <div className={classes.list}>경기 목록</div>
      </div>
    </div>
  );
};

export default Depth2;
