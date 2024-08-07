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

const PropertyDealerRegisterForm = ({ setClickable }) => {
  const dispatch = useDispatch();

  // disable click in model
  const disableClick = (value) => {
    setClickable(value);
  };
  const [files, setFiles] = useState();
  const [fileObject, setFileObject] = useState();
  const onFileChange = (e) => {
    setFileObject(e.target.files);
    setFiles(e.target.value);
    // setFiles(e.target.files[0]);
  };
  // defineing variables
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });

  const [error, setError] = useState({
    firstname: "",
    email: "",
  });
  const validate = (name, value) => {
    if (name === "firstname" && value === "") {
      setError({ ...error, firstname: "Please enter first name" });
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError({ ...error, email: "Please enter valid email" });
    } else {
      setError({ ...error, email: "", firstname: "" });
    }
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validate(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setError({ ...error, email: "Please enter email" });
    }
    if (user.firstname === "") {
      setError({ ...error, firstname: "Please enter first name" });
    }
    // dispatch(closeModel());
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
        <p className="model__title">Register Now</p>
        {/* <p className="model__text">Register your self</p> */}
        <form onSubmit={handleSubmit} className="signIn__form">
          <div className="form__field__container">
            <div className="form__field__block">
              <label className="form__label">First Name</label>
              <input
                className="form__field"
                name="firstname"
                type="firstname"
                placeholder="firstname"
                autoComplete="off"
                value={user.firstname}
                onChange={(e) => onChange(e)}
              />
              <p className="field__error__text">{error.firstname}</p>
            </div>
            <div className="form__field__block">
              <label className="form__label">Last Name</label>
              <input
                className="form__field"
                name="lastname"
                type="lastname"
                placeholder="lastname"
                autoComplete="off"
                value={user.lastname}
                onChange={(e) => onChange(e)}
              />
              <p className="field__error__text">{error.lastname}</p>
            </div>
            <div className="form__field__block">
              <label className="form__label">Email</label>
              <input
                className="form__field"
                name="email"
                type="email"
                placeholder="email"
                autoComplete="off"
                value={user.email}
                onChange={(e) => onChange(e)}
              />
              <p className="field__error__text">{error.email}</p>
            </div>

            <div className="form__field__block">
              <label className="form__label">Mobile Number</label>
              <input
                className="form__field"
                name="phoneNumber"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={user.phoneNumber}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form__field__block">
              <label className="form__label">Profile Picture</label>
              <input
                name="file"
                type="file"
                label="Attachment"
                placeholder=""
                value={files}
                onChange={(e) => onFileChange(e)}
              />
            </div>
            <button
              className="signUp__button"
              onClick={handleSubmit}
              type="button"
            >
              Register
            </button>
          </div>
        </form>
        <div className="form__login__icon__block"></div>
       
      </div>
    </div>
  );
};

export default PropertyDealerRegisterForm;
