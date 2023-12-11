import SignInWithGoogle from "./components/sign_in_with_google"
import SignInWithEmailAndPassword from "./components/sign_in_with_email_and_password"
import "./sign_in_container.styles.scss"
const SignIn=()=>{
   
    return(
        <div className="sign-up-container-main">
       
       <SignInWithEmailAndPassword />
        </div>
    )
}
export default SignIn