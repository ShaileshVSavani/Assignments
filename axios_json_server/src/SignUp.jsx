import axios from 'axios';
import React from 'react'

const SignUp = () => {
  let postData =  async () => {
    let data ={
      title :"react",
      price : 100,
    
    }
    let res = await axios.post("http://localhost:3000/user", data)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    postData()

  }
  return (
    
    <div>
      <h2>Create Data</h2>
      <form onSubmit={handleSubmit}> 
        <input type="text" name='title' placeholder='Enter Title'/>
        <br /> 
        <input type="number"  name='price' placeholder='Enter Price'/>
        <br /> 
        {/* <input type="url" placeholder='Entet Url'/> */}
        <br /> 
        <input type="submit" value="Submit"/>
       
      </form>
    </div>
  )
}

export default SignUp
