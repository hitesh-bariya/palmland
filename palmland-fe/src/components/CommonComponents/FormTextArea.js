import { ReactNode, useState } from "react";

import { useField } from "formik";
import password_eye_disable from "./../../../public/assets/icons/password_eye_disable.svg";
import password_eye from "./../../../public/assets/icons/password_eye.svg";
import Image from "next/image";

const FormTextArea = ({ label,rows="5", placeholder = "", ...props }) => {
  // defineing variables
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

      <textarea
        placeholder={placeholder}
        className="form__field"
        rows={rows}
        cols="100%"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className="field__error__text">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormTextArea;