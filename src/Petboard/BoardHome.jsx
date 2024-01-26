import React, { useEffect } from 'react'
import { BoardNavbar } from '../Navbar/BoardNavbar'
import petrowhomebanner from "../assets/petrowhomebanner.jpg"
import Backendworldimg from "../assets/Backerworldimg.png"
import axios from 'axios'

import { SimpleFooter } from '../Footer/TakerFooter';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function BoardHome() {

  const navigate=useNavigate()
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    usercard();
  }, []);

  const usercard = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/Takerusershow");

      // Concatenate data from different arrays into a single array
      const newData = []
        .concat(response.data.takerformidserialdatas || [])
        .concat(response.data.ServiceDescriptiondata || [])
        .concat(response.data.Takeraboutdata || [])
        .concat(response.data.Takerwithpetdata || []);

      setAllData(newData);
    } catch (error) {
      console.log('Data not found');
    }
  };

  const handleclick=(userId)=>{
    navigate(`Singleuser/${userId}`)
  }



  return (
    <>
      <div>
        <BoardNavbar />

        <div className=''>
          <img
            src={petrowhomebanner}
            className=""
            alt="cropanimal"
          />
        </div>
        <div className='grid grid-cols-1  md:grid-cols-3 md:mx-48  mt-12  '>
          {allData.map((userImage, index) => (

            userImage.image && (<div key={index} class="relative gird w-full  max-w-[20rem] grid-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mb-10" onClick={()=>handleclick(userImage.user)}>
              <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                  src={userImage.image}
                  alt="ui/ux review check"onClick={()=>handleclick(userImage.user)}
                />
                <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

              </div>
              <div class="p-6">
                <div class="grid items-center justify-between mb-3">
                  <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 pl-16">
                    Am a Pet Taker
                  </h5>

                </div>
              </div>
            </div>)



          ))}




        </div>

        <div className='grid grid-col-2 md:grid-cols-2 mt-20'>
          <div className='pl-0 md:pl-36'>
            <img src={Backendworldimg} alt="" />

          </div>

          <div className='mt-20'>
            <h1 className='text-lg pl-5 md:text-3xl'>Use PetRaw  Kerala</h1>
            <h1 className='pt-5 text-sm pl-5 md:text-lg'>There's nothing worse than getting your hopes up,<br /> then not being able to
              find your pet sitter,<br /> That won't happen on PetRaw.</h1>


          </div>

        </div>



        <div className='mt-20'>
          <SimpleFooter />
        </div>


        <h1> petboarding home</h1>
      </div>
    </>
  )
}

export default BoardHome
