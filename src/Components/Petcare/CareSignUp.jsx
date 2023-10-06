import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

// import { NavbarDefault } from '/Navbar/Navbar.jsx';
import "react-toastify/dist/ReactToastify.css";




function CareSignup() {
    const [careuser,caresetstate]=useState({username:'',email:'',phone:'',password:'',confirmpassword:''})
    const [pass, setPass] = useState({ confirmpassword: "", check: true });

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
      };

//validations      

const careValidation=()=>{
    if(careuser.username.trim()===''){
        toast.error('usrname should not be empty')
        return false;
    }

    // else if(!isValidEmail(careuser.email.trim())){
    //     setHomeowner({email:""});
    //     toast.error('enter a valid Email');
    //     return false

    // }
    else if(careuser.phone.trim()===''){
        toast.error('phone number should not be empty')
        return false;
        
    }
    else if (careuser.email.trim()===''){
        toast.error('email should not be empty')
        return false;
    }
    else if (careuser.password.trim()===''){
        toast.error('password should not be empty')
        return false;
    }
    else if(careuser.confirmpassword.trim()===''){
        toast.error('confirm password should not be empty')
        return false;
    }
    return true
}

//form submission

const FormHandlerSignup = async (e)=>{
    e.preventDefault();
    if(careValidation())
    try {
        const response = await axios.post(
            import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/boardsignup",
            careuser // The data object
            
        );
        toast.success(response.data.msg);
        console.log(response.data)

        caresetstate({username:'',email:'',phone:'',password:''});

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
         {/* <NavbarDefault/> */}


    
        <div className='bg-gray-500 w-100 h-screen flex justify-center items-center'>
            <div className='bg-green-100		 w-7/12	 h-3/4  rounded-lg   ' >
                <form action="" onSubmit={FormHandlerSignup}>
                    <h1 className='pt-8 pl-5'>Pet Care Sign Up</h1>


                    <div className='flex-col flex justify-center items-center pt-8'>
                        <div className=''>
                            <input type="text" placeholder='Enter your name' name='username' className='rounded-lg py-2 px-16 border 'onChange={(e)=>caresetstate({...careuser,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder='Enter your email' name='email' className='rounded-lg py-2 px-16 border  'onChange={(e)=>caresetstate({...careuser,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder='Enter your phone number'name='phone'  className='rounded-lg py-2 px-16 border 'onChange={(e)=>caresetstate({...careuser,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder='Password'name='password' className='rounded-lg py-2 px-16 border ' onChange={(e)=>caresetstate({...careuser,[e.target.name]:e.target.value})}/>
                        </div>
                        <div className='mt-4'>
                            <input type="text" placeholder='Confirm password'name='confirmpassword' className='rounded-lg py-2 px-16 border ' onChange={(e)=>caresetstate({...careuser,[e.target.name]:e.target.value})}/>
                        </div>
                        <button type='submit' className='bg-cyan-500	 w-20 h-10 mt-6 text-white rounded-lg'>Sign Up</button>
                        {/* <h1 className=''>login</h1> */}
                        {/* <h1 className='px-16 py-4'> Go To Pet Boarding  <a  href="" className='bg-cyan-500'>Login</a></h1> */}

                    </div>
                </form>





            </div>
        </div>
    </div>

    </>
  )
}

export default CareSignup
