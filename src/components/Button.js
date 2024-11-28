import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  isDisabled = false,
  onClick,
  customClass = "",
  customStyle = {},
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${customClass}`}
      style={customStyle}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
