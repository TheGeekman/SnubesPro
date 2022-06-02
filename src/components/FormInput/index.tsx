import React, { InputHTMLAttributes } from "react";
import styles from "../../styles/Home.module.css";

interface FormInputProps {
  placeholder?: string;
  customStyle?: string;
  labelStyle?: string;
  inputStyle?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  showError?: boolean;
}

const FormInput = ({
  placeholder,
  customStyle,
  labelStyle,
  inputStyle,
  inputProps,
  showError,
}: FormInputProps) => {
  let inputErrorClass = showError ? styles.errorClass : "";
  return (
    <div className={`${styles.formElement} ${customStyle}`}>
      {placeholder && (
        <div className={`${styles.labelContainer} ${labelStyle}`}>
          <label>{placeholder}</label>
        </div>
      )}
      <input
        className={`${inputStyle} ${inputErrorClass} `}
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  );
};

export default FormInput;
