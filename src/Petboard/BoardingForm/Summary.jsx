import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Summary = () => {
  const { BordFormRedux } = useSelector((state) => state.user);
  const [formstate, usestate] = useState({ pettype: '', nuberofpetboarded: '', petbreed: '', petsize: '', additionalinfo: '', startdate: '', enddate: '' })
  useEffect(() => {
    
    const data = BordFormRedux[BordFormRedux.length - 1];
    usestate({ pettype: data.pettype, nuberofpetboarded: data.nuberofpetboarded, petbreed: data.petbreed, petsize: data.petsize, additionalinfo: data.additionalinfo, startdate: data.startdate, enddate:data.enddate })
  }, [])
  return (

    <>


      <div className='bg-[#EEEEEE] h-full flex justify-center items-center shadow-2xl pt-24 pb-24'>
        <div className='bg-[#ffffff] flex flex-col items-center w-2/4 p-6 rounded-lg shadow-2xl'>
          <h1 className='text-2xl place-self-start text-[#757575]'>Request Summary</h1>
          <h1 className='place-self-start pt-5'>confirm or edit the details of your request before sending it out to pet lover in your area</h1>
          <h1 className='text-lg place-self-start text-[#757575] pt-5'>How many pets do you need to board?</h1>
          <h1 className='place-self-start pt-5'>{formstate.nuberofpetboarded}</h1>
          <h1 className='text-lg place-self-start text-[#757575] pt-5'>What type pet of it</h1>
          <h1 className='place-self-start pt-5'>{formstate.pettype}</h1>
          <h1 className='text-lg place-self-start text-[#757575] pt-5'>What breed is it</h1>
          <h1 className='place-self-start pt-5'>{formstate.petbreed}</h1>
          <h1 className='text-lg place-self-start text-[#757575] pt-5'>what is the size of the pet</h1>
          <h1 className='place-self-start pt-5'>{formstate.petsize}</h1>
          <h1 className='text-lg place-self-start text-[#757575] pt-5'>Anything else the sitter will need to know(optional)</h1>
          <h1 className='place-self-start pt-5'>{formstate.additionalinfo}</h1>
          <h1 className='text-lg place-self-start text-[#757575] pt-5'>Date</h1>
          <h1 className='place-self-start pt-5'>{formstate.additionalinfo}</h1>
          <h1 className='text-lg place-self-start text-[#757575] pt-5'>End date</h1>
          <h1 className='place-self-start pt-5'>{formstate.enddate}</h1>

          <h1 className='pt-10 space-x-12 text-2xl'><button className='bg-[#aaeeea] rounded-md w-16'>Edit</button>
            <button className='bg-[#9B89B9] text-white  text-2xl rounded-md w-16'>Next</button></h1>


        </div>
      </div>

    </>
  )
}

export default Summary
