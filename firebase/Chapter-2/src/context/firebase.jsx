// import { initializeApp } from "firebase/app";
// import { createContext, useContext } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, set, ref } from "firebase/database";
// // import {app} from "./firebase/app"

// const firebaseConfig = {
//     apiKey: "API_KEY",
//     authDomain: "PROJECT_ID.firebaseapp.com",
//     // The value of `databaseURL` depends on the location of the database
//     databaseURL: "https://DATABASE_NAME.firebaseio.com",
//     projectId: "PROJECT_ID",
//     storageBucket: "PROJECT_ID.appspot.com",
//     messagingSenderId: "SENDER_ID",
//     appId: "APP_ID",
//     // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//     measurementId: "G-MEASUREMENT_ID",
//     databaseURL: "https://my-firebase-app-315a6-default-rtdb.firebaseio.com/"
//   };

// const app = initializeApp(firebaseConfig)

// const FirebaseContext = createContext(null)
// export const useFirebase = useContext(FirebaseContext)

// const auth = getAuth(app)

// const db = getDatabase(app)

// const FirebaseProvider = (props) => {
//     const signUpUserWithEmailAndPassword = async (email, password) => {
//         const data = await createUserWithEmailAndPassword(auth, email, password);
//         return console.log(data);
//     }

//     const putData = (data, key) => set(ref(db, key), data)
//     return (
//         <FirebaseContext.Provider value={{ signUpUserWithEmailAndPassword, putData }}>
//             {props.children}
//         </FirebaseContext.Provider>
//     )
// }

// export default FirebaseProvider;

//=========================================================================



import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyA0apBfJavncBJA14eTwt3TwiS-m-hXa4U",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://my-firebase-app-315a6-default-rtdb.firebaseio.com/",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID"
};


const app = initializeApp(firebaseConfig);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext); // custom hook

const auth = getAuth(app);
const db = getDatabase(app);

const FirebaseProvider = (props) => {
    const signUpUserWithEmailAndPassword = async (email, password) => {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        return console.log(data);
    };

    const putData = (data, key) => set(ref(db, key), data);

    return (
        <FirebaseContext.Provider value={{ signUpUserWithEmailAndPassword, putData }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;
