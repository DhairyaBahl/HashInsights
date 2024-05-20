import Header from "@/components/Header";
import styles from "../styles/Register.module.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRegister } from "@/hooks/useRegister";
import { useRouter } from "next/router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const register = useRegister();

  const handleRegister = async (e: any) => {
    if(!username)   {
      return toast.error('Username is required')
    }

    if(!email)   {
      return toast.error('Email is required')
    }

    if(!password)   {
      return toast.error('Password is required')
    }

    try{
      const message = await register(username, email, password);
      toast.success(message)
      router.push('/login')
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
          <h1 className={styles.heading}>Create New Account</h1>

          <input 
            onChange={(e)=>setUsername(e.target.value)} 
            className={styles.emailInput} 
            placeholder="Enter your username" 
            value={username}
          />

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
            onClick={handleRegister} 
            className={styles.loginButton}
          >
            Register
          </button>          
        </div>
      </div>
    </>
  );
};

export default Register;