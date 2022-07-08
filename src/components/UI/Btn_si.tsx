import React from "react";
import styles from "./Btn_si.module.css";


interface Btn_si_info {
  loginBy: string;
  imgSrc: string;  
}

const Btn_si = ({ loginBy, imgSrc }:Btn_si_info ): JSX.Element => {
  return (
    <div className={styles["btn-si"]} id={styles["btn-si-gg"]}>
      <div id={styles["login-icon-size"]}>
        <img className={styles["login-icon"]} src={imgSrc}></img>
      </div>
      <div>{loginBy}</div>
      <div id={styles["login-icon-size"]}></div>
    </div>
  );
};

export default Btn_si;
