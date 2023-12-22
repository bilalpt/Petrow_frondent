import React from 'react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { Form } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Updateboarduser } from '../../Redux/BoardUser';
import axios from 'axios';



const BoardProfile = () => {

  const dispatch = useDispatch()


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const { BoarduserRedux } = useSelector((state) => state.user);

  const [userState, userSetstate] = useState({
    id: BoarduserRedux.id,
    username: BoarduserRedux.username,
    phone: BoarduserRedux.phone,
    profileimage: null
  })

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    userSetstate((value) => ({
      ...value,
      profileimage: file,

    }));
  }

  const EditBoarduser = async (e) => {
    e.preventDefault();
    console.log("function-----------------------------------");
    try {
      const formdata = new FormData()

      formdata.append('username', userState.username)
      formdata.append('phone', userState.phone)
      formdata.append('profileimage', userState.profileimage)

      console.log(formdata, 'board user form data');
      console.log(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Updateboardprofile/" + BoarduserRedux.id,"-------------------------");
      const Res2 = await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Updateboardprofile/" + BoarduserRedux.id, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the appropriate content type
          // Add any other headers as needed (e.g., authorization headers)
        },
      });
      console.log(Res2.data, 'board user');
      const boarduserupdated = BoarduserRedux;
      dispatch(Updateboarduser({ index: boarduserupdated, updatboarduser: Res2.data }))

    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div>
        <BoardNavbar />
      </div>
      <div className='grid grid-rows-[5rem,1fr] bg-[#EEEEEE] h-screen w-full'>

        <div className='grid grid-rows-[3rem,1fr]'>
          <div className='bg-[#817299] shadow-2xl'></div>
          <div className='grid grid-cols-[57rem,1fr] bg-[#EEEEEE]]'>
            <div className='flex justify-between'>
              <div className='flex justify-end w-full'>
                <div className='border rounded-full h-24 w-24 me-10 mt-10'>
                  <img src={BoarduserRedux.profileimage}
                    className='rounded-full h-24 w-24' alt="" />
                </div>
              </div>
              <div className='bg-[#9f92b5] w-[2px] h-60 mt-4  '>

              </div>
              <div className=' mt-8 ml-8 '>
                <h1 className=''>Hey,Im</h1><h1 className='text-2xl'>{BoarduserRedux.username}</h1> <h1 className=''>{BoarduserRedux.email}</h1><h1 className=''>{BoarduserRedux.phone}</h1>
                <div className=' mt-14   flex gap-4'>

                  {/* <button className='bg-[#9A9A9A] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
                  <button className='bg-[#AC5555] hover:bg-red-700 text-white font-bold py-2 px-4 rounded pl-4'>logout</button> */}

                  <Button onClick={handleOpen} variant="gradient">
                    Edit Profile
                  </Button>
                  <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Edit Your Profile</DialogHeader>
                    <DialogBody>
                      <form action="" onSubmit={EditBoarduser}>

                        <div>
                          <input type="text" name='username' value={userState.username} onChange={(e) => userSetstate({ ...userState, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Give a Name to Your Service' />
                        </div>
                        <div className='mb-3 w-full'>
                          <input type="text" name='phone' value={userState.phone} onChange={(e) => userSetstate({ ...userState, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120 mt-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Give a Name to Your Service' />
                        </div>
                        <div className='mb-3 w-full'>
                          <input type="file" name='profileimage' accept="image/*" onChange={(e) => handleImageChange(e)} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Give a Name to Your Service' />
                        </div>
                      </form>

                    </DialogBody>
                    <DialogFooter>
                      <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                      >
                        <span>Cancel</span>
                      </Button>
                      <Button variant="gradient" color="green" onClick={EditBoarduser}>
                        <span>Confirm</span>
                      </Button>
                    </DialogFooter>
                  </Dialog>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default BoardProfile
