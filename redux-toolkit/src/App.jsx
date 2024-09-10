
import React from 'react'
import './App.css'
import Counter from './redux/features/Counter'
import User from './redux/features/User'
import UserApi from './redux/features/UserApi'


const App = () => {
  return (
    <>
      {/* <Counter/> */}
      {/* <User/> */}
      <UserApi/>
    </>
  )
}

export default App