import React from 'react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'


function Boardhistory() {
    return (
        <>
            <div className=' '>
                <BoardNavbar />
                <div className='bg-[#D9D9D9] h-screen grid grid-cols-1'>
                    <div className='  md:pt-28 pl-32 '>
                        <div>
                        <h1 className=' md:text-2xl pl-4'>My Requests</h1>
                        </div>
                        <div className='   md: bg-[#ffffff] h-44 mt-10 rounded-lg shadow-xl'>

                        </div>

                    </div>

                </div>



            </div>

        </>
    )
}

export default Boardhistory
