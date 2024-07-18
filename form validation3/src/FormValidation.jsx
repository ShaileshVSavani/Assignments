import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"
import 'bootstrap/dist/css/bootstrap.min.css';

const FormValidation = () => {
    const userValidationSchema = yup.object({
        username: yup.string()
           .min(3)
           .max(15)
           .required('Username is required'),
        email: yup.string()
           .email('Invalid email address')
           .required('Email is required'),
        password: yup.string()
           .min(8)
           .required('Password is required')
    })

    let formData = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: userValidationSchema,
        onSubmit: (values) => {
            console.log(values)
        },

        validateonChange: true,
        validateOnBlur: true
    })
    

  return (
    <div>
        <form onSubmit={formData.handleSubmit}>
        <input type="text" name='username' placeholder='Enter Username' value={formData.values.username} onChange={formData.handleChange}/>
        <input type="email" name='email' placeholder='Enter email' value={formData.values.email} onChange={formData.handleChange}/>
        <input type="password" name='password' placeholder='Enter password' value={formData.values.password} onChange={formData.handleChange}/>
        <input type="submit" value='Submit'/>
        </form>
    </div>
  )
}

export default FormValidation