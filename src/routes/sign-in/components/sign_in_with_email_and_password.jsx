import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumnetFromAuth,
} from "../../../util/firebase/firebase";
import Input from "./input/input";
import "./sign_in.styles.scss"

import Button from "../../../components/button/button.component";
const SignInWithEmailAndPassword = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumnetFromAuth(user, { displayName: name });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have a account ?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Name"}
          value={name}
          onChangeFun={(e) => setName(e.target.value)}
          type={"text"}
        />
        <Input
          label={"Email"}
          value={email}
          onChangeFun={(e) => setEmail(e.target.value)}
          type={"email"}
        />
        <Input
          label={"Password"}
          value={password}
          onChangeFun={(e) => setPassword(e.target.value)}
          type={"password"}
        />
        <Input
          label={"Confirm Password"}
          value={confirmPassword}
          onChangeFun={(e) => setConfirmPassword(e.target.value)}
          type={"password"}
        />
       <Button type="submit" buttonType={"inverted"}>Sign in</Button>
      </form>
    </div>
  );
};
export default SignInWithEmailAndPassword;
