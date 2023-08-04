import { authService} from "fbase";
import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    } from "firebase/auth";


// export default () => <span>Auth</span>
const Auth=()=> {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [newAccount, setNewAccount]=useState(true);
    const [error,setError]=useState("");
    const onChange=(event)=>{
        const{
            target:{name, value}
        } = event; 
        //이벤트 객체(event)에서 target 객체의 name과 value 
        //속성을 추출하여 각각 name과 value 변수에 할당
        if(name==="email"){
            setEmail(value);
        }else if(name==="password"){
            setPassword(value);
        }
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            let data
            if(newAccount){
                // 새로운 계정이면 회원가입+바로 로그인
                data = await createUserWithEmailAndPassword(authService, email, password);
            }else{
                //기존 계정이면 로그인
                data = await signInWithEmailAndPassword(authService, email, password);
            }
            console.log(data)
        }catch(error){
            setError(error.message);
        }
    }
    const toggleAccount=()=>setNewAccount((prev)=>!prev);
    const onSocialClick=async(event)=>{
        const {
            target:{name},}=event;
            let provider;
        if(name==="google"){
            provider = new GoogleAuthProvider();
        }
        const data = await signInWithPopup(authService, provider);
    }
    return(
    <div>
        <form onSubmit={onSubmit}>
            <input
            name="email" 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={onChange} 
            required/>
            <input 
            name="password"
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={onChange} 
            required/>
            <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
        {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
        {/*회원가입이 기본값이지만 누르면 반대로 뒤집어서 로그인이 되도록*/}
        <div>
            <button onClick={onSocialClick} name="google">Continue with Google</button>
        </div>
    </div>
)}
export default Auth;