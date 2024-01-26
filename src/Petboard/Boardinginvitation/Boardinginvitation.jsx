// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import dogwith_boy_image from "../../assets/dogwith_boy_image.jpg"
import tarapet from "../../assets/tarapet.jpg"
import { BoardNavbar } from '../../Navbar/BoardNavbar'
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function Boardinginvitation() {

    const navigate = useNavigate()

    let token = localStorage.getItem('token');
    let decoded = jwtDecode(token);
    let userid = decoded.id

    const { BordFormRedux } = useSelector((state) => state.user);
    const [formstate, usestate] = useState({ id: '', pettype: '', nuberofpetboarded: '', petbreed: '', petsize: '', additionalinfo: '', startdate: '', enddate: '', pincode: '' })


    useEffect(() => {
        const data = BordFormRedux[BordFormRedux.length - 1];
        usestate({ id: data.id, pettype: data.pettype, nuberofpetboarded: data.nuberofpetboarded, petbreed: data.petbreed, petsize: data.petsize, additionalinfo: data.additionalinfo, startdate: data.startdate, enddate: data.enddate, pincode: data.pincode })
    }, [])

    const [setdiscription, setstatediscription] = useState([])
    const [setvalidate, setstatevalidate] = useState([])
    useEffect(() => {
        // Assuming formstate and setformstate are defined somewhere in your component
        const matchingUsers = setdiscription.filter((data) => data.pincode == formstate.pincode);
        setstatevalidate(matchingUsers);
    }, [setdiscription, formstate.pincode]);


    const [settaker, statetakerwit] = useState([])
    useEffect(() => {
        const samepincode = setdiscription.filter(item => item.pincode == formstate.pincode)
    }, [formstate])
    const [secondarray, setsecondaryarray] = useState([]);
    console.log(secondarray,'hey baxter');


    const handleChatClick = (data) => {
        console.log("data:", data); // Log the entire data object
        navigate('/PetBoards/Chat', { state: { data } }); // Pass the entire data object to the next page
    }



    useEffect(() => {
        if (setvalidate && settaker) {
            const mergedUsersData = setvalidate.map((data) => {
                const matchingUser = settaker.find((value) => data.user == value.user);
                console.log(matchingUser, 'matchingUser');
                if (matchingUser) {
                    return Object.assign({}, data, matchingUser);
                } else {
                    return data;
                }
            });

            setsecondaryarray(mergedUsersData);
        }
    }, [setvalidate, settaker]);




    const [setinvite, setstateinvite] = useState()

    const handleInviteClick = (receiverId) => {
        retrevedata()
        setstateinvite({
            sender: userid,
            receiver: receiverId,
            boardingform: formstate.id,
        });

    };
    
    useEffect(() => {
        retrevedata()
    }, [])

    const retrevedata = async (e) => {

        try {
            const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + 'petboarding/showtakerdetails/' + userid)
            const takervar = [...response.data.Takerwithpetdata]
            statetakerwit(takervar)
            const discriptionarray = [...response.data.ServiceDescriptiondata]
            setstatediscription(discriptionarray)
            // Send the data in the expected format

            // Log the data being sent in the request
            console.log('Request Data:',setinvite   
            );

            const adddata = await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Boardinvitation",setinvite);
            // Log the response received from the server
            // console.log('Response Data:', adddata.data);

        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    }


    return (
        <>
            <div>
                <BoardNavbar />

                <div className='h-12 bg-[#817299]'></div>
                <div className='   h-full  bg-[#ffffff] container mx-auto '>

                    <h1 className='text-2xl pt-5 pl-2  md:pl-[96px]'>Pet boarding</h1>
                    <h1 className='mt-2 pl-4 text-sm md:pl-[110px] '>start:{formstate.startdate}</h1>
                    <h1 className='mt-2 pl-4 text-sm md:pl-[110px]'>end:{formstate.enddate}</h1>


                    <img
                        src={dogwith_boy_image}
                        className="pl-10 md:pl-[450px] pt-[70px]"
                        alt="cropanimal"
                    />

                    <h1 className='pl-5 md:pl-32 text-sm text-[#822d2d]  pt-10'>Your quotes are on the way! Potential pet lovers have been informed,please wait for their replay here.Normally most valid requests will get a reply within a few hours.</h1>

                    <h1 className='pl-5 md:pl-32 text-xl pt-10 '>Invite backers To Request</h1>
                    <div className='bg-[#070608] ml-5  md:ml-32 mr-[168px] h-[1px] mt-3 '></div>
                    {secondarray.length > 0 ? (
                        secondarray.map((data) => (

                            <div key={data.user} className='border-[0.5px] border-[#130303] mt-3 md:border-none'>
                                <div className='grid grid-cols-2 md:grid-cols-4 md:h-36 mt-5'>
                                    <div>
                                        <img
                                            src={data.image}
                                            className="pl-5 h-32 md:pl-[134px]"
                                            alt="cropanimal"
                                        />
                                    </div>
                                    <div>
                                        <h1 className='ml-4 md:ml-10 mt-7 text-xl '>{data.servicename}</h1>
                                    </div>
                                    <div></div>
                                    <div>
                                        <h1 className='text-[#d03838] md:mt-28 text-xl '>From INR {data.price}/day</h1>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleInviteClick(data.user)}


                                    className='bg-[#817299] w-64 ml-10 mt-3 md:w-[1025px] md:ml-[133px] mb-11 h-8 rounded-md text-[#ffffff]'
                                >
                                    Invite
                                </button>
                            </div>
                        ))) : (
                        <div>
                            <h1 className='md:pl-[500px] text-3xl h-28 pt-5'>Sorry No Users Found</h1>
                        </div>
                    )

                    }




                </div>
            </div>

        </>
    )
}

export default Boardinginvitation
