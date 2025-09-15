import React, { useState } from 'react'
import "../images/Social_networking_services.jpg"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem } from '@heroui/react';
import { registerSchema } from '../schema/registerSchema';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../services/authServices';

export default function Register() {

    const [isLoading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();





    const {handleSubmit, register, formState: { errors }, reset }=useForm({

        defaultValues:{ 
            name: "Muhammed",
            email: "muhammed@gmail.com",
            password: "Muhammed123@",
            rePassword: "Muhammed123@",
            dateOfBirth: new Date(),
            gender: "male"
        },
        resolver: zodResolver(registerSchema),
        mode: "onBlur"
    });



    // Function to handle form submission
    async function handleRegister(formData) {
        setErrMessage("");
        setSuccessMessage("");
        setIsLoading(true);
        const data = await registerApi(formData);
        setIsLoading(false);
        console.log(data);
        
        if (data.message)  {
            reset();
            setSuccessMessage(data.message);
            setTimeout(() => {
                navigate("/login");
            }, 1000);

        } else {
            setErrMessage(data)
        }
    }



  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
  <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1100}}>
    <div className="md:flex w-full">
      <div className="hidden md:block w-1/2 bg-indigo-100 ">
        <img src="src/images/Social_networking_services.jpg" alt="" className='w-full h-full object-fil' />
      </div>
      <div className="w-full md:w-1/2 py-5 px-5 md:px-10">
        <div className="text-center mb-5">
          <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
          <p>Enter your information to register</p>
        </div>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit(handleRegister)}>
            <div className='flex flex-col gap-4'>
                <Input {...register("name")} isInvalid={Boolean(errors.name?.message)} errorMessage={errors.name?.message} label="Name" type="text" variant='bordered' />
                <Input {...register("email")} isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} label="Email" type="email" variant='bordered' />
                <Input {...register("password")} isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} label="Password" type="password" variant='bordered' />
                <Input {...register("rePassword")} isInvalid={Boolean(errors.rePassword?.message)} errorMessage={errors.rePassword?.message} label="Confirm Password" type="password" variant='bordered' />
                <Input {...register("dateOfBirth")} isInvalid={Boolean(errors.dateOfBirth?.message)} errorMessage={errors.dateOfBirth?.message} label="Date of Birth" type="date" variant='bordered' />
                <Select {...register("gender")} isInvalid={Boolean(errors.gender?.message)} errorMessage={errors.gender?.message} label="Gender" variant='bordered'>
                    <SelectItem key="male">Male</SelectItem>
                    <SelectItem key="female">Female</SelectItem>
                </Select>
                <Button isLoading={isLoading} color='primary' type="submit" variant="bordered">
                    Register
                </Button>
                {errMessage && <p className="text-red-600 text-xs bg-red-200 py-2 rounded-2xl text-center">{errMessage}</p>}
                {successMessage && <p className="text-green-600 text-xs bg-green-200 py-2 rounded-2xl text-center">{successMessage}</p>}
            </div>
            <div className='flex justify-between items-center mt-5'>
                <p className='text-gray-500'>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></p>
            </div>
        </form>

        

        </div>
      </div>
    </div>
  </div>

  )
}


