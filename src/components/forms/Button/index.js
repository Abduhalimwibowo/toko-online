import React from "react";
import "./styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btnGue" {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
