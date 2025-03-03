import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "generic-button" }) => {
  return (
    <button
      onClick={onClick}
      className={`${className}`}
      >
      {label}
    </button>
  );
};

export default Button;
