import React from 'react'
import Dogwith from "../../../assets/Dogwith.png"
import { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { UpdateAboutpage } from '../../../Redux/BoardTakerRedux'
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios'



function TakeraboutEdit() {

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const [aboutstate, aboutsetstate] = useState({ id: '', introduction: '', petexperience: '', workstatus: '', skillandqualifications: '', otherpetqualification: '' })
    // const [about, aboutstate] = useState({ introduction: '', petexperience: '', workstatus: '', skillandqualifications: '', otherpetqualification: '' ,user: decoded.id })


    const { TakerAbout } = useSelector((state) => state.takerforms);
    const data = TakerAbout.data

    const Takeraboutarray=TakerAbout[TakerAbout.length-1]

    console.log(Takeraboutarray,'baxterrrrrrrrrrrrrrrrr');


    console.log(data,'swetha');







    useEffect(() => {

        if (data || Takeraboutarray!==null){
            if(data){
                aboutsetstate({
                    id: data.id,
                    introduction: data.introduction,
                    petexperience: data.petexperience,
                    workstatus: data.workstatus,
                    skillandqualifications: data.skillandqualifications,
                    otherpetqualification: data.otherpetqualification,
        
                });

            }else if (Takeraboutarray){
 
                aboutsetstate({
                    id: Takeraboutarray.id,
                    introduction: Takeraboutarray.introduction,
                    petexperience: Takeraboutarray.petexperience,
                    workstatus: Takeraboutarray.workstatus,
                    skillandqualifications: Takeraboutarray.skillandqualifications,
                    otherpetqualification: Takeraboutarray.otherpetqualification,
        
                });

            }


        }else{
            console.log('about taker data not enterd');
        }


    }, [])

    //validation

    const editaboutValidation = () => {
        if (aboutstate.introduction.trim() === '') {
            toast.error('please enter introduction');
            return false
        }
        else if (aboutstate.petexperience.trim() === '') {
            toast.error('please enter Petexperience ');
            return false
        }
        else if (aboutstate.workstatus.trim() === '') {
            toast.error('please enter workstatus');
            return false;

        }
        else if (aboutstate.skillandqualifications.trim() === '') {
            toast.error('please enter skillandqualifications');
            return false;

        }

    }

    const editabout = async (e) => {
        e.preventDefault();
        if (editaboutValidation())
        console.log(data.id,'akshy');


            try {
                const response = await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/TakeraboutEdit/" + aboutstate.id, aboutstate)
                console.log(response)
                const lastIndex = response.data
                dispatch(UpdateAboutpage({ index: lastIndex, updateaboutpage: response.data }))
                navigate()

            } catch (error) {
                console.log(error);
            }
    }


    return (
        <>
            <div className=' grid grid-cols-1 md:grid-cols-2 mb-64 bg-[#817299] h-screen '>
                <div className=' grid grid-cols-1  md:ml-28   '>
                    <img className=' md:h-[60vh]' src={Dogwith} alt="" />
                </div>
                <div className='bg-[#817299] h-screen '>
                    <div className='bg-[#ecd6d6]  items-center w-1/2 p-6 rounded-lg shadow-2xl  ml-20  md:mt-20 h-3/4'>
                        <form action="" onSubmit={editabout} className="flex flex-col items-center">
                            <div className='mb-4'>
                                <h1 className='text-3xl mb-4'>Edit Taker About</h1>
                            </div>
                            <div className='mb-4 w-full'>
                                <input type="text" name='introduction' value={aboutstate.introduction} onChange={(e) => aboutsetstate({ ...aboutstate, [e.target.name]: e.target.value })} className='w-full md: lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Intreduce Your Self' />

                            </div>

                            <div className='mb-4 w-full'>
                                <input type="text" name='petexperience' value={aboutstate.petexperience} onChange={(e) => aboutsetstate({ ...aboutstate, [e.target.name]: e.target.value })} className='w-full md: lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pet With Experience' />

                            </div>

                            <div className='mb-4 w-full'>

                                <input type="text" name='workstatus' value={aboutstate.workstatus} onChange={(e) => aboutsetstate({ ...aboutstate, [e.target.name]: e.target.value })} className='w-full md: lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='What Do You Enjoy About Work Do' />

                            </div>

                            <div className='mb-4 w-full'>

                                <select

                                    value={aboutstate.skillandqualifications}
                                    onChange={(e) => aboutsetstate({ ...aboutstate, skillandqualifications: e.target.value })}
                                    name="skillandqualifications"
                                    className='w-full md: lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="">

                                    <option selected>Experience in training</option>
                                    <option value="Behavioral modification">Behavioral modification</option>
                                    <option value="Basic understanding of how to manage and care for pets">Basic understanding of how to manage and care for pets</option>
                                    <option value="Some veterinary experience">Some veterinary experience</option>
                                    <option value="No experience">No experience</option>

                                </select>

                            </div>

                            <div className='mb-4 w-full'>
                                <input type="text" name='otherpetqualification' value={aboutstate.otherpetqualification} onChange={(e) => aboutsetstate({ ...aboutstate, otherpetqualification: e.target.value })} className='w-full md: lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Other Pet Qualification' />

                            </div>

                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full mx-4">Submit</button>

                        </form>


                    </div>

                </div>



            </div>

        </>

    )
}

export default TakeraboutEdit
