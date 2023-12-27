import React from 'react'
import tarapet from '../../../../../assets/tarapet.jpg'
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';  
import { useState } from 'react';





function Takerrequestpage() {
  const [usersstate, setUsers] = useState([]);

  const [aboutstate,setaboutuser]=useState({id:'',introduction  :'',petexperience:'',workstatus:'',skillandqualifications:'',otherpetqualifications:'',user:''})

  const [Takerdescription,settakerdescription]=useState({id:'',servicename:'',petcount:'',acceptingpet:'',acceptingpetsize:'',howmanywalk:'',apartmentorhome:'',transportemergencies:'',sleepinglocation:'',price:'',location:'',pincode:'',user:''})

  const id  = useParams();
  const userId= id.userId

  useEffect(()=>{
    dataFetch()
  },[])




  async function dataFetch(){
    try {
      const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Pettakerlist")
      const users = response.data;

      //taker about page
      const aboutdetails = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/AboutpageRetrive/"+userId)
      const aboutusers = aboutdetails.data;
      console.log(aboutusers,'about details');

      setaboutuser(aboutusers)


      //taker description
      const Takerdescription = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/descriptionRetrive/"+userId)
      const userdescrition = Takerdescription.data;
      console.log(userdescrition,'Takerdescription');
      settakerdescription(userdescrition)







      for (let user of users) {
        if (user.id == userId) {
          setUsers(user)
          break;
        }
      }




      console.log(response.data, 'admin board users data ');
    } catch (error) {
      console.error("Error fetching users:", error)
    }

  }


  return (
    <>
      <div className='bg-[#D9D9D9] mb-20'>

        <div className='ml-10  '>

            <h1 className='text-4xl pt-10'>User details</h1>
          <div className='ml-7 ' >
            <h1 className='text-xl mt-8'>Servicer Name</h1>

            <h1 className='mt-4 ml-12'>{usersstate.username}</h1>

            <h1 className='text-xl mt-8'>Introduction</h1>

            <h1 className='mt-4 ml-12'>{aboutstate.introduction}</h1>


            <h1 className='text-xl mt-8'>Type of pet</h1>

            <h1 className='mt-4 ml-12'>{Takerdescription.acceptingpet}</h1>


            <h1 className='text-2xl mt-8'>Your skill and Qualification</h1>

            <h1 className='mt-4 ml-12'>Some vaterinary experience</h1>


            <h1 className='text-xl mt-8'>Other Special skill pet Qualification</h1>

            <h1 className='mt-4 ml-12'>Nill</h1>


            <h1 className='text-xl mt-8'>ID photos</h1>
            <div className='grid grid-cols-6 '>
                        <img
                            src={tarapet}
                            className=" h-28  ml-12 mt-4  "
                            alt="cropanimal"
                        />
                                                <img
                            src={tarapet}
                            className=" h-28  ml-12 mt-4  "
                            alt="cropanimal"
                        />

            </div>


            <h1 className='text-xl mt-8'>Pet with</h1>

            <div className='grid grid-cols-6 '>
                        <img
                            src={tarapet}
                            className=" h-28  ml-12 mt-4  "
                            alt="cropanimal"
                        />


            </div>



          </div>
          <button className='mt-10 bg-[#ffffff] h-10 w-20  rounded-md ml-96'>Reject</button>

          <button className='mt-10 bg-[#9A87B7] h-10 w-20 text-[#ffffff] rounded-md ml-10 mb-28 '>Accept</button>
        </div>
      </div>


    </>
  )
}

export default Takerrequestpage
