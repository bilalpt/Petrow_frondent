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

    const navigate=useNavigate()




    // const id = useParams();
    // const userId = id.userId

    // console.log(userId,'current user id ');

    let token = localStorage.getItem('token');
    let decoded = jwtDecode(token);
    let userid = decoded.id


    const { BordFormRedux } = useSelector((state) => state.user);
    const [formstate, usestate] = useState({ pettype: '', nuberofpetboarded: '', petbreed: '', petsize: '', additionalinfo: '', startdate: '', enddate: '' })

    useEffect(() => {
        const data = BordFormRedux[BordFormRedux.length - 1];
        usestate({ pettype: data.pettype, nuberofpetboarded: data.nuberofpetboarded, petbreed: data.petbreed, petsize: data.petsize, additionalinfo: data.additionalinfo, startdate: data.startdate, enddate: data.enddate })
    }, [])


    const[setdiscription,setstatediscription]=useState([])
    const[settaker,statetakerwit]=useState([])

    const [secondarray, setsecondaryarray] = useState([]);

    const handleChatClick = (data) => {
        console.log("data:", data); // Log the entire data object
        navigate('/PetBoards/Chat', { state: { data } }); // Pass the entire data object to the next page
    }



    useEffect(() => {
        if (setdiscription && settaker) {
            const mergedUsersData = setdiscription.map((data) => {
                const matchingUser = settaker.find((value) => data.user === value.user);
                console.log(matchingUser,'matchingUser');
                if (matchingUser) {
                    return Object.assign({}, data, matchingUser);
                } else {
                    return data;
                }
            });
    
            setsecondaryarray(mergedUsersData);
        }
    }, [setdiscription, settaker]);


    useEffect(() => {
        retrevedata()

    }, [])

    const retrevedata = async (e) => {

        try {
            const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + 'petboarding/showtakerdetails/' + userid)
            const takervar = [ ...response.data.Takerwithpetdata]
            console.log(takervar, 'all array data');

            statetakerwit(takervar)
            const discriptionarray=[...response.data.ServiceDescriptiondata]
            setstatediscription(discriptionarray)

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
                    {secondarray.map((data) => (
                        
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
                    onClick={() => handleChatClick(data)}
                    className='bg-[#817299] w-64 ml-10 mt-3 md:w-[1025px] md:ml-[133px] mb-11 h-8 rounded-md text-[#ffffff]'
                >
                    Chat With Me
                </button>
                    </div>
                ))}




                </div>
            </div>

        </>
    )
}

export default Boardinginvitation
