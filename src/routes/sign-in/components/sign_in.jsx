import {  useState } from "react";
import Input from "./input/input";
import Button from "../../../components/button/button.component";
import { userSignInWithEmailAndPassword } from "../../../util/firebase/firebase";
import SignInWithGoogle from "./sign_in_with_google";
import "./sign_in.styles.scss";
const SignInUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const logIn = await userSignInWithEmailAndPassword(email, password);
      console.log(logIn);
      setEmail("");
      setPassword("");
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorect password or mail");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
          
        default:
          console.log(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <span>If you have registered or with your google account</span>
      <Input
        label="email"
        value={email}
        onChangeFun={(e) => setEmail(e.target.value)}
        type="email"
      />
      <Input
        label="password"
        value={password}
        onChangeFun={(e) => setPassword(e.target.value)}
        type="password"
      />
      <div className="sign-in-form">
        <Button type="submit">Sign in</Button>
        <SignInWithGoogle />
      </div>
    </form>
  );
};
export default SignInUser;
