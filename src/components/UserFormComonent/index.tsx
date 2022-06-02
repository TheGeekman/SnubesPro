import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../assets/images";
import FormInput from "../../components/FormInput";
import { phoneCodes, phoneCodesMap } from "../../data/phoneCodes";
import { addDetails } from "../../redux/store/slices/userSlice";
import styles from "../../styles/Home.module.css";
import { storeProps, userDataType } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/globalFunctions";
interface UserFormProps {}

const UserFormComponent = (props: UserFormProps) => {
  const [userInfo, setUserInfo] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
  });
  const [formError, setFormError] = useState({
    companyError: false,
    nameError: false,
    phoneError: false,
    emailError: false,
  });
  const [footerUserInfo, setFooterUserInfo] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
  });

  const [footerFormError, setFooterFormError] = useState({
    companyError: false,
    nameError: false,
    phoneError: false,
    emailError: false,
  });
  const dispatch = useDispatch();

  const userData = useSelector((state: storeProps) => state.userInfo);

  const [countryCode, setCountryCode] = useState("+123");

  const handleInput = (
    e: any,
    type: "company" | "name" | "phone" | "email",
    errorKey: "companyError" | "nameError" | "phoneError" | "emailError"
  ) => {
    const data = { ...userInfo };
    data[type] = e.target.value;
    let errorData = { ...formError };
    if (errorData[errorKey]) {
      errorData[errorKey] = false;
      setFormError(errorData);
    }
    setUserInfo(data);
  };

  const handleFooterFormInput = (
    e: any,
    type: "company" | "name" | "phone" | "email"
  ) => {
    const data = { ...footerUserInfo };
    data[type] = e.target.value;
    setFooterUserInfo(data);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(userInfo);
    formValidator(userInfo);
  };

  useEffect(() => {
    const getGeoInfo = () => {
      axios
        .get("https://ipapi.co/json/")
        .then((response) => {
          let data = response.data;
          setCountryCode(data?.country_calling_code);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getGeoInfo();
  }, []);

  const formValidator = (data: userDataType) => {
    let errorData = { ...formError };
    let { company, name, phone, email } = data;
    if (company.trim().length > 0) {
      if (name.trim().length > 0) {
        if (phone.length > 0) {
          if (email.trim().length > 0 && validateEmail(email)) {
            dispatch(addDetails(userInfo));
            navigate("/submit");
          } else {
            errorData["emailError"] = true;
          }
        } else {
          errorData["phoneError"] = true;
        }
      } else {
        errorData["nameError"] = true;
      }
    } else {
      errorData["companyError"] = true;
    }
    setFormError(errorData);
  };

  const onChange = (e: any) => {
    setCountryCode(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <h1>Find inbound call centers for your company</h1>
      <p>Use our AI and Big Data driven call center sourcing solution</p>
      <FormInput
        inputProps={{
          value: userInfo.company,
          onChange: (e) => {
            if (/^([^0-9]*)$/.test(e.target.value)) {
              handleInput(e, "company", "companyError");
            } else {
              alert("Number not allowed");
            }
          },
          maxLength: 80,
        }}
        showError={formError?.companyError}
        placeholder={"Company"}
      />
      <FormInput
        inputProps={{
          value: userInfo.name,
          onChange: (e) => {
            handleInput(e, "name", "nameError");
          },
          maxLength: 50,
        }}
        showError={formError?.nameError}
        placeholder={"Name"}
      />
      <div className={styles.formElement}>
        <div className={`${styles.labelContainer}`}>
          <label>{"Phone"}</label>
        </div>
        <div className={styles.phoneNumberContainer}>
          <div className={styles.selectContainer}>
            <select value={countryCode} onChange={onChange}>
              {phoneCodes.map((phoneCode) => {
                return (
                  <option key={phoneCode.code} value={phoneCode.dial_code}>
                    {phoneCode.flag}
                    {"\u00a0"}
                    {phoneCode.dial_code}
                  </option>
                );
              })}
            </select>
          </div>
          <FormInput
            inputProps={{
              value: userInfo?.phone,
              onChange: (e) => {
                if (/^-?\d*\.?\d*$/.test(e.target.value)) {
                  handleInput(e, "phone", "phoneError");
                } else {
                  alert("Only number allowed");
                }
              },

              placeholder: "Phone",
            }}
            inputStyle={styles.phoneNumberStyle}
            customStyle={styles.customPhone}
            showError={formError?.phoneError}
          />
        </div>
      </div>

      <FormInput
        inputProps={{
          value: userInfo.email,
          onChange: (e) => {
            handleInput(e, "email", "emailError");
          },
        }}
        placeholder={"Email"}
        showError={formError?.emailError}
      />
      <button onClick={handleSubmit} className={styles.btn}>
        Get Informed
      </button>
    </div>
  );
};

export default UserFormComponent;
