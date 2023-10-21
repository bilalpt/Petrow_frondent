import React from 'react'
import { CareNavbar } from '../../../Navbar/CareNavbar'
import cropanimal from "../../../assets/cropanimal.jpg"
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PetTakerterms = () => {
    const [agree, setAgree] = useState(false)

    const navigate=useNavigate()





    return (
        <>
            <div className='bg-[#d7c6f4]'>
                <CareNavbar />

                <div className=' grid  justify-center  	'>
                    <div className=''>
                        <img
                            src={cropanimal}
                            className=" pl-24 pr-24 w-screen  h-[65vh] shadow-2xl"
                            alt="cropanimal"
                        />

                    </div>
                    <div className='  flex justify-center items-center mb-10 '>

                        <div className='bg-[#817299] grid grid-col items-center w-2/4 p-6 rounded-lg shadow-2xl mt-12'>
                            <ul class="list-disc grid justify-center items-center ">
                                <li>You must be above 18 years old pet lover </li>
                                <br />
                                <li>All information provided is true and photos uploaded are loyality  free for  advertisement. You are required to Provide your phone number,ID and email  address for verification </li>
                                <br />

                                <li>You must be confirm the dog will be vaccinated &  Any other accident Pet Raw Not responsible </li>
                                <br />

                                <li>In the event of any emergency or breaching the rules of local authorities you agree you take up the full responsibility for such event</li>
                                <br />

                            </ul>
                            <div class="flex items-center justify-center" onClick={() => setAgree(!agree)}>
                                <input id="link-checkbox" type="checkbox" name='checkbox' value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the terms and conditions</label>
                            </div>

                            <div className='grid items-center justify-center mt-6' >
                                {agree?(
                                <button className='bg-[#9B89B9] text-white   text-2xl rounded-md w-20' onClick={()=>navigate('/PetTakers/TakerAbout')} >Agree</button>
                                ):(null)
}
                            </div>


                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default PetTakerterms
