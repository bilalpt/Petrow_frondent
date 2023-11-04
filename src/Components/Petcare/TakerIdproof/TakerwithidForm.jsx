import React from 'react'
import Dogwith from "../../../assets/Dogwith.png"
import Plusbutton from "../../../assets/Plusbutton.png"
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


function TakerwithidForm() {
    const [setadhar, setstateadhar] = useState(null);
    const [previeadhar, setpreviewadhar] = useState(null);

    const [setotherid, setstateotherid] = useState(null);
    const [prviewotherid, setpreviewotherid] = useState(null);


    const adharfun = (e) => {
        const file = e.target.files[0]
        setstateadhar(file)

        const imageadharurl = file ? URL.createObjectURL(file) : null;
        setpreviewadhar(imageadharurl)
    }

    const otheridimg = (e) => {
        const file = e.target.files[0]
        setstateotherid(file)

        const otheridimagev = file ? URL.createObjectURL(file) : null;
        setpreviewotherid(otheridimagev)

    }



    const validation = () => {
        if (!setadhar) {
            toast.error('please add adhar image')
            return false;
        }
        else if (!setotherid) {
            toast.error('please add other id images')
            return false;
        }

        return true
    }

    const submitfun = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        if (validation())
            try {
                formData.append('adharimg', setadhar)
                formData.append('otheridimg', setotherid)
                const Response = await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/TakeridwithformView", formData)
                setstateadhar(null)
                setpreviewadhar(null)
                setstateotherid(null)
                setpreviewotherid(null)
                toast.success(Response.data.msg)
                console.log('bilal thats got');




                if (Response.status === 201) {
                    console.log("Image uploaded successfully!");
                } else {
                    console.error("Error uploading image:", Response.statusText);
                }
                document.querySelector('button[type="back"]').disabled = true;
                document.querySelector('a[href="/pettaker"]').remove();
            } catch (error) {
                console.error(error);
                console.log(error);
            }

    }





    return (
        <>
            <div className='bg-[#817299] h-screen grid grid-cols-1 md:grid-cols-2 pt-10'>
                <div className='bg-[#817299] grid grid-cols-2 md:ml-28'>
                    <img className=' h-[60vh]' src={Dogwith} alt="" />
                </div>
                <form action="" onSubmit={submitfun} className='grid items-center bg-[#817299]'>
                    <div className='bg-[#ecd6d6] ml-16 mb-32   md:  items-center w-2/3 p-6 rounded-lg shadow-2xl mt-10 h-2/3'>
                        <h1 className='text-3xl  items-center  md:pl-11 '>Add Your Id Proof image</h1>
                        <br />

                        <div className=''>
                            <img src={previeadhar} alt="" className='h-40 w-40' />


                            <label htmlFor="adharcard" className='mt-11 '>Add Adharcard image</label>
                            <br />
                            <input className='mt-6'
                                type="file"
                                accept='image*/'
                                onChange={adharfun}

                            />

                            <div>

                                <img src={prviewotherid} alt="" className='h-40 w-40' />


                                <label htmlFor="adharcard" className='mt-11 '>Add other id image</label>
                                <br />
                                <input className='mt-6'
                                    type="file"
                                    accept='image*/'
                                    onChange={otheridimg}

                                />

                            </div>


                            <br />

                        </div>


                        <div className='bg-[#d3b6b6] rounded-md md:ml-44 mb-36 mt-6  w-20'>
                            <button><img src={Plusbutton} className='h-[10vh] w-20' alt="" /></button>
                        </div>
                    </div>




                </form>

            </div>
        </>

    )
}

export default TakerwithidForm
