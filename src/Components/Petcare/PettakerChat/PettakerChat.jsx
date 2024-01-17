import React from 'react'
import { CareNavbar } from '../../../Navbar/CareNavbar'


export default function PettakerChat() {


  
  return (
<>
<div>
<CareNavbar />
</div>

<div className='bg-[#EEEEEE]'>


      <div className='bg-[#D9D9D9] rounded-xl mt-10 mx-4 md:ml-96 md:w-[700px] md:h-[550px] shadow-2xl h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='pl-4 md:pl-64 md:mt-4'>
            <img  className='rounded-full h-14 w-14 bg-white' alt="" />
          </div>
          <div className='mt-4 md:mt-8'>
            <h1 className='text-2xl'></h1>
          </div>
        </div>
        <div className='h-8 w-full bg-white mt-4 rounded-sm'></div>

        {/* Display messages */}

        {/* <div className="overflow-y-auto max-h-[400px] p-4">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">{msg.senderUsername}:</span> {msg.message}
            </div>
          ))}
          <div ref={lastMessageRef}></div>
        </div> */}

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='h-12 md:w-[500px] bg-white mt-4 md:mt-[330px] rounded-md mx-4 md:mx-0 md:ml-10'>
            <input
              className='h-12 w-full text-center rounded-md'
              type="text"
              placeholder='Enter your message...'
            />
          </div>
          <div className='h-12 md:w-[100px] bg-[#817299] rounded-md mt-4 md:mt-[330px] mx-4 md:mx-0 md:ml-52'>
            <button
              className='text-[#ffffff] pt-3 pl-7 '
            >
              Send
            </button>
          </div>
        </div>
      </div>
      </div>
</>
  )
}
