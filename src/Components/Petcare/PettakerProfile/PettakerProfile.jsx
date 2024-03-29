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
import { toast } from 'react-toastify'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { UpdateUser } from '../../../Redux/BoardTakerRedux'



const PettakerProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  //taker user details edit

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
    pincode: '',
    user: ''
  })


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  // descriptiion
  const { TakerInitialDesc } = useSelector((state) => state.takerforms);

  const takerdec = TakerInitialDesc.data

  const Takerdecription = TakerInitialDesc[TakerInitialDesc.length - 1]
  // end description


  const { TakeridInitial } = useSelector((state) => state.takerforms)
  const takerintialimage = TakeridInitial[TakeridInitial.length - 1]




  useEffect(() => {

    if (takerdec || Takerdecription !== null) {
      if (takerdec) {
        console.log(takerdec.id, 'sudev.................');
        detailstate({

          id: takerdec.id,
          servicename: takerdec.servicename,
          petcount: takerdec.petcount,
          acceptingpet: takerdec.acceptingpet,
          acceptingpetsize: takerdec.acceptingpetsize,
          howmanywalk: takerdec.howmanywalk,
          apartmentorhome: takerdec.apartmentorhome,
          transportemergencies: takerdec.transportemergencies,
          sleepinglocation: takerdec.sleepinglocation,
          price: takerdec.price,
          location: takerdec.location,
          pincode: takerdec.pincode,
          user: takerdec.user,
        });
      }
      else if (Takerdecription) {
        detailstate({

          id: Takerdecription.id,
          servicename: Takerdecription.servicename,
          petcount: Takerdecription.petcount,
          acceptingpet: Takerdecription.acceptingpet,
          acceptingpetsize: Takerdecription.acceptingpetsize,
          howmanywalk: Takerdecription.howmanywalk,
          apartmentorhome: Takerdecription.apartmentorhome,
          transportemergencies: Takerdecription.transportemergencies,
          sleepinglocation: Takerdecription.sleepinglocation,
          price: Takerdecription.price,
          location: Takerdecription.location,
          pincode: Takerdecription.pincode,
          user: Takerdecription.user,
        });

      }



    }

    else {
      console.log('taker description is null');
    }



  }, [])

  // console.log(details,'bilal');


  //taker user details edit end

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

  const EditDescription = async (e) => {
    e.preventDefault();
    if (validation())
      try {
        console.log("Details ID:", details.id);


        const Response = await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/TakerDescriptionEdit/" + details.id, details)
        const lastIndex = Response.data
        console.log(lastIndex, 'daxo');
        dispatch(UpdateDescription({ index: lastIndex, updatedescription: Response.data }))
      } catch (error) {
        console.log(error);

      }

  }


  //taker edit
  const { Takeruserinitial } = useSelector((state) => state.takerforms)



  const [value, setValue] = useState({
    id: Takeruserinitial.id,
    username: Takeruserinitial.username,
    phone: Takeruserinitial.phone,
    profileimage: null,
  })

  const [secondOpen, setSecond] = useState(false);
  const secondhandle = () => setSecond(!secondOpen);

  useEffect(() => {
    setValue((prevValue) => ({
      ...prevValue,
      id: Takeruserinitial.id,
      username: Takeruserinitial.username,
      phone: Takeruserinitial.phone,
    }));
  }, [Takeruserinitial]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setValue((value) => ({
      ...value,
      profileimage: file,
    }));
  }


  //taker edit end

  const uservalidation = () => {
    if (value.username.trim() === '') {
      toast.error('please enter the name');
      return false
    }
    // else if (takeruser.email.trim === '') {
    //   toast.error('please enter the email');
    //   return false
    // }
    return true
  }
  let lastIndex

  const EditTaker = async (e) => {
    e.preventDefault();
    if (uservalidation()) {
      try {
        const formdata = new FormData()

        formdata.append('username', value.username)
        formdata.append('profileimage', value.profileimage)
        formdata.append('phone', value.phone)



        const Res2 = await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/TakerprofileEdit/" + Takeruserinitial.id, formdata, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the appropriate content type
            // Add any other headers as needed (e.g., authorization headers)
          },
        });
        lastIndex = Res2.data;
        dispatch(UpdateUser({ index: lastIndex, updateuser: Res2.data }))
      }
      catch (error) {
        console.log(error)
      }
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

          <div className='h-[350px] w-[600px] border-slate-700			bg-[#fefdfd] ml-[444px] mt-14 pt-10  shadow-2xl'>

            <div className='grid grid-cols-2'>

              <div className='pl-32 '>
                <img src={Takeruserinitial.profileimage}
                  className='rounded-full h-24 w-24' alt="" />
              </div>
              <div className=''>
              <h1 className='mt-8 ml-8 '>Hey,Im</h1><h1 className='text-2xl'>{Takeruserinitial.username}</h1> <h1 className=''>{Takeruserinitial.email}</h1>
              </div>

            </div>

              <div className=' mt-14   flex gap-6 pt-6 pl-24 '>

                {/* <button className='bg-[#9A9A9A] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button> */}
                {/* user details edit modal */}


                <Button onClick={setSecond} variant="" className='bg-[#4cb4bd]'>
                  Edit Profile
                </Button>
                <Dialog open={secondOpen} handler={setSecond}>
                  <DialogBody>
                    <div className='flex  flex-col	justify-center	items-center'>

                      <form action="" onSubmit={EditTaker} className="flex flex-col items-center">
                        <div className='mb-2'>
                          <h1 className='text-3xl mb-4'>Edit Taker profile</h1>
                        </div>

                        <div className='mb-3 w-full'>

                          <input type="text" name='username' value={value.username} onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Give a Name to Your Service' />
                        </div>
                        <div className='mb-3 w-full'>
                          <input type="text" name='phone' value={value.phone} onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Give a Name to Your Service' />
                        </div>
                        <div className='mb-3 w-full'>
                          <input type="file" name='profileimage' accept="image/*" onChange={(e) => handleImageChange(e)} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Give a Name to Your Service' />
                        </div>
                        <div>
                          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mx-4">Submit</button>
                        </div>
                      </form>
                    </div>
                  </DialogBody>

                </Dialog>



                {TakeridInitial.user || takerintialimage ? <button onClick={() => navigate('/PetTakers/TakeraboutEdit')}>About Taker</button> : null}


                {/* modal */}
                {TakeridInitial.user || takerintialimage ? <Button onClick={handleOpen} variant="" className='bg-[#729a60]'>
                  Edit Description
                </Button> : null}
                <Dialog open={open} handler={handleOpen}>
                  {/* <DialogHeader>Edit Taker Description</DialogHeader> */}
                  <DialogBody>
                    <div className='flex  flex-col	justify-center	items-center'>

                      <form action="" onSubmit={EditDescription} className="flex flex-col items-center">
                        <div className='mb-2'>
                          <h1 className='text-3xl mb-4'>Edit Taker Description</h1>
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

                </Dialog>



                {/* modal end */}

              </div>

            </div>

          </div>
        </div>
      </div>


  )
}

export default PettakerProfile
