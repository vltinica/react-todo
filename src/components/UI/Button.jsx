import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { onClick, children, title, disabled = false } = props;
  return (
    <button
      {...props}
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
