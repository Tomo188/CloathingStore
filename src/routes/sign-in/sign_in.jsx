import SignInWithEmailAndPassword from "./components/sign_in_with_email_and_password"
import SignInUser from "./components/sign_in"
import "./sign_in_container.styles.scss"
const SignIn=()=>{
   
    return(<>
       
     <div className="sign-up-container-main">
            
       <SignInUser />
       <SignInWithEmailAndPassword />
        </div>
    </>
       
    )
}
export default SignIn