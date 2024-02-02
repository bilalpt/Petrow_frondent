import React from 'react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'



function MyRequests() {

    const usertoken = localStorage.getItem('token')
    const user = jwtDecode(usertoken)
    const userId = user.id
    const navigate=useNavigate()

    const [setinvite, setstateinvite] = useState([])
    const [setuser, setstateuser] = useState([])


    const [setboard, setstateboard] = useState([])


    console.log(setinvite, 'setinvite');
    console.log(setuser, 'setuser');



    useEffect(() => {
        Myrequestdatas()
    }, [])
    const Myrequestdatas = async (e) => {

        try {

            const board = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Boardingform")
            const boarddata = board.data.values
            const Res2 = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/users")
            const response = Res2.data.values
            const invitation = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/ListInvitation")
            const invitaiondatas = invitation.data
            const invitaionuserdata = invitaiondatas.filter(item => item.sender == userId)
            const invitationtaker = invitaionuserdata.map(item => item.receiver)
            const taker = response.filter(item => invitationtaker.includes(item.id))
            const invitersid = invitaionuserdata.map(item => item.boardingform)
            const boarduser = boarddata.filter(item => invitersid.includes(item.id))
            setstateuser(taker)
            setstateboard(boarduser)
            setstateinvite(invitaionuserdata)
        }
        catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className='bg-[#EEEEEE] pb-10 h-full'>

                <div>
                    <BoardNavbar />
                </div>
                <h1 className='pl-80 pt-24 pb-6 text-2xl'>My Requests</h1>
                {setinvite.map(data => (
                    setuser.map(user => {
                        return data.receiver === user.id ? (
                            <div key={data.id} className='bg-[#ffffff] h-40 w-[650px] ml-96 rounded-lg grid grid-cols-2 mt-10'>
                                <div className=''>
                                    <h1 className='text-xl pl-5 pt-3'>Pet Boarding</h1>
                                    <h1 className='text-sm pl-5 pb-3 pt-3'>{user.username}</h1>
                                    <div className=''>
                                        <div className='flex items-center border rounded-full h-10 w-10 me-10 ml-5 '>
                                            <img src={user.profileimage} className='rounded-full h-10 w-10' alt="" />
                                            <h1 className='text-sm pl-14 text-[#c03d3d]'>Wait </h1>
                                        </div>
                                        <h1 className='text-sm pl-20 text-[#c03d3d]'>for replais.................. </h1>
                                    </div>
                                </div>
                                <div className='items-start pt-5 pl-24 '>
                                    <h1 className='text-sm pt-4 pr-28 text-[#c03d3d]'>Status: {data.status}</h1>
                                    {data.status === 'Pending' || data.status === 'Rejected' ? (
                                        <Button className='text-[#ffffff] bg-[#5e718e] mt-10' disabled>
                                            {data.status === 'Pending' ? 'Pending' : 'Rejected'}
                                        </Button>
                                    ) : (
                                        <Button onClick={()=>navigate(`/PetBoards/chats`,{state:{user}})} className='text-[#ffffff] bg-[#5e718e] mt-10'>Message Taker</Button>
                                    )}
                                </div>
                            </div>
                        ) : null;
                    })
                ))}


            </div>


        </>

    )
}

export default MyRequests

