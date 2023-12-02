import SignInWithGoogle from "./components/sign_in_with_google"
import SignInWithEmailAndPassword from "./components/sign_in_with_email_and_password"
const SignIn=()=>{
   
    return(
        <div>
       <SignInWithGoogle />
       <SignInWithEmailAndPassword />
        </div>
    )
}
export default SignIn