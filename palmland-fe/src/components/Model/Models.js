import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInModel from "./Models/SignInModel";
import ModelLayout from "./ModelLayout";
import ErrorModel from "./Models/ErrorModel";
import { closeModel } from "@/stores/Model/modelAction";
import SignUpModel from "./Models/SignUpModel";
import PropertyDealerRegisterForm from "./Models/PropertyDealerRegisterForm";
import LogoTourModel from "./Models/LogoTourModel";
import PropertyImagesModel from "./Models/PropertyImagesModel";
import BlogModelModel from "./Models/BlogModel";
import { useEffect } from "react";

function Models() {
  const dispatch = useDispatch();
  const modelType = useSelector((state) => state.model.modelType);
  const modelOpen = useSelector((state) => state.model.open);
  const [isClikable, setIsClickable] = useState(true);
  const setClickable = (value) => {
    setIsClickable(value);
  };
 
  return (
    <>
      {modelOpen && (
        <div
          className="model__layout"
          onClick={() => isClikable && dispatch(closeModel())}
        >
          {modelType === "SignInModel" && (
            <SignInModel setClickable={setClickable} />
          )}
          {modelType === "SignUpModel" && (
            <SignUpModel setClickable={setClickable} />
          )}
          {modelType === "PropertyDealerModel" && (
            <PropertyDealerRegisterForm setClickable={setClickable} />
          )}
          {modelType === "LogoTourModal" && (
            <LogoTourModel setClickable={setClickable} />
          )}
          {modelType === "PropertyImagesModel" && (
            <PropertyImagesModel setClickable={setClickable} />
          )}
          {modelType === "BlogModelModel" &&
          ( <BlogModelModel setClickable={setClickable}/>)

          }
          {modelType === "error" && <ErrorModel setClickable={setClickable} />}
        </div>
      )}
    </>
  );
}

export default Models;
