import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddStudent } from '../redux/Action'
import { useNavigate } from 'react-router'

const Students = () => {
  const [studentName, setStudentName] = useState('')
  const [studentAge, setStudentAge] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')

  let dispatch = useDispatch()
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newStudent ={
      name: studentName,
      age: studentAge,
      address: address,
      number: number
    }
    dispatch(AddStudent(newStudent))
    console.log(newStudent)
    navigate('/')
    setStudentName('')
    setStudentAge('')
    setAddress('')
    setNumber('')
    // console.log(studentName, studentAge, address, number)
  }
  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text"  value={studentName} placeholder='Enter Name' onChange={(e) => setStudentName(e.target.value)}/>
    //     <input type="text" value={studentAge} placeholder='Enter Age' onChange={(e) => setStudentAge(e.target.value)} />
    //     <input type="text" value={address}placeholder='Enter Address' onChange={(e) => setAddress(e.target.value)}/>
    //     <input type="text" value={number}  placeholder="Enter Number" onChange={(e)=> setNumber(e.target.value)}/>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Add New Student</h2>
      <div className="mb-4">
        <input
          type="text"
          value={studentName}
          placeholder="Enter Name"
          onChange={(e) => setStudentName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={studentAge}
          placeholder="Enter Age"
          onChange={(e) => setStudentAge(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={address}
          placeholder="Enter Address"
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={number}
          placeholder="Enter Number"
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default Students
