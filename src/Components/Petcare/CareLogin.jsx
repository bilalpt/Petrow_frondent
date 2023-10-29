import React from 'react'
import { useState } from 'react'
// import { NavbarDefault } from '../Navbar/Navbar';
import CareSignup from './CareSignUp';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Takeruserfun } from '../../Redux/BoardTakerRedux';
import jwtDecode from 'jwt-decode';
import { TakerUserInfo } from '../../Services/PetboardrApi';



function CareLogin() {
    const [user, userstate] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const dispatch = useDispatch();

    console.log(user);
    function isValidEmail(email) {
        const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return Regex.test(email);
    }


    //validations

    const validations = () => {
        if (user.email.trim() === '') {
            toast.error('email sould not empty');
            return false;
        }
        if (!isValidEmail(user.email.trim())) {
            boarduserstate({ email: '' })
            toast.warn("enter a valid email");
            return false;
        }
        if (user.password.trim() === '') {
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
                const res = await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL + 'petcare/tokenobtain_petcare', user)
                const token = JSON.stringify(res.data);
                localStorage.setItem("token", token);
                const decoded = jwtDecode(token)
                const user_id =  decoded.id

                const res2 =  await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + 'petcare/takeruserinfo/' +user_id+ "/",{withCredentials:true})
                
                dispatch(Takeruserfun({Takeruserinitial: res2.data}))
                
                navigate("/PetTakers/PetTakerHome")

            } catch (error) {
                console.log(error);
            }
        }


    }




    return (
        <>
            <div>
                <ToastContainer />

                {/* <NavbarDefault/> */}



                <div className='bg-[#ffffff] w-100 h-screen flex justify-center items-center pb-40'>
                    <div className='bg-[#f6f1f1]		 w-7/12	 h-3/3  rounded-lg shadow-2xl' >
                        <form action="" onSubmit={FormHandler}>
                            <h1 className='pt-8 pl-5'>Pet taker Login</h1>


                            <div className='flex-col flex justify-center items-center pt-8'>

                                <div className='mt-4'>
                                    <input type="text" placeholder='Enter your email' name='email' className='rounded-lg py-2 px-16 border  ' onChange={(e) => userstate({ ...user, [e.target.name]: e.target.value })} />
                                </div>

                                <div className='mt-4'>
                                    <input type="text" placeholder='Password' name='password' className='rounded-lg py-2 px-16 border ' onChange={(e) => userstate({ ...user, [e.target.name]: e.target.value })} />
                                </div>

                                <button type='submit' className='bg-cyan-500	 w-20 h-10 mt-6 text-white rounded-lg'>Login</button>
                                {/* <h1 className=''>login</h1> */}
                                <h1 className='px-16 py-4'> Go To Pet Boarding  <a onClick={() => navigate('/PetBoards/CareSignup')} href="" className='text-[#3c25a4] '>Sign Up</a></h1>

                            </div>
                        </form>





                    </div>
                </div>
            </div>

        </>
    )
}

export default CareLogin
