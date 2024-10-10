import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser, getUsers } from "./redux/userSliceApi";


const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
 
  const postUsers = () => {
    dispatch(createUser({ name: "react" }));
    console.log("Posting users");
    
  };
  return <div>

    <button onClick={postUsers}>add</button>
  </div>;
};

export default User;
