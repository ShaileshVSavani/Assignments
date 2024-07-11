
/*  Assignment 1: Fragments**
 Create a functional component named "FormDisplay" and use fragments to wrap form elements for proper rendering.
Problem Statement:**: Create a functional component named "FormDisplay.": Implement various form elements such as input fields, labels, buttons, and more within the component.: Use a fragment to wrap the form elements to ensure they are properly grouped together in the rendered output.: Display the form elements within the fragment. */

import React from 'react';

const FormDisplay = () => {
    return (
        <>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"  />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"  />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age"  />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
};

export default FormDisplay;
