// import { getRedirectResult } from "firebase/auth"
import Button from "../../../components/button/button.component"
import { auth,signInWithGooglePopup,signInWithGoogleRedirect,createUserDocumnetFromAuth } from "../../../util/firebase/firebase"
import "./sign_in.styles.scss"
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
           <>
             <Button  />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with google redirect
            </button> */}
           </>
        
        
    )
}
export default SignInWithGoogle