import React from 'react'
import { BoardNavbar } from '../Navbar/BoardNavbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'




function Singleuser() {

    const { id } = useParams();
    const userId = id

    const [setdescription, setstatediscription] = useState([])
    const [setabout, setstateabout] = useState([])
    const [setpet, setstatepet] = useState([])


    const [petset, petsetstate] = useState([]);

    useEffect(() => {
        // Filter the setpet array and update petset state
        const filteredPetSet = setpet.filter(item => item.user == userId);
        console.log(filteredPetSet, 'filteredPetSet filteredPetSet adhil ');
        petsetstate(filteredPetSet || {});
    }, [setpet, userId]);





    useEffect(() => {
        usercard();
    }, []);

    const usercard = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/Takerusershow");

            // Concatenate data from different arrays into a single array
            setstatediscription(response.data.ServiceDescriptiondata)
            setstateabout(response.data.Takeraboutdata)
            setstatepet(response.data.Takerwithpetdata)

            setAllData(newData);
        } catch (error) {
            console.log('Data not found');
        }
    };



    return (
        <>
            <div>
                <BoardNavbar />
            </div>

            <div className='bg-[#e6e1e1] '>

                <div className='ml-10  '>

                    <h1 className='text-4xl pt-10 ml-10'>User details</h1>
                    <div className='ml-7 grid grid-cols-2 ' >
                        <h1 className='text-xl mt-8 ml-8'>Servicer Name</h1>

                        <h1 className='mt-4 ml-12'>Pettaker</h1>

                        <h1 className='text-xl mt-8 ml-8'>Introduction</h1>

                        <h1 className='mt-4 ml-12'>i am a pet taker and </h1>


                        <h1 className='text-xl mt-8 ml-8'>Type of pet</h1>

                        <h1 className='mt-4 ml-12'>dog</h1>


                        <h1 className='text-xl mt-8 ml-8'>Your skill and Qualification</h1>

                        <h1 className='mt-4 ml-12'>petboarding ceartificates</h1>


                        <h1 className='text-xl mt-8 ml-8'>Other Special skill pet Qualification</h1>

                        <h1 className='mt-4 ml-12'>one of the most valuable</h1>





                        <h1 className='text-xl mt-8 ml-8'>Pet with</h1>

                        <div className='grid grid-cols-6 '>
                            {/* Map over the petset array and display images */}
                            {petset.map((user, index) => (
                                <img
                                    key={index}
                                    src={user.image}
                                    className="h-28 ml-12 mt-4"
                                    alt="cropanimal"
                                />
                            ))}
                        </div>





                    </div>

                </div>
            </div>
        </>
    )
}

export default Singleuser
