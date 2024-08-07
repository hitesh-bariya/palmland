import { ReactNode, useState } from "react";

import { useField } from "formik";
import password_eye_disable from "./../../../public/assets/icons/password_eye_disable.svg";
import password_eye from "./../../../public/assets/icons/password_eye.svg";
import Image from "next/image";

const FormSelect = ({ label, placeholder = "", options, ...props }) => {
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
      <select
        placeholder={placeholder}
        className="form__field"
        style={{ height: "30px" }}
        {...field}
        {...props}
      >
        {options.map((dat, index) => (
          <option key={index} value={dat.value}>
            {dat.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
