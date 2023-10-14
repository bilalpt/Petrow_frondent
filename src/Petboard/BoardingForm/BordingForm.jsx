import React from 'react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";



const BordingForm = () => {

    const [formstate,usestate]=useState({selectpettype:'',numberofpetboard:'',petbreed:'',petsize:'',additional_info:'',boardingdate:'',boardingenddate:''})
    console.log(formstate)


    //validation

    // const boardformvalid=()=>{
    //     if (formstate.selectpettype.trim()===''){
    //         toast.error('select pettype');
    //         return false
    //     }
    //     else if(formstate.numberofpetboard.trim()===''){
    //         toast.error('Select number of pet board')
    //         return error
    //     }
    //     else if(formstate.petbreed.trim()===''){
    //         toast.error('please enter pet breed');
    //         return false
    //     }
    //     else if(formstate.petsize.trim()===''){
    //         toast.error('please select petsize');
    //         return false
    //     }
    //     else if(formstate.boardingdate.trim()===''){
    //         toast.error('please add boarding date')
    //         return false
    //     }
    //     else if(formstate.boardingenddate.trim()===''){
    //         toast.error('please add boarding ending date')
    //         return false
    //     }
    // }


    //form submission

    const Boardformsignup=async(e)=>{
        e.preventDefault();
        // if(boardformvalid())
        try {


            const response= await axios.post(
                import.meta.env.Boardingform +"petboarding/Boardingform",formstate
            );
            toast.success(response.data.msg);
            usestate({selectpettype:'',numberofpetboard:'',petbreed:'',petsize:'',additional_info:'',boardingdate:'',boardingenddate:''})



    }
    catch(error){
        console.log(error);
    }
}





    return (

        <div >
            {/* <ToastContainer/> */}

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
                            onChange={(e)=>usestate({...formstate,selectpettype:e.target.value})}
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
                            onChange={(e)=>usestate({...formstate,numberofpetboard:e.target.value})}
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
                            <input  name='additional_info' onChange={(e)=>usestate({...formstate,[e.target.name]:e.target.value})} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Additional Information' />

                        </div>


                        <div className="mb-4 w-full">

                            <input name='boardingdate'
                            value={formstate.boardingdate}
                            onChange={(e)=>usestate({...formstate,boardingdate:e.target.value})}
                            className='w-full md:w-96 lg:w-120   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" />
                        </div>
                        <span className=" my-1 text-gray-500">End to</span>

                        <div className="mb-4 w-full ">

                            <input
                            name='boardingenddate'
                            value={formstate.boardingenddate}
                            onChange={(e)=>usestate({...formstate,boardenddate:e.target.value})}
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
