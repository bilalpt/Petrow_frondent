import React from 'react'
import { useState, useRef } from 'react'
import { NavbarDefault } from '../Navbar/Navbar';
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
// import {useDispatch} from "react-redux"


function BoardLogin() {
    const navigate = useNavigate();
    const [boarduser, boarduserstate] = useState({ email: '', password: '' })


    function isValidEmail(email) {
        const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return Regex.test(email);
    }



    //validations

    const validations = () => {
        if (boarduser.email.trim() === '') {
            toast.error('email sould not empty');
            return false;
        }
        if (!isValidEmail(boarduser.email.trim())) {
            boarduserstate({ email: '' })
            toast.warn("enter a valid email");
            return false;
        }
        if (boarduser.password.trim() === '') {
            toast.error('password should not be empty');
            return false;
        }
        return true

    };

    const FormHandler = async (e) => {
        e.preventDefault();
        if (validations()) {
            try {
                // const res = await BoardLogin(boarduser)
                const res =await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL + 'petboarding/token_obtain_pair/token', boarduser)
                console.log(res.data);
                navigate("/Home")


            } catch (error) {
                console.log(error);

            }

        }


    }





    return (
        <>
            <ToastContainer />

            <div>
                <NavbarDefault />




                <div className='bg-gray-500 w-100 h-screen flex justify-center items-center pb-40'>
                    <div className='bg-green-100		 w-7/12	 h-3/3  rounded-lg ' >
                        <form action="" onSubmit={FormHandler}>
                            <h1 className='pt-8 pl-5'>Pet Boarding Login</h1>


                            <div className='flex-col flex justify-center items-center pt-8'>

                                <div className='mt-4'>
                                    <input type="text" placeholder='Enter your email' name='email' className='rounded-lg py-2 px-16 border  ' onChange={(e) => {
                                        console.log(boarduser);
                                        boarduserstate({ ...boarduser, [e.target.name]: e.target.value })
                                    }} />
                                </div>

                                <div className='mt-4'>
                                    <input type="text" placeholder='Password' name='password' className='rounded-lg py-2 px-16 border ' onChange={(e) => boarduserstate({ ...boarduser, [e.target.name]: e.target.value })} />
                                </div>

                                <button type='submit' className='bg-cyan-500	 w-20 h-10 mt-6 text-white rounded-lg'>Login</button>

                                <h1 className='px-16 py-4'> Go To Pet Boarding  <a onClick={() => navigate("/Signup")} className='bg-cyan-500'>Sign Up</a></h1>

                            </div>
                        </form>





                    </div>
                </div>
            </div>

        </>
    )
}

export default BoardLogin
