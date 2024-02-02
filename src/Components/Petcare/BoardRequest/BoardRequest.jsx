import React, { useEffect, useState } from 'react'
import { CareNavbar } from '../../../Navbar/CareNavbar';
import { Button } from "@material-tailwind/react";
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function BoardRequest() {

    const navigate = useNavigate()




    const token = localStorage.getItem('token')
    const decode = jwtDecode(token)
    const userId = decode.id

    useEffect(() => {
        Boardrequest()
    }, [])

    const [setboard, boardsetstate] = useState([])
    const [setform, setstateform] = useState([])
    const [invitations, setInvitations] = useState([])
    console.log(invitations, 'invitations invitations invitations');


    // let boarduserdata;
    // let boardingfomsdata

    const Boardrequest = async (e) => {
        try {

            // const updateinvitation = await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Updateinvitation")

            const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/ListInvitation")
            const boarddata = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Boardingform")
            const boardform = boarddata.data.values
            console.log(boardform, 'boardforms');
            const users = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Petboardownerlist")
            const boardusers = users.data
            const datas = response.data
            if (datas && boardusers && boardform) {
                const reciveruserdata = datas.filter(item => item.receiver == userId);
                setInvitations(reciveruserdata)
                const allboardingforms = reciveruserdata.map(item => item.boardingform)
                const boardingfomsdata = boardform.filter(item => allboardingforms.includes(item.id))
                setstateform(boardingfomsdata)
                const allSenders = reciveruserdata.map(item => item.sender);
                const boarduserdata = boardusers.filter(item => allSenders.includes(item.id));
                boardsetstate(boarduserdata)

            } else {
                console.log('no data found ');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleAccept = async (invitationId) => {
        try {
            const updateinvitation = await axios.patch(`${import.meta.env.VITE_PETBOARDUSERS_URL}petboarding/Updateinvitation/${invitationId}`);

            console.log(updateinvitation, 'updateinvitation');

            if (updateinvitation.status === 200) {
                // Update the local state to reflect the accepted invitation
                setInvitations((prevInvitations) =>
                    prevInvitations.map((invitation) => {
                        console.log('invitationId:', invitationId);
                        console.log('invitation:', invitation);

                        return invitation.id === invitationId
                            ? { ...invitation, status: 'Accepted' }
                            : invitation;
                    })
                );
            } else {
                console.error('Failed to update invitation');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleReject = async (invitationId) => {
        try {
            const updateinvitation = await axios.patch(`${import.meta.env.VITE_PETBOARDUSERS_URL}petboarding/Rejectinvitation/${invitationId}`);

            if (updateinvitation.status === 200) {
                // Update the local state to reflect the rejected invitation
                setInvitations((prevInvitations) =>
                    prevInvitations.map((invitation) =>
                        invitation.id === invitationId
                            ? { ...invitation, status: 'Rejected' }
                            : invitation
                    )
                );
            } else {
                console.error('Failed to update invitation');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

console.log(setboard,'======================================================>>>>>>');
    return (
        <>
            <div>
                <CareNavbar />
            </div>
            <div className='bg-[#817299] h-12 shadow-2xl'></div>

            {invitations.map(data => (
                setboard.map(user => (
                    (data.sender === user.id ? (
                        <div key={data.id} className='h-auto w-[600px] border-slate-700 bg-[#fefdfd] ml-[433px] mt-14 pt-10 shadow-2xl pb-10'>
                            <div className='pl-10'>
                                <table>
                                    <tr className='text-[#615656] '>
                                        <th className='ml-10'>{user.username}</th>
                                        <Button onClick={() => { navigate(`Viewdetails/${data.boardingform}`); }} className='ml-10 pt-4 bg-[#eff1f5] text-black'>
                                            View User Details
                                        </Button>

                                        {data.status === "Pending" ? (
                                            <>
                                                <Button onClick={() => handleAccept(data.id)} className='ml-6 bg-[#3267b1]'>
                                                    Accept
                                                </Button>
                                                <Button onClick={() => handleReject(data.id)} className='ml-6 bg-[#e14242]'>
                                                    Reject
                                                </Button>
                                            </>
                                        ) : (
                                            <div className='pl-64 text-[#7197cc]'>
                                                {data.status === "Rejected" ? "Rejected" : (
                                                    <Button onClick={()=>navigate(`/PetTakers/chats`,{state:{user}})} className='text-[#ffffff] bg-[#5e718e] mt-10'>Message</Button>
                                                )}
                                            </div>
                                        )}
                                    </tr>
                                </table>
                            </div>
                        </div>
                    ) : null)
                ))
            ))}




        </>
    )
}

export default BoardRequest
