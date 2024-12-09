import React, { useState } from 'react'
import './authStyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const LoginUser = async(values) => {
        try{
          const res = await axios.post('http://localhost:5000/user/login', values)
          await localStorage.setItem('token', res.data.token)
          await alert('Welcome, you will go to the right page')
          console.log('login user',res.data)

          console.log('token user',res.data.token)
           Navigate('/privateRoute')


        } catch(err) {
          console.log('Failed to login',err)
        }
    }
    
    return (
    <div>
        <section class="bodyAuth">
    <div class="sectionAuth">
      <div class="container">
        <div class="user signinBx">
          <div class="imgBx">
            <img src='../../../assets/logo.jpg' alt="Logo Loconada" />
          </div>
          <div class="formBx">
            <form>
              <h2>Se Connecter</h2>
              <input type="email" name="email" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  />
              <input type="password" name="password" placeholder="Password"   value={password} onChange={(e)=>setPassword(e.target.value)}  />
  
              <button className='btn' type="button" name="" value="Login"  onClick={()=>LoginUser({email, password})}   > Se connecter </button>
              
              
              
              
              
              <p class="signup">
                <a href="/">Créer un compte ?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Login