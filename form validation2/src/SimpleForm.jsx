
import React, { useState } from 'react';
import './SimpleForm.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SimpleForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });

    const [userError, setUserError] = useState({
        username: false,
        email: false,
        phone: false,
        password: false
    });

    const handleInput = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setUserError({ ...userError, [name]: false }); 
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let usernameRegex = /^[a-zA-Z0-9]{3,}([._]?[a-zA-Z0-9]+)*$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        let { username, email, phone, password } = userData;

        if (!usernameRegex.test(username)) {
            toast.error("Username is invalid", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            setUserError({ ...userError, username: true });
            return;
        }

        if (!emailRegex.test(email)) {
            toast.error("Email is invalid", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            setUserError( {...userError, email: true });
            return;
        }

        if (!phoneRegex.test(phone)) {
            toast.error("Phone number is invalid", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            setUserError(prev => ({ ...prev, phone: true }));
            return;
        }

        if (!passwordRegex.test(password)) {
            toast.error("Password is invalid (at least 8 characters with uppercase, lowercase, digit, and special character)", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });
            setUserError(prev => ({ ...prev, password: true }));
            return;
        }

        else {
            toast.success("Data submitted successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce
            });

            console.log(userData);
            setUserData({
                username: '',
                email: '',
                phone: '',
                password: ''
            });
        }

      
    };

    return (
        <div>
            <ToastContainer />
            <h2>Form Validation</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    <input 
                        type="text" 
                        name="username" 
                        value={userData.username} 
                        onChange={handleInput} 
                        placeholder='Enter Name' 
                        className={userError.username ? 'error' : ''}
                    />
                </label>

                <label>
                    <input 
                        type="email" 
                        name="email" 
                        value={userData.email} 
                        onChange={handleInput} 
                        placeholder='Enter Email' 
                        className={userError.email ? 'error' : ''}
                    />
                </label>

                <label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={userData.phone} 
                        onChange={handleInput} 
                        placeholder='Enter Phone No.' 
                        className={userError.phone ? 'error' : ''}
                    />
                </label>

                <label>
                    <input 
                        type="password" 
                        name="password" 
                        value={userData.password} 
                        onChange={handleInput} 
                        placeholder='Enter Password' 
                        className={userError.password ? 'error' : ''}
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;
