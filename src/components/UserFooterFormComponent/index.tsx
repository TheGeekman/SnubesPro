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
import UserFormComponent from "../../components/UserFormComonent";
import { validateEmail } from "../../utils/globalFunctions";
interface HomeProps {}

const UserFooterFormComponent = (props: HomeProps) => {
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

  const dispatch = useDispatch();

  const userData = useSelector((state: storeProps) => state.userInfo);

  const [countryCode, setCountryCode] = useState("+123");

  const handleFooterFormInput = (
    e: any,
    type: "company" | "name" | "phone" | "email",
    errorKey: "companyError" | "nameError" | "phoneError" | "emailError"
  ) => {
    const data = { ...userInfo };
    data[type] = e.target.value;
    setUserInfo(data);

    let errorData = { ...formError };
    if (errorData[errorKey]) {
      errorData[errorKey] = false;
      setFormError(errorData);
    }
    setUserInfo(data);
  };

  const navigate = useNavigate();

  const handleFooterSubmit = () => {
    formValidator(userInfo);
    // dispatch(addDetails(userInfo));
    // navigate("/submit");
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
    <div className={styles.bottomFormContainer}>
      <div className={styles.formHeader}>Find inbound call centers</div>
      <div className={`${styles.formContainer} ${styles.bottomForm}`}>
        <FormInput
          customStyle={styles.formInputCustomStyle}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          placeholder={"Company"}
          inputProps={{
            value: userInfo.company,
            onChange: (e: any) => {
              if (/^([^0-9]*)$/.test(e.target.value)) {
                handleFooterFormInput(e, "company", "companyError");
              } else {
                alert("Number not allowed");
              }
            },
            maxLength: 80,
          }}
          showError={formError?.companyError}
        />
        <FormInput
          customStyle={styles.formInputCustomStyle}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          placeholder={"Name"}
          inputProps={{
            value: userInfo.name,
            onChange: (e: any) => {
              handleFooterFormInput(e, "name", "nameError");
            },
            maxLength: 80,
          }}
          showError={formError?.nameError}
        />
        <FormInput
          customStyle={styles.formInputCustomStyle}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          placeholder={"Phone"}
          inputProps={{
            value: userInfo.phone,
            onChange: (e: any) => {
              if (/^-?\d*\.?\d*$/.test(e.target.value)) {
                handleFooterFormInput(e, "phone", "companyError");
              } else {
                alert("Only number allowed");
              }
            },
            maxLength: 80,
          }}
          showError={formError?.phoneError}
        />
        <FormInput
          customStyle={styles.formInputCustomStyle}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          placeholder={"Email"}
          inputProps={{
            value: userInfo.email,
            onChange: (e: any) => {
              handleFooterFormInput(e, "email", "emailError");
            },
            maxLength: 80,
          }}
          showError={formError?.emailError}
        />
        <button onClick={() => handleFooterSubmit()} className={styles.btn}>
          Get Informed
        </button>
      </div>
    </div>
  );
};

export default UserFooterFormComponent;
