/*  Assignment 1: Refs for Input Value Display**
 Create a functional component named "InputValueDisplay" to capture and display the input value in real-time using a ref.
Problem Statement:**: Create a functional component named "InputValueDisplay.": Implement a ref to capture the input value when the user types in an input field.: Display the input value below the input field in real-time as the user types. */


import React, { useRef, useState} from 'react';

const InputValueDisplay = () => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = () => {
        setInputValue(inputRef.current.value);
    };

    return (
        <div>
            <input type="text" ref={inputRef} onChange={handleInputChange}/>
            <h3>Input Value: {inputValue}</h3>
        </div>
    );
};

export default InputValueDisplay;
