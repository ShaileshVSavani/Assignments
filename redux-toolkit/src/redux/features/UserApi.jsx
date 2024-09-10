
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, updateUser, getUser } from "../userApiSlice";

const UserApi = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userApi);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);


  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      age,
      email,
      phone,
    };
    dispatch(createUser(user));
    // setName("");
    // setAge("");
    // setEmail("");
    // setPhone("");
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));  
  };

  const handleEditUser = (user) => {
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
    setPhone(user.phone);
    setShowUpdateForm(true);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const updatedUser = {
      name,
      age,
      email,
      phone,
    };
    dispatch(updateUser(updatedUser ));
    setShowUpdateForm(false);
    setName("");
    setAge("");
    setEmail("");
    setPhone("");
  };

  const handleClose = () => {
    setShowUpdateForm(false);
    setName("");
    setAge("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
    
      {loading && <p>Loading users...</p>}

     
      {error && <p className="text-red-500">Error: {error}</p>}

      {showUpdateForm ? (
        <div className="card w-2/4 bg-white shadow-lg p-6 mb-4 mx-auto">
          <h2 className="text-xl font-semibold mb-4">Update User</h2>
          <form onSubmit={handleSaveChanges} className="space-y-4">
            <div>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="tel"
                className="input input-bordered w-full"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleClose}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Create Form
        <div className="card w-2/4 bg-white shadow-lg p-6 mb-4 mx-auto">
          <h2 className="text-xl font-semibold mb-4">Create New User</h2>
          <form onSubmit={handleUserSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="tel"
                className="input input-bordered w-full"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Submit"
            />
          </form>
        </div>
      )}

   
      <div>
        <h1 className="text-2xl font-bold mb-6">User Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="card bg-base-100 shadow-lg p-4 space-y-2"
            >
              <h2 className="text-lg font-semibold">Name: {user.name}</h2>
              <h3>Age: {user.age}</h3>
              <h4>Email: {user.email}</h4>
              <h5>Phone: {user.phone}</h5>
              <div className="flex space-x-4 mt-4 mx-auto">
                <button
                  className="btn btn-info"
                  onClick={() => handleEditUser(user)}
                >
                  Update User
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete User
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserApi;
