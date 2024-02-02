import React from 'react'
import { useState } from 'react'
import { NavbarDefault } from '../Navbar/Navbar';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { Link,useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from 'react';
// import Home from '../Components/PetrowHome/Home';

import { HomeownerGoogleSignup } from '../Services/PetboardrApi';

import "react-toastify/dist/ReactToastify.css";


function Signup() {
    const [user,userstate]=useState({username:'',email:'',phone:'',password:''})
    const [pass, setPass] = useState({ confirmpassword: "", check: true });

    const navigate=useNavigate()

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
            toast.error('confirm password should not be empty');
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
            import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/users",
            user // The data object
            
        );
        toast.success(response.data.msg);
        // console.log(response.data)

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


//   //google authentication


// const [ googleuser, googlesetUser ] = useState([]);
//     const [ googleprofile, googlesetProfile ] = useState([]);

//     const login = useGoogleLogin({
//         onSuccess: (codeResponse) => setUser(codeResponse),
//         onError: (error) => console.log('Login Failed:', error)
//     });

//     useEffect(
//         () => {
//             if (googleuser) {
//                 axios
//                     .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleuser.access_token}`, {
//                         headers: {
//                             Authorization: `Bearer ${googleuser.access_token}`,
//                             Accept: 'application/json'
//                         }
//                     })
//                     .then((res) => {
//                         setProfile(res.data);
//                     })
//                     .catch((err) => console.log(err));
//             }
//         },
//         [ googleuser ]
//     );











const [ guser, setguser ] = useState([]);

const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
        setguser(codeResponse);
      GoogleAuth();
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  const GoogleAuth = async () => {
    try {
      if (!guser) return;
      handleLoading();
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${guser.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${guser.access_token}`,
            Accept: "application/json",
          },
        }
      );
      const res = await HomeownerGoogleSignup(response.data);
      handleLoading();
      toast.success(res.data.msg);
      setguser([]);
      const token = JSON.stringify(res.data.token)
      localStorage.setItem('token',token)
      navigate("/PetBoards/BoardHome");
    } catch (error) {
    
      handleLoading();
      console.log(error.response);
      if (error.response && error.response.data && error.response.data.email) {
        toast.error(error.response.data.email[0]);
      } else {
        toast.error("An error occurred during registration.");
      }
    }
  };



  return (
    <>
    <div>
        <ToastContainer/>
         {/* <NavbarDefault/> */}
        <div className='bg-[#ffffff] w-100 h-screen flex justify-center items-center'>
            <div className='bg-[#f6f1f1]		 w-7/12	 h-3/4  rounded-lg   shadow-2xl' >
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
                            <input type="Password" placeholder='Password'name='password' className='rounded-lg py-2 px-16 border ' onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="Password" placeholder='Confirm password'name='confirmpassword' className='rounded-lg py-2 px-16 border ' onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>
                        <button type='submit' className='bg-cyan-500	 w-20 h-10 mt-6 text-white rounded-lg'>Sign Up</button>

                        <h1 className='px-16 py-4'> Go To Pet Boarding  <a  onClick={()=>navigate("/PetBoards/BoardLogin")} className='text-[#3c25a4]'>Login</a></h1>

                    </div>
                </form>
                <button onClick={() => login()} className="flex justify-center items-center w-2/6 bg-white text-black border-2 border-gray-400 mt-0 mx-4 my-6 px-4 py-2 rounded-full ml-72 ">Continue with Google</button>

                {/* <button onClick={() => useGoogleLogin()}>Sign in with Google 🚀 </button> */}









            </div>
        </div>
    </div>

    </>
  )
}

export default Signup
