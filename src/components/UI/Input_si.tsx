import React, { ReactElement } from "react";
import styles from "./Input_si.module.css";

interface Input_si_info {
  title: string;
  type: string;
  placeholder: string;
  children?: ReactElement;
}

const Input_si = ({
  title,
  type,
  placeholder,
  children,
}: Input_si_info): JSX.Element => {
  
  return (
    <>
      <div className={styles["input-si"]}>
        <div className={styles["input-si-title"]}>{title}</div>
        <input
          className={styles["input-si-box"]}
          type={type}
          placeholder={placeholder}
        ></input>
      </div>
      {children}
    </>
  );
};

export default Input_si;
