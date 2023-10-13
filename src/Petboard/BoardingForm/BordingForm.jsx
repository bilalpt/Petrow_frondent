import React from 'react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'

const BordingForm = () => {
    return (
        // <div>
        //     <BoardNavbar/>
        // </div>
        <div >
            <div>
                <BoardNavbar />
            </div>

            <div className='bg-[#C9C9C9] h-screen flex justify-center items-center shadow-2xl'>
                <div className='bg-[##ffffff] flex flex-col items-center w-2/4 p-6 rounded-lg shadow-2xl'>

                    <form action="" className="flex flex-col items-center">
                        <div className='mb-4'>
                            <h1 className='text-3xl mb-4'>Pet Boarding</h1>
                        </div>

                        <div className='mb-4 w-full'>
                            <select className="w-full md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Nomber of Petboarded</option>
                                <option value="US">1</option>
                                <option value="CA">2</option>
                                <option value="FR">3</option>
                                <option value="DE">4</option>
                            </select>
                        </div>
                        <div className='mb-4 w-full'>
                            <input className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Pet Breed' />

                        </div>

                        <div className='mb-4 w-full'>
                            <select className="w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Pet Size</option>
                                <option value="US">1-5kg</option>
                                <option value="CA">5-10kg</option>
                                <option value="FR">10-20kg</option>
                                <option value="DE">20-30kg</option>
                            </select>
                        </div>

                        <div className='mb-4 w-full'>
                            <input className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Additional Information' />

                        </div>

                        <div className='mb-4 w-full'>
                            <input className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Additional Information' />

                        </div>


                        <div class="mb-4 w-full">

                            <input className='w-full md:w-96 lg:w-120   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" />
                        </div>
                        <span class=" my-1 text-gray-500">End to</span>

                        <div class="mb-4 w-full ">

                            <input className='w-full md:w-96 lg:w-120   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" />
                        </div>








                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full mx-4">Submit</button>
                    </form>

                </div>
            </div>




        </div>

    )
}

export default BordingForm
