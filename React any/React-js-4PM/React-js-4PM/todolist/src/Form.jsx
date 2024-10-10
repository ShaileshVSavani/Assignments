import React, { useState } from "react";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  let [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  let [userDataError, setUserDataError] = useState({
    username: false,
    email: false,
    password: false,
  });

  const handleInputData = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { username, email, password } = userData;

    let passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error("enter valid password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });

      setUserDataError({ ...userDataError, password: true });
    } else {
      toast.success("signup ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      
    }

    // if (email.length > 0 && password.length > 0 && username.length > 0) {
    //     toast.success('🦄 Wow so easy!', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //         transition: Bounce,
    //         });
    // } else {
    //     toast.error('🦄 Wow so easy!', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //         transition: Slide,
    //         });
    // }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userData.username}
          name="username"
          placeholder="username"
          onChange={handleInputData}
          style={{
            backgroundColor: userDataError.username
              ? "red"
              : userData.username.length > 0
              ? "green"
              : "black",
          }}
        />
        <br />
        <br />

        <input
          type="email"
          value={userData.email}
          name="email"
          placeholder="email"
          onChange={handleInputData}
          style={{ backgroundColor: userDataError.email ? "red" : "green" }}
        />
        <br />
        <br />
        <input
          type="text"
          value={userData.password}
          name="password"
          placeholder="password"
          onChange={handleInputData}
          style={{ backgroundColor: userDataError.password ? "red" : "green" }}
        />
       {userDataError.password ? <p>enter valid password</p> :null}
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
