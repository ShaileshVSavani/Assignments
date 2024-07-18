/* Create a functional component named "SimpleForm" to implement a basic form with input fields for a user's name and email.
: Create a functional component named "SimpleForm.": Implement a form with input fields for the user to input their name and email and many more.: Implement state variables to store the input values for both the name and email fields.: Display the input values as the user types in the respective fields.  */

import React, { useState } from 'react'
import './SimpleForm.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SimpleForm = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        date: ''
    })

    const handleInput = (e) => {
        let { name, value } = e.target
        setUser({...user, [name]: value })
        // setUser({...user, [e.target.name]: e.target.value })
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(user)
       
        if (user.name && user.email && user.phone && user.address && user.date) {
            toast.success('🦄 Data submitted successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });

            setUser({
                name: '',
                email: '',
                phone: '',
                address: '',
                date: ''
            });
        } else {
            toast.error('All fields are required!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });
        }
    
    }
   
  return (
      <div>
           <ToastContainer />
          <form onSubmit={handleFormSubmit}>
              <label>
                  <input type="text" name="name" value={user.name} onChange={handleInput} placeholder='Enter Name'/>
              </label>
           
              <label>
                  <input type="email" name="email" value={user.email} onChange={handleInput} placeholder='Enter Email'/>
              </label>
           
              <label>
                  <input type="tel" name="phone" value={user.phone} onChange={handleInput} placeholder='Enter Phone No.'/>
              </label>
             
              <label>
                  <textarea name="address" rows="1" cols="" value={user.address} onChange={handleInput} placeholder='Enter Address'/>
              </label>
         
              <label>
                  <input type="date" name="date" value={user.date} onChange={handleInput}/>
              </label>
            
          
              <input type="submit" value="Submit" />
          </form>
    </div>
  )
}

export default SimpleForm