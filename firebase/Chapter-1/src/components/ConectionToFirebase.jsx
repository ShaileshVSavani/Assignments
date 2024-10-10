import React from 'react'
import { getDatabase, ref , set } from 'firebase/database'
import { app } from '../firebase'

const db = getDatabase(app)

const ConectionToFirebase = () => {
    const putData = () => {
        set(ref(db, 'users/shailesh'), {
          id: 1,
          name :'Hello',
          age: 30
        })
      } 
    
  return (
      <div>
           <h1>Firebase React App</h1>
           <button onClick={putData}>Write Data to Firebase</button>
      </div>
      
  )
}

export default ConectionToFirebase