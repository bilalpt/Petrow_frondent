import React from 'react'
import { useState } from 'react'
import { NavbarDefault } from '../Navbar/Navbar';


function Signup() {
    const [user,userstate]=useState({username:'',email:'',phone:'',password:'',confirmpassword:''})
    console.log(user);
  return (
    <>
    <div>
         <NavbarDefault/>


    
        <div className='bg-gray-500 w-100 h-screen flex justify-center items-center'>
            <div className='bg-green-100		 w-7/12	 h-3/4  rounded-lg   ' >
                <form action="">
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
