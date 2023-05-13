import React from "react";
import styles from "./styles.module.css"

type InputProps = {
  label: string;
} & React.HTMLProps<HTMLInputElement>

const Input:React.FC<InputProps> = (props) => {
  return (
    <div className={styles["input-container"]}>
    <div className={styles["input-label"]}>
      {props.label}
    </div>
    <div className={styles["c-input"]}>
    <input {...props} className={styles["input-val"]}/>
    </div>
    </div>
  )
}

export default Input