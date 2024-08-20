

import React, { useState, useContext } from 'react';
import { ProductContext } from '../provider/ContextProvider';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useContext(ProductContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {username, email, password };
        const result = signUp(user);
        console.log(user);
        console.log(result);

        if (result.success) {
            alert('User signed up successfully!');  /*  alert(result.message); */
            setUsername('');
            setEmail('');
            setPassword('');
        } else {
            alert(result.message);
            setUsername('');
            setEmail('');
            setPassword('');

            
        }
    };

    return (
        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">
                    <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="SignUp" />
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up For an account</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">User Name</label>
                            <input
                                name="username"
                                type="username"
                                required
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                        >
                            Register Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
