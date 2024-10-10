
// import './App.css'
// import SignUp from './pages/SignUp'
// import SignIn from './pages/SignIn'
// import { useEffect, useState } from 'react'
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
// import { app } from './firebase'

// // import { Auth } from './components/Auth'
// // import ConectionToFirebase from './components/ConectionToFirebase'



// const auth = getAuth(app)

// function App() {
//   const [user, setUser] = useState(null)
//   useEffect(() => {
//     onAuthStateChanged(auth, user => {
//       console.log('User: ', user)
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         console.log('User: ', user)
//         setUser(user)
//       } else {
//         // User is signed out
//         // ...
//         console.log('User signed out')
//         setUser(null)
//       }
//     })
//  },[])
 
//   if (user === null) {
//     return (
//       <>
//         {/* <ConectionToFirebase/> */}
//         {/* <Auth/>  */}
//         <SignUp/>
//         <SignIn/>
//       </>
//     )
//   } 
//   else {
//     return (
//       <div>
//         <h1>Welcome {user.email}!</h1>
//         <button onClick={() => signOut(auth)}>Sign Out</button>
//       </div>)
//   }
 
// }

// export default App


//=======================================================



import React from 'react'
import './App.css'
import Store from './firestore'


const App = () => {
  return (
    <div>
      <Store/>
    </div>
  )
}

export default App