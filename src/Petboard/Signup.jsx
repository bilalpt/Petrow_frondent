import React from 'react'
import { useState } from 'react'
import { NavbarDefault } from '../Navbar/Navbar';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Signup() {
    const [user,userstate]=useState({username:'',email:'',phone:'',password:''})
    const [pass, setPass] = useState({ confirmpassword: "", check: true });

    console.log(user);

    
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

//validations
    const ValidateForm=()=>{
        if (user.username.trim()===''){
            toast.error('usrname should not be empty');
            return false;
        }
        else if (user.phone.trim()===''){
            toast.error('phone number should not be empty');
            return false;
        }
        else if (user.email.trim()===''){
            toast.error('email should not be empty');
            return false;
        }
        else if(!isValidEmail(user.email.trim())){
            setHomeowner({email:""});
            toast.error('enter a valid Email');
            return false

        }
        else if (user.password.trim()===''){
            toast.error('password should not be empty');
            return false;
        }
        else if (user.confirmpassword.trim()===''){
            toast.error('password should not be empty');
            return false;
        }
        return true;
    };



//form submission

const FormHandlerSignup = async (e)=>{
    e.preventDefault();
    if(ValidateForm())
    try {
        const response = await axios.post(
            import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/users/",
            user // The data object
            
        );
        toast.success(response.data.msg);
        console.log(response.data)

        userstate({username:'',email:'',phone:'',password:'',});

        setPass({confirmpassword:'',check:true})

    }catch (error){
        console.log(error);
        if (error.response && error.response.data) {
            const errorData = error.response.data;
            if (errorData.email) {
              toast.error(errorData.email[0]);
            }
          } else {
            toast.error("An error occurred during registration.");
          }

    }


}



  return (
    <>
    <div>
        <ToastContainer/>
         <NavbarDefault/>
        <div className='bg-gray-500 w-100 h-screen flex justify-center items-center'>
            <div className='bg-green-100		 w-7/12	 h-3/4  rounded-lg   ' >
                <form action="" onSubmit={FormHandlerSignup}>
                    <h1 className='pt-8 pl-5'>Pet Boarding Sign Up</h1>


                    <div className='flex-col flex justify-center items-center pt-8'>
                        <div className=''>
                            <input type="text" placeholder='Enter your name' name='username' className='rounded-lg py-2 px-16 border 'onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder='Enter your email' name='email' className='rounded-lg py-2 px-16 border  'onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder='Enter your phone number'name='phone'  className='rounded-lg py-2 px-16 border 'onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder='Password'name='password' className='rounded-lg py-2 px-16 border ' onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder='Confirm password'name='confirmpassword' className='rounded-lg py-2 px-16 border ' onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>
                        <button type='submit' className='bg-cyan-500	 w-20 h-10 mt-6 text-white rounded-lg'>Sign Up</button>
                        {/* <h1 className=''>login</h1> */}
                        <h1 className='px-16 py-4'> Go To Pet Boarding  <a  href="" className='bg-cyan-500'>Login</a></h1>

                    </div>
                </form>





            </div>
        </div>
    </div>

    </>
  )
}

export default Signup
