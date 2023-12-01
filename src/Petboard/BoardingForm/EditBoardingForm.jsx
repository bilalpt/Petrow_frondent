import React from 'react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { setBorderFormRedux } from '../../Redux/BoardUser';
import { useNavigate } from 'react-router-dom';
import { UpdateBoardForm } from '../../Redux/BoardUser'

const EditBoardingForm = () => {

    const dispatch =useDispatch()
  const [formstate,usestate]=useState({id:'',pettype:'',nuberofpetboarded:'',petbreed:'',petsize:'',additionalinfo:'',startdate:'',enddate:''})

  const {BordFormRedux}=useSelector((state)=>state.user);
//   console.log(BordFormRedux);

  useEffect(()=>{

    const data = BordFormRedux[BordFormRedux.length -1]
    
    usestate({
        id:data.id,
        pettype:data.pettype,
        nuberofpetboarded:data.nuberofpetboarded,
        petbreed:data.petbreed,petsize:data.petsize,
        additionalinfo:data.additionalinfo,
        startdate:data.startdate,
        enddate:data.enddate,
    })

  }, [])

  const navigate=useNavigate()


  //validation

  const editboardformvalid=()=>{
    if (formstate.pettype.trim()===''){
        toast.error('select pettype');
        return false;
    }
    else if(formstate.nuberofpetboarded.trim()===''){
        toast.error('Select number of pet board');
        return false;
    }
    else if(formstate.petbreed.trim()===''){
        toast.error('please enter pet breed');
        return false;
    }
    else if(formstate.petsize.trim()===''){
        toast.error('please select petsize');
        return false;
    }
    else if(formstate.startdate.trim()===''){
        toast.error('please add boarding date');
        return false;
    }
    else if(formstate.enddate.trim()===''){
        toast.error('please add boarding ending date');
        return false;
    }
    return true
}

const editboardfun= async(e)=>{
  e.preventDefault();
  if(editboardformvalid())
  try{

    const response= await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL +"petboarding/boardingformEdit/"+formstate.id ,formstate)
    console.log(response)
    const lastIndex = BordFormRedux.length - 1;
    dispatch(UpdateBoardForm({index:lastIndex,upadateboardform: response.data}));
    // toast.success(response.data.msg);
    navigate('/PetBoards/Summary')
    
  }catch(error){
    console.log(error);
    console.log('edit board error occure');
  }

}


  return (
    <>
      <div>
      <BoardNavbar />
      </div>
      <div className='bg-[#EEEEEE] h-screen flex justify-center items-center shadow-2xl'>
                <div className='bg-[#ffffff] flex flex-col items-center w-2/4 p-6 rounded-lg shadow-2xl'>

                    <form action="" onSubmit={editboardfun}  className="flex flex-col items-center">
                        <div className='mb-4'>
                            <h1 className='text-3xl mb-4'>Edit Pet Boarding</h1>
                        </div>

                        <div className='mb-4 w-full'>
                            <select 
                            name="selectpettype"
                            value={formstate.pettype}
                            onChange={(e)=>usestate({...formstate,pettype:e.target.value})}
                            className="w-full md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Pet Type</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>

                            </select>
                        </div>

                        <div className='mb-4 w-full'>
                            <select
                            name='numberofpetboard'
                            value={formstate.nuberofpetboarded}
                            onChange={(e)=>usestate({...formstate,nuberofpetboarded:e.target.value})}
                             className="w-full md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Nomber of Petboarded</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className='mb-4 w-full'>
                            <input name='petbreed' value={formstate.petbreed} onChange={(e)=>usestate({...formstate,[e.target.name]:e.target.value})}className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Pet Breed' />

                        </div>

                        <div className='mb-4 w-full'>
                            <select 
                            name='petsize'
                            value={formstate.petsize}
                            onChange={(e)=>usestate({...formstate,petsize:e.target.value})}
                            className="w-full  md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Pet Size</option>
                                <option value="1-5kg">1-5kg</option>
                                <option value="5-10kg">5-10kg</option>
                                <option value="10-20kg">10-20kg</option>
                                <option value="20-30kg">20-30kg</option>
                            </select>
                        </div>

                        <div className='mb-4 w-full'>
                            <input  name='additionalinfo' value={formstate.additionalinfo} onChange={(e)=>usestate({...formstate,[e.target.name]:e.target.value})} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Additional Information' />

                        </div>


                        <div className="mb-4 w-full">

                            <input name='boardingdate'
                            value={formstate.startdate}
                            onChange={(e)=>usestate({...formstate,startdate:e.target.value})}
                            className='w-full md:w-96 lg:w-120   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" />
                        </div>
                        <span className=" my-1 text-gray-500">End to</span>

                        <div className="mb-4 w-full ">

                            <input
                            name='boardingenddate'
                            value={formstate.enddate}
                            onChange={(e)=>usestate({...formstate,enddate:e.target.value})}
                              className='w-full md:w-96 lg:w-120   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" />
                        </div>








                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full mx-4">Submit</button>
                    </form>

                </div>
            </div>




    </>
    
  )
}

export default EditBoardingForm
