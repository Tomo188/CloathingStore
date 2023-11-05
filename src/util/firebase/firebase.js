import {initializeApp} from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"
import {
    getFirestore,
    getDoc,
    doc,
    setDoc
} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDCvySu30xGxdCp531Hc-tuoEIW-AThPrA",
    authDomain: "shop-db-99b87.firebaseapp.com",
    projectId: "shop-db-99b87",
    storageBucket: "shop-db-99b87.appspot.com",
    messagingSenderId: "610700080920",
    appId: "1:610700080920:web:a0055fc1bc5b6e955c506d",
    measurementId: "G-D8FC3T0TTT"
  };
  const app=initializeApp(firebaseConfig)
  const provider=new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt:"select_account"
  })
  export const auth=getAuth()
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)
  export const db=getFirestore();
  export  const createUserDocumnetFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,"users",userAuth.uid)
    const userSnapshot=await getDoc(userDocRef)
    console.log(userAuth.displayName)
    if(!userSnapshot.exists()){
       const {displayName, email}=userAuth
       const createdAt=new Date()
       try{
        await setDoc(userDocRef,{
            displayName,email,createdAt
        })
       }
       catch(err){
        console.error(err)
       }

    }
    return userDocRef
  }
  export default app;
