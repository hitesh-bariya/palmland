import { closeModel } from "@/stores/Model/modelAction";
import React from "react";
import { useDispatch } from "react-redux";

function ErrorModel({ setClickable }) {
  const dispatch = useDispatch();
  const disableClick = (value) => {
    setClickable(value);
  };
  return (
    <div
      onMouseOver={() => disableClick(false)}
      onMouseLeave={() => disableClick(true)}
      className="model"
    >
      <h1>ErrorModel</h1>
      <button onClick={() => dispatch(closeModel())}>
        <h1>X</h1>
      </button>
    </div>
  );
}

export default ErrorModel;
