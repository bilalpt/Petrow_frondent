import React from 'react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'
import { useState } from 'react'
// import { toast } from 'react-toastify'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { setBorderFormRedux } from '../../Redux/BoardUser';
import { useNavigate } from 'react-router-dom';

const BordingForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formstate,usestate]=useState({pettype:'',nuberofpetboarded:'',petbreed:'',petsize:'',additionalinfo:'',startdate:'',enddate:''})


    //validation

    const boardformvalid=()=>{
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


    //form submission

    const Boardformsignup=async(e)=>{
        e.preventDefault();
        if(boardformvalid())
        try {

            const response= await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL +"petboarding/Boardingform",formstate)
            console.log(response)
            dispatch(setBorderFormRedux(response.data))
            toast.success(response.data.msg);
            navigate('/PetBoards/Summary')

            usestate({selectpettype:'',numberofpetboard:'',petbreed:'',petsize:'',additional_info:'',boardingdate:'',boardingenddate:''})




    } catch (error) {
        console.log(error);
        if (error.response && error.response.data) {
            const errorData = error.response;   
            if (errorData.email) {
                toast.error(errorData.email[0]);
            }
        } else {
            toast.error("An error occurred during registration.");
        }
    }
}





    return (

        <div >
            <ToastContainer/>

            <div>
                <BoardNavbar />
            </div>


            <div className='bg-[#EEEEEE] h-screen flex justify-center items-center shadow-2xl'>
                <div className='bg-[#ffffff] flex flex-col items-center w-2/4 p-6 rounded-lg shadow-2xl'>

                    <form action="" onSubmit={Boardformsignup} className="flex flex-col items-center">
                        <div className='mb-4'>
                            <h1 className='text-3xl mb-4'>Pet Boarding</h1>
                        </div>

                        <div className='mb-4 w-full'>
                            <select 
                            name="selectpettype"
                            value={formstate.selectpettype}
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
                            value={formstate.numberofpetboard}
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
                            <input name='petbreed' onChange={(e)=>usestate({...formstate,[e.target.name]:e.target.value})}className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Pet Breed' />

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
                            <input  name='additionalinfo' onChange={(e)=>usestate({...formstate,[e.target.name]:e.target.value})} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Additional Information' />

                        </div>


                        <div className="mb-4 w-full">

                            <input name='boardingdate'
                            value={formstate.boardingdate}
                            onChange={(e)=>usestate({...formstate,startdate:e.target.value})}
                            className='w-full md:w-96 lg:w-120   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" />
                        </div>
                        <span className=" my-1 text-gray-500">End to</span>

                        <div className="mb-4 w-full ">

                            <input
                            name='boardingenddate'
                            value={formstate.boardingenddate}
                            onChange={(e)=>usestate({...formstate,enddate:e.target.value})}
                              className='w-full md:w-96 lg:w-120   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" />
                        </div>








                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full mx-4">Submit</button>
                    </form>

                </div>
            </div>




        </div>

    )
}

export default BordingForm
