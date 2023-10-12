import React from 'react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'

const BoardProfile = () => {
  return (
      <>
          <div>
            <BoardNavbar/>
          </div>
        <div className='grid grid-rows-[5rem,1fr] h-screen w-full'>

            <div className='grid grid-rows-[3rem,1fr]'>
              <div className='bg-[#817299] shadow-2xl'></div>
              <div className='grid grid-cols-[40rem,1fr] bg-[#ffffff]'>
                <div className='flex justify-between'>
                  <div className='flex justify-end w-full'>
                   <div className='border rounded-full h-24 w-24 me-10 mt-10'>
                    <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                    className='rounded-full h-24 w-24' alt="" />
                   </div>
                  </div>
                  <div className='bg-gray-400 w-[2px] h-60 mt-4  '>
                    
                  </div>
                  <div className='mt-8 ml-8'>
                    <h1 className=''>Hey,Im</h1><h1 className='text-2xl'>Tommy</h1> <h1 className=''>baxter@gmail.com</h1>

                  </div>
                  <div className='button divs'>
                    <div className=''>

                    </div>

                  </div>
                </div>
                <div></div>
              </div>
            </div>
        </div>











      
      </>
  )
}

export default BoardProfile
