import React, { useEffect } from 'react'
import { CareNavbar } from '../../../Navbar/CareNavbar'
import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react"
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { UpdateDescription } from '../../../Redux/BoardTakerRedux'

const PettakerProfile = () => {
  const dispatch = useDispatch();
  const [details, detailstate] = useState({
    id:'',
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
    



  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const {TakerInitialDesc}=useSelector((state)=>state.takerforms);
  const data= TakerInitialDesc[TakerInitialDesc.length-1]



  useEffect(()=>{

    detailstate({
      id: data.id,
      servicename: data.servicename,
      petcount: data.petcount,
      acceptingpet: data.acceptingpet, 
      acceptingpetsize: data.acceptingpetsize, 
      howmanywalk: data.howmanywalk, 
      apartmentorhome: data.apartmentorhome, 
      transportemergencies: data.transportemergencies, 
      sleepinglocation: data.sleepinglocation, 
      price: data.price, 
      location: data.location, 
      pincode: data.pincode,
    });


  },[])

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

    const EditDescription=async(e)=>{
      e.preventDefault(); 
      try{
        const Response=await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL +"petcare/TakerDescriptionEdit/"+details.id,details)
      const lastIndex=TakerInitialDesc.length -1;
      console.log(Response.data);
      dispatch(UpdateDescription({index:lastIndex,UpdateDescription:Response.data}))
      }catch(error){
        console.log(error);

      }
      
      
    }


  return (
    <div>
      <div>
        <CareNavbar />
      </div>

      <div className='grid grid-rows-[5rem,1fr] h-screen w-full'>

        <div className='grid grid-rows-[3rem,1fr]'>
          <div className='bg-[#817299] shadow-2xl'></div>
          <div className='grid grid-cols-[48rem,1fr] bg-[#ffffff]'>
            <div className='flex justify-between'>
              <div className='flex justify-end w-full'>
                <div className='border rounded-full h-24 w-24 me-10 mt-10'>
                  <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                    className='rounded-full h-24 w-24' alt="" />
                </div>
              </div>
              <div className='bg-gray-400 w-[2px] h-60 mt-4  '>

              </div>
              <div className=' mt-8 ml-8 '>
                <h1 className=''>Hey,Im</h1><h1 className='text-2xl'>Tommy</h1> <h1 className=''>baxter@gmail.com</h1>
                <div className=' mt-14   flex gap-4'>

                  <button className='bg-[#9A9A9A] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
                  {/* <button className='bg-[#AC5555] hover:bg-red-700 text-white font-bold py-2 px-4 rounded pl-4'>logout</button> */}

                  {/* modal */}
                  <Button onClick={handleOpen} variant="gradient">
                    Edit Details
                  </Button>
                  <Dialog open={open} handler={handleOpen}>
                    {/* <DialogHeader>Edit Taker Description</DialogHeader> */}
                    <DialogBody>
                      <div className='flex  flex-col	justify-center	items-center'>
                        {/* <div>
                          <input type="text" id="field1" className=' w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </div>
                        <br />
                        <div>
                          <input type="text" id="field2" className='w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </div>
                        <br />
                        <div>
                          <input type="text" id="field3" className='w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </div>
                        <br />
                        <div>
                          <input type="text" id="field4" className='w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </div> */}
                        <form action="" onSubmit={EditDescription} className="flex flex-col items-center">
                          <div className='mb-2'>
                            <h1 className='text-3xl mb-4'>Edit Description</h1>
                          </div>

                          <div className='mb-3 w-full'>
                            <input type="text" name='servicename' value={details.servicename} onChange={(e) => detailstate({ ...details, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Give a Name to Your Service' />

                          </div>

                          <div className='mb-3 w-full'>

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
                          <div className='mb-3 w-full'>
                            <select
                              name="acceptingpet"
                              value={details.acceptingpet}
                              onChange={(e) => detailstate({ ...details, acceptingpet: e.target.value })} className="w-full md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="">
                              <option selected>Pet Type</option>
                              <option value="Dog">Dog</option>
                              <option value="Cat">Cat</option>
                            </select>

                          </div>

                          <div className='mb-3 w-full'>
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

                          <div className='mb-3 w-full'>

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

                          <div className='mb-3 w-full'>

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

                          <div className='mb-3 w-full'>

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

                          <div className='mb-3 w-full'>

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

                          <div className='mb-3 w-full'>
                            <input type="text" name='price' value={details.price} onChange={(e) => detailstate({ ...details, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pet Boarding Price in INR : /Per night' />

                          </div>

                          <div className='mb-3 w-full'>
                            <input type="text" name='location' value={details.location} onChange={(e) => detailstate({ ...details, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Your location' />

                          </div>
                          <div className='mb-3 w-full'>
                            <input type="text" name='pincode' value={details.pincode} onChange={(e) => detailstate({ ...details, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pincode' />

                          </div>

                          <div>
                          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mx-4">Submit</button>


                          </div>


                        </form>

                      </div>
                    </DialogBody>
                    {/* <DialogFooter>
                      <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                        <span>Cancel</span>
                      </Button>
                      <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                      </Button>
                    </DialogFooter> */}
                  </Dialog>



                  {/* modal end */}

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PettakerProfile
