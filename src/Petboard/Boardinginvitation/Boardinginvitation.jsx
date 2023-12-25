// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import dogwith_boy_image from "../../assets/dogwith_boy_image.jpg"
import tarapet from "../../assets/tarapet.jpg"




function Boardinginvitation() {
    const { BordFormRedux } = useSelector((state) => state.user);
    const [formstate, usestate] = useState({ pettype: '', nuberofpetboarded: '', petbreed: '', petsize: '', additionalinfo: '', startdate: '', enddate: '' })

    useEffect(() => {
        const data = BordFormRedux[BordFormRedux.length - 1];
        usestate({ pettype: data.pettype, nuberofpetboarded: data.nuberofpetboarded, petbreed: data.petbreed, petsize: data.petsize, additionalinfo: data.additionalinfo, startdate: data.startdate, enddate: data.enddate })
    }, [])


    return (
        <>
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

                <div className='border-[0.5px] border-[#130303] mt-3 md:border-none'>

                

                <div className='grid grid-cols-2  md:grid-cols-4 md:h-36 mt-5'>
                    <div>
                        <img
                            src={tarapet}
                            className="pl-5 h-32 md:pl-[134px]  "
                            alt="cropanimal"
                        />

                    </div>

                    <div>
                        <h1 className=' ml-4 md:ml-10 mt-7 text-xl '>off leash petcare</h1>
                    </div>
                    <div></div>
                    <div>
                    <h1 className=' text-[#d03838]  md:mt-28 text-xl '>From INR 350/day</h1>
                    </div>
                </div>
                <button className=' bg-[#817299] w-64 ml-10 mt-3 md:w-[1025px] md:ml-[133px] mb-11 h-8 rounded-md text-[#ffffff]' >invite</button>
                </div>



            </div>

        </>
    )
}

export default Boardinginvitation
