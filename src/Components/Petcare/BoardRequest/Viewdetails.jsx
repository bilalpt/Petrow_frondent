import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Viewdetails() {
    const { id } = useParams();
    const boardId = id

    useEffect(() => {
        Boardrequests()
    }, [])

    const [state, setstate] = useState([])
    console.log(state,'statestatestatestatestatestatestate statestatestatestatestatestatestatestate');

    const Boardrequests = async (e) => {
        try {
            const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Boardingform")
            const board = response.data.values
            const boardsingledata = board.filter(item => item.id == boardId)
            setstate(boardsingledata)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='bg-[#EEEEEE] h-full flex justify-center items-center shadow-2xl pt-24 pb-24'>
                    {state.map(data => (
                    <div key={data.id} className='bg-[#ffffff] flex flex-col items-center w-2/4 p-6 rounded-lg shadow-2xl'>
                    <h1 className='text-2xl place-self-start text-[#757575]'>Request Summary</h1>
                    <h1 className='place-self-start pt-5'>confirm or edit the details of your request before sending it out to pet lover in your area</h1>
                    <h1 className='text-lg place-self-start text-[#757575] pt-5'>How many pets do you need to board?</h1>
                    <h1 className='place-self-start pt-5'>{data.nuberofpetboarded}</h1>
                    <h1 className='text-lg place-self-start text-[#757575] pt-5'>What type pet of it</h1>
                    <h1 className='place-self-start pt-5'>{data.pettype}</h1>
                    <h1 className='text-lg place-self-start text-[#757575] pt-5'>What breed is it</h1>
                    <h1 className='place-self-start pt-5'>{data.petbreed}</h1>
                    <h1 className='text-lg place-self-start text-[#757575] pt-5'>what is the size of the pet</h1>
                    <h1 className='place-self-start pt-5'>{data.petsize}</h1>
                    <h1 className='text-lg place-self-start text-[#757575] pt-5'>Anything else the sitter will need to know(optional)</h1>
                    <h1 className='place-self-start pt-5'>{data.additionalinfo}</h1>
                    <h1 className='text-lg place-self-start text-[#757575] pt-5'>Pincode</h1>
                    <h1 className='place-self-start pt-5'>{data.pincode}</h1>
                    <h1 className='text-lg place-self-start text-[#757575] pt-5'>Start Date</h1>
                    <h1 className='place-self-start pt-5'>{data.startdate}</h1>
                    <h1 className='text-lg place-self-start text-[#757575] pt-5'>End date</h1>
                    <h1 className='place-self-start pt-5'>{data.enddate}</h1>
                    </div>

                    ))}


            </div>
        </div>

    )
}
