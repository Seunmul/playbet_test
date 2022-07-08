import React from "react";
import styles from "./Input_si.module.css";

interface Input_si_info {
  title: string;
  type: string;
  placeholder: string;  
}

const Input_si = ({ title , type, placeholder }:Input_si_info): JSX.Element => {
  return (
    <div className={styles["input-si"]}>
      <div className={styles["input-si-title"]}>{title}</div>
      <input
        className={styles["input-si-box"]}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input_si;
