import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyB4HLqf06i91AHMBeDMWvR6H1ziRCX_Bds",
    authDomain: "exampleapp-1551845678331.firebaseapp.com",
    projectId: "exampleapp-1551845678331",
    storageBucket: "exampleapp-1551845678331.appspot.com",
    messagingSenderId: "362781203489",
    appId: "1:362781203489:web:effb4d1b3f7bf6951b1760",
    measurementId: "G-CN10VY910E"
  };

  const firebase = initializeApp(firebaseConfig);

//   export const provider = new firebase.auth.GoogleAuthProvider();
 export const auth = getAuth(firebase);
 export const db = getDatabase(firebase);
