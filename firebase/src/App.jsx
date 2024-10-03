import React,{ useState }  from 'react'
import { GoogleAuth, SignInMethodEmail, SignUpMethodEmail } from './config';
import Form from './Form';



const App = () => {
  const [user, setUser] = useState({ email: '', password: '' })
    


  const signUpWithGoogle = async () => {
    const res = await GoogleAuth()
    console.log("Response", res)
  }
  const handleInput = (e) => {
    let { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handlesubmitForm = async(e) => {
    e.preventDefault()
    // let res = await SignUpMethodEmail(user.email, user.password)
    // console.log(res)

    let res= await SignInMethodEmail(user.email, user.password)
    console.log(res)
  }


  return (
    // <div>
    //   <form onClick={handlesubmitForm}>
    //     <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleInput } />
    //     <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleInput} />
    //     {/* <button type="submit">SignUp</button> */}
    //     <button type="submit">SignIn</button>
    //   </form>
    //   <button onClick={signUpWithGoogle}>SignUp With Google</button>
    // </div>

<div>
  <Form/>
</div>
   
  )
}

export default App

