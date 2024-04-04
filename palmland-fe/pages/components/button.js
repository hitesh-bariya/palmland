import React from "react";

const ButtonPage = () => {
  const log = () => {
  };
  return (
    <div className=" button__page">
      <div className="button__block">
        <Button
          onClick={log}
          content="Primary Button"
          varient="p"
        ></Button>
        <Button
          onClick={log}
          content="Primary Bold Button"
          varient="p__bold"
        ></Button>
        <Button
          onClick={log}
          content="Secondary Button"
          varient="s"
        ></Button>
        <Button
          onClick={log}
          content="Primary White Button"
          varient="p__white"
        ></Button>
        <Button
          onClick={log}
          content="Secondary White Button"
          varient="s__white"
        ></Button>
        <Button
          onClick={log}
          content="View More"
          varient="p__underline"
        ></Button>
        <Button
          onClick={log}
          content="View More"
          varient="s__underline"
        ></Button>
      </div>
    </div>
  );
};

export default ButtonPage;

export const Button = ({ content, varient, onClick, disabled, margin }) => {
  return (
    <button
      className={varient}
      onClick={onClick}
      style={{ margin }}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
