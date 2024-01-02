import React from 'react'
import tarapet from '../../../../../assets/tarapet.jpg'
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";






function Takerrequestpage() {
  const [usersstate, setUsers] = useState([]);

  const [aboutstate, setaboutuser] = useState({ id: '', introduction: '', petexperience: '', workstatus: '', skillandqualifications: '', otherpetqualifications: '', user: '' })

  const [Takerdescription, settakerdescription] = useState({ id: '', servicename: '', petcount: '', acceptingpet: '', acceptingpetsize: '', howmanywalk: '', apartmentorhome: '', transportemergencies: '', sleepinglocation: '', price: '', location: '', pincode: '', user: '' })

  const [sample, setSample] = useState({ id: '', Takeraccept: '', user: '' })
  console.log(sample, 'sample.user');



  const [Takerpetwithstate, Takerpetwithsetstate] = useState({ id: '', image: '' })


  // const toggleTakeraccept = () => {
  //   setSample(prevState => ({
  //     ...prevState,
  //     Takeraccept: !prevState.Takeraccept // Toggling the value
  //   }));
  // };


  const id = useParams();
  const userId = id.userId

  const fetchData = async () => {
    console.log(sample,'jilsha');
    const credentials = {
      "Takeraccept": sample.Takeraccept == true ? false : true
    }
    const Takeridproofupdate = await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/TakeridproofEdit/" + sample.id, credentials)
    console.log("The state is not set yet")
  }

  const rejectdelete = async ()=>{
    try{
      const Takeridproofupdate = await axios.delete(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/Takeridformdelete/" + sample.id)


    }catch (error){
      console.log(error,'error occure');

    }

  }


  useEffect(() => {
    dataFetch()
  }, [])


  useEffect(() => {
    // fetchData()
  }, [sample.id]);




  async function dataFetch() {
    try {



      const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Pettakerlist")
      const users = response.data;

      //taker about page
      const aboutdetails = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/AboutpageRetrive/" + userId)
      const aboutusers = aboutdetails.data[0];
      // console.log(aboutusers,'about details');

      setaboutuser(aboutusers)


      //taker description
      const Takerdescription = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/descriptionRetrive/" + userId)
      const userdescrition = Takerdescription.data[0];
      settakerdescription(userdescrition)

      for (let user of users) {
        if (user.id == userId) {
          setUsers(user)
          break;
        }
      }


      const takeridimages = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/TakerIdRetreve/" + userId)
      const takeridimagesdetais = takeridimages.data[0]
      console.log("Thi is the data: ", takeridimagesdetais)
       setSample(takeridimagesdetais)


      const Petwithimagelist = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/Petwithimagelist/" + userId)
      const petwithimage = Petwithimagelist.data[0]
      Takerpetwithsetstate(petwithimage)






      console.log(Takeridproofupdate, 'DATA GETING HERE');



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

            <h1 className='mt-4 ml-12'>{aboutstate.skillandqualifications}</h1>


            <h1 className='text-xl mt-8'>Other Special skill pet Qualification</h1>

            <h1 className='mt-4 ml-12'>{aboutstate.otherpetqualifications}</h1>


            <h1 className='text-xl mt-8'>ID photos</h1>
            <div className='grid grid-cols-6 '>
              <img
                src={sample.adharimg}
                className=" h-28  ml-12 mt-4  "
                alt="cropanimal"
              />
              <img
                src={sample.otheridimg}
                className=" h-28  ml-12 mt-4  "
                alt="cropanimal"
              />

            </div>


            <h1 className='text-xl mt-8'>Pet with</h1>

            <div className='grid grid-cols-6 '>
              <img
                src={Takerpetwithstate.image}
                className=" h-28  ml-12 mt-4  "
                alt="cropanimal"
              />


            </div>



          </div>
          <Link to={`/AdminRouters/AdminHome/AdminTakerUser`} ><button className='mt-10 bg-[#ffffff] h-10 w-20  rounded-md ml-96' onClick={rejectdelete}>Reject</button></Link>

          <Link to={`/AdminRouters/AdminHome/AdminTakerUser`} ><button className='mt-10 bg-[#9A87B7] h-10 w-20 text-[#ffffff] rounded-md ml-10 mb-28' onClick={fetchData}>Accept</button></Link>
        </div>
      </div>


    </>
  )
}

export default Takerrequestpage
