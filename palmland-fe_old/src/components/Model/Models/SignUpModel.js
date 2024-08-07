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
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/CommonComponents/FormInput";
import FormSelect from "@/components/CommonComponents/FormSelect";
import PhoneInput from "@/components/CommonComponents/PhoneInput";
import { signup } from "@/stores/Auth/authAction";

function SignUpModel({ setClickable }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("auth-token");
  // disable click in model
  const disableClick = (value) => {
    setClickable(value);
  };

  const openSignInModel = () => {
    dispatch(openModel("SignInModel", {}));
  };
  return (
    <div
      onMouseOver={() => disableClick(false)}
      onMouseLeave={() => disableClick(true)}
      className="model__container"
    >
      <div className="inner__model">
        {/* <button onClick={() => dispatch(openErrorModel("hello"))}>
          <h1>X</h1>
        </button> */}
        <p className="model__title">SIGN UP</p>
        <p className="model__text">Register your self</p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: "DEALER",
            phoneNo: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .trim()
              .min(3, "Must be 3 characters or more")
              .required("Required"),
            email: Yup.string()
              .trim()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .trim()
              .min(8, "Must be 8 characters or more")
              .required("Required"),
            phoneNo: Yup.string()
              .max(12, "Must be 12 digits or less")
              .min(10, "Must be 10 digits or more")
              .matches(/^\d{10,12}$/, "Must be only digits")
              .required("Required"),
          })}
          onSubmit={(values, actions) => {
            // console.log("values===>", values);
            setTimeout(() => {
              dispatch(signup(values));
              // alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form className="signIn__form">
              <div className="form__field__container">
                <FormInput
                  color="#ffffff"
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder=""
                />
                <FormInput
                  color="#ffffff"
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder=""
                />
                <FormInput
                  color="#ffffff"
                  name="email"
                  type="text"
                  label="Email"
                  placeholder=""
                />
                <FormInput
                  color="#ffffff"
                  name="password"
                  label="Password"
                  placeholder=""
                  isPassword={true}
                />
                {/* <FormSelect
                  name="role"
                  label="User Type"
                  placeholder=""
                  options={[
                    { label: "User", value: "USER" },
                    { label: "Property Dealer", value: "DEALER" },
                  ]}
                /> */}
                <PhoneInput
                  name="phoneNo"
                  label="Phone Number"
                  placeholder=""
                  maxLength="99999999999999"
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
          <span className="signIn__model__bottom__text">Have an account? </span>
          <span
            onClick={openSignInModel}
            className="model__text model__clickable__text"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpModel;
