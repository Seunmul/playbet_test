import React from "react";

import styles from "./Btn_si_mj.module.css";

interface Btn_si_mj_info {
  children?: string;
  className?: string;
  style?:object;
}
const Btn_si_mj = ({ children, className,style }: Btn_si_mj_info) => {
  return (
    <div className={`${styles["btn-si-mj-320"]} ${className}`} style={style}>{children}</div>
  );
};

export default Btn_si_mj;
