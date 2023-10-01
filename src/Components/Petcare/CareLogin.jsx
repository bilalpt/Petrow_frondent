import React from 'react'
import { useState } from 'react'
// import { NavbarDefault } from '../Navbar/Navbar';


function CareLogin() {
    const [user,userstate]=useState({email:'',password:''})
    console.log(user);
  return (
    <>
    <div>
         {/* <NavbarDefault/> */}


    
        <div className='bg-gray-500 w-100 h-screen flex justify-center items-center pb-40'>
            <div className='bg-green-100		 w-7/12	 h-3/3  rounded-lg ' >
                <form action="">
                    <h1 className='pt-8 pl-5'>Pet Boarding Login</h1>


                    <div className='flex-col flex justify-center items-center pt-8'>

                        <div className='mt-4'>
                            <input type="text" placeholder='Enter your email' name='email' className='rounded-lg py-2 px-16 border  'onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>

                        <div className='mt-4'>
                            <input type="text" placeholder='Password'name='password' className='rounded-lg py-2 px-16 border ' onChange={(e)=>userstate({...user,[e.target.name]:e.target.value})}/>
                        </div>

                        <button type='submit' className='bg-cyan-500	 w-20 h-10 mt-6 text-white rounded-lg'>Login</button>
                        {/* <h1 className=''>login</h1> */}
                        <h1 className='px-16 py-4'> Go To Pet Boarding  <a  href="" className='bg-cyan-500'>Sign Up</a></h1>

                    </div>
                </form>





            </div>
        </div>
    </div>

    </>
  )
}

export default CareLogin
