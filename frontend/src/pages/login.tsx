import Header from "@/components/Header";
import Head from "next/head";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from 'axios'
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useLogin();
  const router = useRouter();

  const handleLogin = async (e: any) => {
    if(!email)   {
      return toast.error('Email is required')
    }

    if(!password)   {
      return toast.error('Password is required')
    }

    try{
      const user = await login(email, password);
      toast.success('Logged in successfully')
      router.push('/')
    }
    catch(err){
      toast.error('Invalid credentials')
    }
  }  

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.heading}>Log in to your account</h1>

          <input 
            onChange={(e)=>setEmail(e.target.value)} 
            className={styles.emailInput} 
            placeholder="Enter your email" 
            value={email}
            type="email"
          />

          <input 
            onChange={(e)=>setPassword(e.target.value)} 
            className={styles.emailInput} 
            placeholder="Enter your password" 
            value={password}
            type="password"
          />

          <button 
            onClick={handleLogin} 
            className={styles.loginButton}
          >
            Log in
          </button>          
        </div>
      </div>
    </>
  );
};

export default Login;