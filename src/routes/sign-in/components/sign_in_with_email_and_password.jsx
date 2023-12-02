import { useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocumnetFromAuth } from "../../../util/firebase/firebase"
 const SignInWithEmailAndPassword=()=>{
    const [name,setname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
   const handleSubmit=async(event)=>{
      event.preventDefault()
      if(password!==confirmPassword) return
      
      try{
         const {user}= await createAuthUserWithEmailAndPassword(email,password)
         
         await createUserDocumnetFromAuth(user,{displayName:name})
         setname("") 
         setEmail("")
         setPassword("")
         setConfirmPassword("")
      }
      catch(err){
          console.log(err)
       }
      

   }
    
 return(
    <div>
       <h2>
        Sign Up with your email and password
       </h2>
       <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required onChange={(e)=>setname(()=>e.target.value)} value={name} />
        <label>Email</label>
        <input type="email" required onChange={(e)=>setEmail(()=>e.target.value)} value={email} />
        <label>Password</label>
        <input type="password" required  onChange={(e)=>setPassword(()=>e.target.value)} value={password}/>
        <label>Confirm Password</label>
        <input type="password" required onChange={(e)=>setConfirmPassword(()=>e.target.value)} value={confirmPassword} />
        <button type="submit">Sign Up</button>
       </form>
      
    </div>
 )
}
export default SignInWithEmailAndPassword     