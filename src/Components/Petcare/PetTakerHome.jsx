import React from 'react'
import { CareNavbar } from '../../Navbar/CareNavbar';
import petrowhomebanner from "../../assets/petrowhomebanner.jpg"
import Backendworldimg from "../../assets/Backerworldimg.png"
import { SimpleFooter } from '../../Footer/TakerFooter';





const PetTakerHome = () => {
  return (
    <div>
      <CareNavbar />

      <div className=''>
        <img
          src={petrowhomebanner}
          className=""
          alt="cropanimal"
        />
      </div>
      <div className='grid grid-cols-1  md:grid-cols-3 md:mx-48  mt-12  '>
        <div class="relative gird w-full  max-w-[20rem] grid-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ">
          <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="ui/ux review check"
            />
            <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

          </div>
          <div class="p-6">
            <div class="grid items-center justify-between mb-3">
              <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                Wooden House, Florida
              </h5>
              <p class="grid items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                5.0
              </p>
            </div>
          </div>
        </div>
        {/* second */}
        <div class="relative grid w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="ui/ux review check"
            />
            <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

          </div>
          <div class="p-6">
            <div class="grid items-center justify-between mb-3">
              <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                Wooden House, Florida
              </h5>
              <p class="grid items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                5.0
              </p>
            </div>
          </div>
        </div>
        {/* third */}
        <div class="relative grid w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="ui/ux review check"
            />
            <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

          </div>
          <div class="p-6">
            <div class="grid items-center justify-between mb-3">
              <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                Wooden House, Florida
              </h5>
              <p class="grid items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                5.0
              </p>
            </div>
          </div>
        </div>


      </div>

      <div className='grid grid-col-2 md:grid-cols-2 mt-20'>
        <div className='pl-0 md:pl-36'>
          <img src={Backendworldimg} alt="" />

        </div>

        <div className='mt-20'>
          <h1 className='text-lg pl-5 md:text-3xl'>Use PetRaw  Kerala</h1>
          <h1 className='pt-5 text-sm pl-5 md:text-lg'>There's nothing worse than getting your hopes up,<br/> then not being able to
            find your pet sitter,<br/> That won't happen on PetRaw.</h1>


        </div>

      </div>



<div className='mt-20'>
  <SimpleFooter/>
</div>


    </div>
  )
}

export default PetTakerHome
