import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  /*
//usestate 
//useeffect
//useref
//usememo
//usecalpback
//use context -> use allternative (reduc )


*/
const navigate =useNavigate()
const [email, setEmail] = useState("");
 const [ password , setpassword] =useState("")
 
 useEffect (()=>{
console.log(email);

  },[email])

  return (
    <div className="logincontainer">
      <h1>My ToDo APP</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEmail ("") 
        setpassword("")
        if (email=="admin@gmail.com" &&password=="arif") {
          alert("succussesful login")
         navigate("/my-list")
        }else{
          alert("rong email ")
        }
        }}
      >
        <label htmlFor="email">email({email})</label>
        <input
          type="email"
          value={email}
          onChange={(e)=>{
        setEmail(e.target.value) 

          }}

          name="email"
          id="email"
        />
<label htmlFor="password ">password({password})</label>
<input 

type="password"
value={password}
name="password"
onChange={(e)=>setpassword(e.target.value)}
id="password"/>

 <button>Login/register</button>
 </form>
 </div>
  );
};
export default Login;
