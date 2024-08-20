

import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]); 
    const [loggedInUser, setLoggedInUser] = useState(null); 

    const signUp = (newUser) => {
        const userExists = users.some(user => user.email === newUser.email);
/* .some()
Purpose: The .some() method checks if at least one element in the array passes a test (provided as a function). It returns true if any of the elements pass the test, otherwise, it returns false.
.some() is used to check if there is any user in the users array with an email that matches newUser.email. If at least one user has the same email, userExists will be true, otherwise, it will be false.*/

        if (userExists) {
            return { success: false, message: 'User already exists!' };
        } else {
            setUsers([...users, newUser]);
            return { success: true, message: 'User signed up successfully!' };
        }
    };

    const login = (credentials) => {
        const user = users.find(user => user.email === credentials.email && user.password === credentials.password);
/*.find()
Purpose: The .find() method returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the condition, it returns undefined.
Here, .find() is used to search for a user in the users array whose email and password match the provided credentials. If a match is found, it returns that user object; if not, it returns undefined.
 */
        if (user) {
            setLoggedInUser(user);
            return { success: true, message: 'User logged in successfully!' };
        } else {
            return { success: false, message: 'Invalid email or password. Please sign up first!' };
        }
    };

    return (
        <ProductContext.Provider value={{ users, signUp, login, loggedInUser, setLoggedInUser }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ContextProvider;


/*Summary
.some(): Checks if at least one element meets a condition and returns true or false.
.find(): Finds and returns the first element that meets a condition, or undefined if no elements meet the condition.
.map(): Transforms all elements in an array and returns a new array with the transformed values. */