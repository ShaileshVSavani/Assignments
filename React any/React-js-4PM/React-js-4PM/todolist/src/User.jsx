import React, { useState } from "react";

const User = () => {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [isLogin, setIsLogin] = useState(false);

  let[userEmail,setUserEmail] =useState("");
  let[userPassword,setUserPassword] = useState("");
  const handleData = (e) => {
    e.preventDefault();

    if (username.length > 0 && password.length > 0 && email.length > 0) {
      setIsLogin(true);
    } else {
      alert("Please enter a username and password ");
    }
  };

  const userData=(e)=>{
    e.preventDefault();
    if(email==userEmail && password==userPassword){
        alert("loggedd in successfully")
    }
    else{
        alert("Please enter a valid email and password ");
    }

  }
  return (
    <div>
      {isLogin ? (
        <form onSubmit={userData}>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            placeholder="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <input type="submit" value="login" />
        </form>
      ) : (
        <form onSubmit={handleData}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="signup" />
        </form>
      )}
    </div>
  );
};

export default User;
