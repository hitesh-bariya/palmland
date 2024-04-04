import { ReactNode, useState } from "react";

import { useField } from "formik";
import password_eye_disable from "./../../../public/assets/icons/password_eye_disable.svg";
import password_eye from "./../../../public/assets/icons/password_eye.svg";
import Image from "next/image";

const FormInput = ({
  label,
  color = "#000000",
  placeholder = "",
  isPassword = false,
  ...props
}) => {
  // defineing variables
  const [visible, setVisible] = useState(false);
  const [field, meta] = useField({
    id: props.id,
    name: props.name || "",
    type: props.type,
  });
  return (
    <div className="form__field__block">
      <label htmlFor={props.id || props.name} className="form__label">
        {label}
      </label>
      {isPassword ? (
        <>
          <input
            color={color}
            className="form__field"
            name="password"
            type={visible ? "text" : "password"}
            placeholder=""
            autoComplete="off"
            {...field}
            {...props}
          />
          <Image
            onClick={() => setVisible(!visible)}
            className="password__eye__icon"
            src={visible ? password_eye_disable : password_eye}
            width={20}
            alt="password"
          />
        </>
      ) : (
        <input
          color={color}
          placeholder={placeholder}
          className="form__field"
          {...field}
          {...props}
        />
      )}
      {meta.touched && meta.error ? (
        <div className="field__error__text">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
