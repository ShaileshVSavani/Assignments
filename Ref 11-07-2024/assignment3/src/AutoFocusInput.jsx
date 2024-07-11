/*   Assignment 3: Using Refs for Auto Focus**
 Create a functional component named "AutoFocusInput" to automatically focus on an input field using a ref.
Problem Statement:**: Create a functional component named "AutoFocusInput.": Implement a ref to automatically focus on an input field when the component mounts.: Display an input field in the component and verify that it gains focus as soon as the component is rendered. */

import React, { useRef, useEffect } from 'react';

const AutoFocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className='inputDiv'>
            <input type="text" ref={inputRef} placeholder="Focus will be here" />
        </div>
    );
};

export default AutoFocusInput;
