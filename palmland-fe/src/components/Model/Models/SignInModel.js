import {
  closeModel,
  openErrorModel,
  openModel,
} from "@/stores/Model/modelAction";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import password_eye from "../../../../public/assets/icons/password_eye.svg";
import password_eye_disable from "../../../../public/assets/icons/password_eye_disable.svg";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/CommonComponents/FormInput";
import { signin } from "@/stores/Auth/authAction";

function SignInModel({ setClickable }) {
  const dispatch = useDispatch();

  const disableClick = (value) => {
    setClickable(value);
  };

  const openSignUpModel = () => {
    dispatch(openModel("SignUpModel", {}));
  };
  return (
    <div
      onMouseOver={() => disableClick(false)}
      onMouseLeave={() => disableClick(true)}
      className="model__container"
    >
      <div className="inner__model">
        <p className="model__title">LOGIN</p>
        <p className="model__text">Please enter your login and password!</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .trim()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .trim()
              .min(8, "Must be 8 characters or more")
              .required("Required"),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              dispatch(signin(values));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form className="signIn__form">
              <div className="form__field__container">
                <FormInput
                  name="email"
                  type="text"
                  label="Email"
                  placeholder=""
                />

                <FormInput
                  name="password"
                  label="Password"
                  placeholder=""
                  isPassword={true}
                />
                <p className="forgot__password">Forgot password?</p>

                <button className="signIn__button" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="form__login__icon__block"></div>
        <p>
          <span className="signIn__model__bottom__text">
            Don't Have an account?{" "}
          </span>
          <span
            onClick={openSignUpModel}
            className="model__text model__clickable__text"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignInModel;
