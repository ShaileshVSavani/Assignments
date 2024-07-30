import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

import "./App.css"

const FormValidation = () => {
  const userValidationSchema = yup.object({
    username: yup.string()
    .min(4)
    .max(15)
    .matches(/^[a-zA-Z0-9]{4,}([._]?[a-zA-Z0-9]+)*$/, "username must be at least 4 characters" )
    .required("Username is required"),
    email: yup.string()
      .email("Invalid email address")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"email must be a valid email address")
      .required("Email is required"),
    password: yup.string()
    .min(8)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "password must be at least 8 characters long")
    .required("Password is required"),
  });

  let formData = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },

    validateonChange: true,
    validateOnBlur: true,
  });

  return (
    <div className="formData">
      <form onSubmit={formData.handleSubmit} className="form">
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.values.username}
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          className=  {formData.touched.username && formData.errors.username? "error" : "" } 
        
        
        />
        {/* {(formData.touched.username && formData.errors.username) ? <p>{formData.errors.username}</p> : null} */}
        {(formData.errors.username) ? <p>{formData.errors.username}</p> : null}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.values.email}
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          className={formData.touched.email && formData.errors.email? "error" : ""}
        />
        {/* {(formData.touched.email && formData.errors.email) ? <p>{formData.errors.email}</p> : null} */}
        {(formData.errors.email) ? <p>{formData.errors.email}</p> : null}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.values.password}
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
        className={formData.touched.password && formData.errors.password? "error" : ""}
        />
        {/* {(formData.touched.password && formData.errors.password) ? <p>{formData.errors.password}</p> : null} */}
        {(formData.errors.password) ? <p>{formData.errors.password}</p> : null}
        <br />
        <input type="submit" value="Submit" className="btn btn-light"/>
      </form>
    </div>
  );
};

export default FormValidation;
