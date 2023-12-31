    import React from 'react'
    // import { BoardNavbar } from '../../../Navbar/BoardNavbar'
    import Dogwith from "../../../assets/Dogwith.png"
    import { useState } from 'react'
    import { ToastContainer, toast } from "react-toastify";
    import axios from 'axios';
    import { TakerAboutfun } from '../../../Redux/BoardTakerRedux';
    import { useDispatch } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { useEffect } from 'react';
    import jwtDecode from 'jwt-decode';




    function TakerAbout() {

        const dispatch = useDispatch()
        const navigate = useNavigate()

        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);

        const [about, aboutstate] = useState({ introduction: '', petexperience: '', workstatus: '', skillandqualifications: '', otherpetqualification: '' ,user: decoded.id })
        console.log(about);





//user cant go back

        useEffect(() => {
            window.history.pushState(null, null, '/PetTakers/TakerAbout');
          
            window.addEventListener('popstate', function (event) {
              event.preventDefault();
            });
          
            return () => {
              window.removeEventListener('popstate', function (event) {
                event.preventDefault();
              });
            };
          }, []);
//user cant go back end


        //taker form validation

        const validation = () => {
            if (about.introduction.trim() === '') {
                toast.error('please add introduction');
                return false;
            }
            else if (about.petexperience.trim() === '') {
                toast.error('please add pet experience ');
                return false;
            }
            else if (about.workstatus.trim() === '') {
                toast.error('please add what do you enjoy about work');
                return false;
            }
            else if (about.skillandqualifications.trim() === '') {
                toast.error('please add skill and qualifications');
                return false;
            }
            else if (about.otherpetqualification.trim() === '') {
                toast.error('please enter other pet qualifications');
                return false;
            }
            return true;
        }



        //taker about page function

        const handleFormSubmit = async (e) => {
            e.preventDefault();

            if (validation()) {

                try {

                    // const user = decoded.id;
                    // console.log('baxter',user);

                    // console.log('Before update:', about);
                    // aboutstate({ ...about, user:user });

                    console.log('After update:', about);
    
                    const response = await axios.post(
                        import.meta.env.VITE_PETBOARDUSERS_URL + 'petcare/TakerAboutpage',
                        about,
                        { withCredentials: true }
                    );

                    dispatch(TakerAboutfun({TakerAbout:response.data}));

                    toast.success(response.data.msg);
                    console.log('success aboutpage', response);
    
                    navigate('/PetTakers/TakerDescription');
                } catch (error) {
                    console.log(error);
                }
            }
        };





        return (
            <>
                <div className='bg-[#817299] '>
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
                                    <form action="" onSubmit={handleFormSubmit} className="flex flex-col items-center">
                                        <div className='mb-4'>
                                            <h1 className='text-3xl mb-4'>About Me</h1>
                                        </div>
                                        <div className='mb-4 w-full'>
                                            <input type="text" value={about.introduction} name='introduction' onChange={(e) => aboutstate({ ...about, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Intreduce Your Self' />

                                        </div>

                                        <div className='mb-4 w-full'>
                                            <input type="text" name='petexperience' value={about.petexperience} onChange={(e) => aboutstate({ ...about, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pet With Experience' />

                                        </div>

                                        <div className='mb-4 w-full'>

                                            <input type="text" name='workstatus' value={about.workstatus} onChange={(e) => aboutstate({ ...about, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='What Do You Enjoy About Work Do' />

                                        </div>

                                        <div className='mb-4 w-full'>

                                            <select
                                                name="skillandqualifications"
                                                value={about.skillandqualifications}
                                                onChange={(e) => aboutstate({ ...about, skillandqualifications: e.target.value })} className='w-full md:w-96 lg:w-120 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="">

                                                <option selected>Experience in training</option>
                                                <option value="Behavioral modification">Behavioral modification</option>
                                                <option value="Basic understanding of how to manage and care for pets">Basic understanding of how to manage and care for pets</option>
                                                <option value="Some veterinary experience">Some veterinary experience</option>
                                                <option value="No experience">No experience</option>

                                            </select>

                                        </div>

                                        <div className='mb-4 w-full'>
                                            <input type="text" name='otherpetqualification' value={about.otherpetqualification} onChange={(e) => aboutstate({ ...about, [e.target.name]: e.target.value })} className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Other Pet Qualification' />

                                        </div>

                                        <button  className="bg-blue-500 text-white py-2 px-4 rounded-full mx-4">Submit</button>

                                    </form>

                                </div>

                            </div>




                        </div>

                    </div>


                </div>

            </>

        )
    }

    export default TakerAbout

