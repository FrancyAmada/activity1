import React from "react";

type CardProps = {
  title: string;
  description: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, description, className = "generic-card" }) => {
  return (
    <div className={`${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
