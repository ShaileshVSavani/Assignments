import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,  } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const createUser = () => {
        if (email === "" && password === "") {
          alert("Please fill out all fields");
          return;
  
      }
    createUserWithEmailAndPassword(auth, email, password)
          .then((data) => console.log(data), alert("success"))
          .catch((error) => alert(error.message));
      setEmail("");
      setPassword(""); 
  };
     
  const signUpWithGoogle = () => { 
    signInWithPopup(auth, googleProvider)
  }
  return (
    <div>
      <h2>SignUp</h2>
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <button type="submit" onClick={createUser}>
      SignUp
      </button>
      <br />
      <button onClick={signUpWithGoogle}>SignIn with Google</button>
    </div>
  );
};

export default SignUp;
