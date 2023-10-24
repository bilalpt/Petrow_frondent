import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import Dogwith from "../../../assets/Dogwith.png"
import axios from 'axios';




function TakerDescription() {
  const [details, detailstate] = useState({ 
    servicename: '',
    petcount: '',
    acceptingpet: '', 
    acceptingpetsize: '', 
    howmanywalk: '', 
    apartmentorhome: '', 
    transportemergencies: '', 
    sleepinglocation: '', 
    price: '', 
    location: '', 
    pincode: '', })
  console.log(details);

  //description validation

  const validation = () => {
    if (details.servicename.trim === '') {
      toast.error('Please enter the service name');
      return false;
    }
    else if (details.petcount.trim === '') {
      toast.error('please select Number of Pet taking ');
      return false;
    }
    else if (details.acceptingpet.trim === '') {
      toast.error('please select Pet Type ');
      return false;
    }
    else if (details.acceptingpetsize.trim === '') {
      toast.error('please select Pet Size ');
      return false;
    }
    else if (details.howmanywalk.trim === '') {
      toast.error('please select How Many Walk Per Day ');
      return false;
    }
    else if (details.apartmentorhome.trim === '') {
      toast.error(' please select What best describes the home you live in  ? ');
      return false;
    }
    else if (details.transportemergencies.trim === '') {
      toast.error('Please Select Do you have any transport emergencies');
      return false;
    }
    else if (details.sleepinglocation.trim === '') {
      toast.error('Please Select where will pets sleep at night ?');
      return false;
    }
    else if (details.price.trim === '') {
      toast.error('Please Enter your boarding price per night');
      return false;
    }
    else if (details.location.trim === '') {
      toast.error('Please Enter your location');
      return false;
    }
    else if (details.location.trim === '') {
      toast.error('Please Enter your Pincode');
      return false;
    }

    return true
  }


  const Descriptionfun=async(e)=>{
    e.preventDefault()
    if(validation())
      try{
          const Response=await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL+ "petcare/Takerdetalis",details);
          toast.success(Response.data.msg)

          console.log(Response.data.msg)

          detailstate({ servicename: '', petcount: '', acceptingpet: '', acceptingpetsize: '', howmanywalk: '', apartmentorhome: '', transportemergencies: '', sleepinglocation: '', price: '', location: '', pincode: '' })

    }catch(error){
      console.log(error)
    }
    

    
    }


  return (
    <>
      <div className='bg-[#817299]'>

        <div className='bg-[#817299] h-screen'>
          {/* <BoardNavbar /> */}
          <div className='bg-[#817299] h-10'>
          </div>
          <div className=' bg-[#817299]'>
            <ToastContainer />

            <div className='bg-[#817299] flex'>
              <img
                src={Dogwith}
                className="  h-[60vh]"
                alt="cropanimal"
              />

              <div className='bg-[#ecd6d6] flex flex-col items-center w-1/2 p-6 rounded-lg shadow-2xl mt-10 ml-20'>
                <form action="" onSubmit={Descriptionfun} className="flex flex-col items-center">
                  <div className='mb-4'>
                    <h1 className='text-3xl mb-4'>Description</h1>
                  </div>

                  <div className='mb-4 w-full'>
                    <input type="text" name='servicename' value={details.servicename} onChange={(e) => detailstate({ ...details, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Give a Name to Your Service' />

                  </div>

                  <div className='mb-4 w-full'>

                    <select 
                      name="petcount" 
                      value={details.petcount} 
                      onChange={(e) => detailstate({ ...details, petcount: e.target.value })} id="" className="w-full md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Nomber of Taking</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>

                    </select>

                  </div>
                  <div className='mb-4 w-full'>
                    <select 
                      name="acceptingpet" 
                      value={details.acceptingpet} 
                      onChange={(e) => detailstate({ ...details, acceptingpet: e.target.value })} className="w-full md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="">
                      <option selected>Pet Type</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                    </select>

                  </div>

                  <div className='mb-4 w-full'>
                    <select
                      name='acceptingpetsize'
                      value={details.acceptingpetsize}
                      onChange={(e) => detailstate({ ...details, acceptingpetsize: e.target.value })}
                      className="w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Pet Size</option>
                      <option value="1-5kg">1-5kg</option>
                      <option value="5-10kg">5-10kg</option>
                      <option value="10-20kg">10-20kg</option>
                      <option value="20-30kg">20-30kg</option>
                    </select>

                  </div>

                  <div className='mb-4 w-full'>

                    <select
                      name='howmanywalk'
                      value={details.howmanywalk}
                      onChange={(e) => detailstate({ ...details, howmanywalk: e.target.value })}
                      className="w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>How Many Walk Per Day </option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>

                  </div>

                  <div className='mb-4 w-full'>

                    <select
                      name='apartmentorhome'
                      value={details.apartmentorhome}
                      onChange={(e) => detailstate({ ...details, apartmentorhome: e.target.value })}
                      className="w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>What best describes the home you live in ?</option>
                      <option value="Home">Home</option>
                      <option value="Appartment">Appartment</option>
                    </select>

                  </div>

                  <div className='mb-4 w-full'>

                    <select
                      name='transportemergencies'
                      value={details.transportemergencies}
                      onChange={(e) => detailstate({ ...details, transportemergencies: e.target.value })}
                      className="w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Do you have transport for emergencies</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>

                  </div>

                  <div className='mb-4 w-full'>

                    <select
                      name='sleepinglocation'
                      value={details.sleepinglocation}
                      onChange={(e) => detailstate({ ...details, sleepinglocation: e.target.value })}
                      className="w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>where will pets sleep at night ?</option>
                      <option value="In the Cage">In the Cage</option>
                      <option value="In my apartment">In my apartment</option>
                    </select>

                  </div>

                  <div className='mb-4 w-full'>
                    <input type="text" name='price' value={details.price} onChange={(e) => detailstate({ ...details, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pet Boarding Price in INR : /Per night' />

                  </div>

                  <div className='mb-4 w-full'>
                    <input type="text" name='location' value={details.location} onChange={(e) => detailstate({ ...details, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Your location' />

                  </div>
                  <div className='mb-4 w-full'>
                    <input type="text" name='pincode' value={details.pincode} onChange={(e) => detailstate({ ...details, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pincode' />

                  </div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full mx-4">Submit</button>


                </form>


              </div>
            </div>




          </div>
        </div>
      </div>


    </>
  )
}

export default TakerDescription
