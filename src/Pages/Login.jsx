import React, { useContext, useState } from 'react'
import { Button, Input, Select, SelectItem } from '@heroui/react';
import { loginSchema } from "../schema/loginSchema";
import "../images/Social_networking_services.jpg"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../services/authServices';
import { AuthContext } from '../contexts/AuthContext';






export default function Login() {



  const [isLoading, setIsLoading] = useState(false);
      const [errMessage, setErrMessage] = useState("");
      const navigate = useNavigate();
      const {setisLoggedIn} =useContext(AuthContext)
  
  
  
  
  
      const {handleSubmit, register, formState: { errors } }=useForm({
  
          defaultValues:{ 
              email: "muhammed@gmail.com",
              password: "Muhammed123@",
          },
          resolver: zodResolver(loginSchema)
      });
  
  
  
      // Function to handle form submission
      async function handleLogin(formData) {
          setIsLoading(true);
          const data = await loginApi(formData);
          setIsLoading(false);
          console.log(data);

          if (data.message == "success") {
            localStorage.setItem("token", data.token);
            setisLoggedIn(true);
            navigate(location.pathname == "/login" ? "/" : location.pathname);
          } else {
            setErrMessage(data);
          }
      }
  








  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
  <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1000}}>
    <div className="md:flex w-full">
      <div className="hidden md:block w-1/2 bg-indigo-100 ">
        <img src="src/images/Social_networking_services.jpg" alt="" className='w-full h-full object-fil' />
      </div>
      <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
          <p>Enter your Account</p>
        </div>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit(handleLogin)}>
            <div className='flex flex-col gap-5'>
                <Input {...register("email")} isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} label="Email" type="email" variant='bordered' />
                <Input {...register("password")} isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} label="Password" type="password" variant='bordered' />
                <Button isLoading={isLoading} color='primary' type="submit" variant="bordered">
                    Login
                </Button>
                {errMessage && <p className="text-red-600 text-xs bg-red-200 py-2 rounded-2xl text-center">{errMessage}</p>}
            </div>
            <div className='flex justify-between items-center mt-5'>
                <p className='text-gray-500'>Don't have an account? <Link to="/register" className='text-blue-500'>Register</Link></p>
            </div>
        </form>

        

        </div>
      </div>
    </div>
  </div>
  )
}
