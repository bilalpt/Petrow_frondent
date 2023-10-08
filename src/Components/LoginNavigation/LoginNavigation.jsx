import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarDefault } from '../../Navbar/Navbar'

const LoginNavigation = () => {

    const navigate=useNavigate()
  return (
    <div>

<>
    <div>
         <NavbarDefault/>


    
        <div className='bg-[#ffffff] w-100 h-screen flex justify-center items-center pb-40 pt-20 shadow-md'>
            <div className='bg-[#f6f1f1]		 w-4/12	 h-5/6  rounded-lg  shadow-2xl' >
                <div>
                        <a href="" className=''><h1 className='pt-16 pl-44'>Pet Boarding Login</h1></a>

                        <button className='text-blue-900 pt-4 pl-56' onClick={()=>navigate('/PetBoards/BoardLogin')}>click</button>

                </div>

                <div>

                    <div className='h-0.5 w-28 bg-black mt-10 ml-28' >
                    </div>
                    <a href="" className='text-red-900 pl-60'>OR</a>
                    <div className='h-0.5 w-28 bg-black ml-72' >
                    </div>
                    <button className='text-blue-900 pt-8 pl-56' onClick={()=>navigate('/PetBoards/CareLogin')}>click</button>

                </div>





                    <a href="" className='' ><h1 className='pt-8 pl-48'>Pet Taker Login</h1></a>








            </div>
        </div>
    </div>

    </>
      
    </div>
  )
}

export default LoginNavigation
