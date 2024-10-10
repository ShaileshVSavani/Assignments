// import { useState } from "react";
// import "./App.css";
// import { useFirebase } from "./context/firebase";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const firebase = useFirebase();
//   console.log("Firebase", firebase);
//   return (
//     <>
//       <h2>firebase</h2>
//       <input
//         type="text"
//         placeholder="Enter email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />
//       <input
//         type="password"
//         placeholder="Enter password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       <button
//         onClick={() => {
//           firebase.signUpUserWithEmailAndPassword(email, password);
//           firebase.putData("users/" + "shailesh", {email, password})
//         }}

//       >
//         Sign In
//       </button>
//     </>
//   );
// }

// export default App;



//=============================================================================



import { useState } from "react";
import "./App.css";
import { useFirebase } from "./context/firebase";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const putDataNew = () => { 
  //   firebase.putData("grandfather/father/child", {id : 1}) 
  // }

  
  
  
  const firebase = useFirebase();

  return (
    <>
      <h2>Firebase Authentication</h2>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        onClick={() => {
          firebase.signUpUserWithEmailAndPassword(email, password);
          firebase.putData("users/" + "shailesh", {email, password});
        }}
      >
        Sign In
      </button>
      <button onClick={putDataNew}>Put DataNew</button>
    </>
  );
}

export default App;
