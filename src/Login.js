import React, {useState} from "react";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
  
    }
    return(
       
    <div className="Login">
        <h1>Login right below</h1>
         <div className="email">
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder='Your Email' 
            id="loginEmail"
            autoComplete="off" 
            ></input>
        </div> 
        <div className="password">
            <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder='Your Password' 
            id="loginPassword" 
            autoComplete="off" 
            ></input>
        </div>    

        <button type="submit" className="loginbtn">Login</button>
    </div>

 
    )
 
 
 };
 
 export default Login;