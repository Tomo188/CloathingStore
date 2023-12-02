// import { getRedirectResult } from "firebase/auth"
import { auth,signInWithGooglePopup,signInWithGoogleRedirect,createUserDocumnetFromAuth } from "../../../util/firebase/firebase"
// import { useEffect             } from "react"
const SignInWithGoogle=()=>{
    // useEffect(()=>{
    //     async function signInWithGoogleRedirectFunc(){
    //         const response=await getRedirectResult(auth)
    //         if(response){
    //             await createUserDocumnetFromAuth(response)
    //         }
    //     }
    //      signInWithGoogleRedirectFunc()
    // },[])
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup()
        const userDocRef=await createUserDocumnetFromAuth(user)
    }
    // const logGoogleRedirectUser=async()=>{
    //     const {user}=await signInWithGoogleRedirect()
    // }
    
    return(
        <div>
            <h2>Test Sign in Component</h2>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with google redirect
            </button> */}
        </div>
    )
}
export default SignInWithGoogle