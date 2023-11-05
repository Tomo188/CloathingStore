import { signInWithGooglePopup,createUserDocumnetFromAuth } from "../../util/firebase/firebase"

const SignIn=()=>{
    const logGoogleyUser=async()=>{
        const {user}=await signInWithGooglePopup()
        const userDocRef=await createUserDocumnetFromAuth(user)
    }
    
    return(
        <div>
            <h2>Test Sign in Component</h2>
            <button onClick={logGoogleyUser}>
                Sign in with google popup
            </button>
        </div>
    )
}
export default SignIn