import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./App.css";
import { Button } from "react-bootstrap";
const ValidationForm = () => {
  const UservalidationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3)
      .max(50)
      .required("username must be at least 3 characters"),
    email: Yup.string()
      .email("enter a  valid email address")
      .required("enter email address"),
    password: Yup.string()
      .min(6)
      .max(16)
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "regex"
      )
      .required("password must be at least 6"),
  });

  let formData = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: UservalidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div>
      <form onSubmit={formData.handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={formData.handleChange}
          value={formData.values.username}
          onBlur={formData.handleBlur}
        />

        {formData.touched.username && formData.errors.username ? (
          <p>{formData.errors.username}</p>
        ) : null}

        <br />
        <input
          type="email"
          name="email"
          value={formData.values.email}
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
        />
        {formData.touched.email && formData.errors.email ? (
          <p style={{ color: "red" }}>{formData.errors.email} </p>
        ) : null}
        <br />
        <input
          type="text"
          name="password"
          value={formData.values.password}
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          className={
            formData.touched.password && formData.errors.password
              ? "error"
              : null
          }
        />
        {formData.touched.password && formData.errors.password ? (
          <p style={{ color: "red" }}>{formData.errors.password} </p>
        ) : null}
        <br />
        <input type="submit" />
      </form>
      <button className="btn btn-info">test</button>
      <Button variant="primary">Primary</Button>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default ValidationForm;
