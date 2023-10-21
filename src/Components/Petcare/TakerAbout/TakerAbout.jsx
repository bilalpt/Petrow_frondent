import React from 'react'
import { BoardNavbar } from '../../../Navbar/BoardNavbar'
import Dogwith from "../../../assets/Dogwith.png"

function TakerAbout() {
    return (
        <>
            <div className='bg-[#817299]'>
                <div className='bg-[#817299] h-screen'>
                    <BoardNavbar />
                    <div className='bg-[#817299] h-10'>
                    </div>
                    <div className=' bg-[#817299]'>
                        <div className='bg-[#817299] flex'>
                            <img
                                src={Dogwith}
                                className="  h-[60vh]"
                                alt="cropanimal"
                            />
                            <div className='bg-[#ecd6d6] flex flex-col items-center w-1/2 p-6 rounded-lg shadow-2xl mt-10 ml-20'>
                                <form action=""className="flex flex-col items-center">
                                    <div className='mb-4'>
                                        <h1 className='text-3xl mb-4'>About Me</h1>
                                    </div>

                                </form>

                            </div>

                        </div>




                    </div>

                </div>


            </div>

        </>

    )
}

export default TakerAbout

