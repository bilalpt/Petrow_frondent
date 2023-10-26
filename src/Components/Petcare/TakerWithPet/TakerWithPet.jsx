import React from 'react'
import Dogwith from "../../../assets/Dogwith.png"
import { ToastContainer, toast } from "react-toastify";
import Petwithselfie from "../../../assets/Petwithselfie.png"
import Plusbutton from "../../../assets/Plusbutton.png"
// import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from 'react';
import axios from 'axios';





function TakerWithPet() {

    const [selectedImages, setselectedImages] = useState([]);
    const [previewImages, setpreviewImages] = useState([]);


    const handleImageChanges = (e) => {
        const files = Array.from(e.target.files)

        selectedImages(files)

        const imagePrevieURls = files.map((file) => URL.createObjectURL(file));
        setpreviewImages(imagePrevieURls)


    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        const formData = new FormData();
        for (let i = 0; i < selectedImages.length; i++) {
            formData.append('message', selectedImages[i]);
        }



        try {
            const Response = await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL+"petcare/Takerwithpet",selectedImages)

            if (Response.ok) {
                console.log("Images uploaded successfully!");
            } else {
                console.error("Error uploading images:", Response.statusText);
            }

        }
        catch (error) {
            console.error("Error uploading images:", error);
        }
    }



    return (
        <>
            <div className='bg-[#817299]'>
                <div className='bg-[#817299] h-screen'>
                    {/* <BoardNavbar /> */}
                    <div className='bg-[#817299] h-10'>
                    </div>
                    <div className=' bg-[#817299]'>
                        <ToastContainer />

                        <div className='bg-[#817299] flex '>
                            <img
                                src={Petwithselfie}
                                className="  h-[60vh]"
                                alt="cropanimal"
                            />

                            <div className='bg-[#ffffff] flex flex-col items-center w-1/2 p-6 rounded-lg shadow-2xl mt-10  ml-20'>
                                <div >
                                    <h1 className='text-3xl mb-4 '>Add Your Pet With Images</h1>
                                </div>
                                <form action="" onSubmit={handleSubmit}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChanges}
                                    />
                                    <div className='bg-[#efd7d7] rounded-md mt-32'>
                                        <button><img src={Plusbutton} className='h-[10vh]' alt="" /></button>


                                    </div>
                                </form>
                                <div>
                                    {previewImages.map((previewURL, index) => (
                                        <img key={index} src={previewURL} alt={`Preview ${index}`} />
                                    ))}
                                </div>



                            </div>

                        </div>




                    </div>

                </div>


            </div>

        </>
    )
}

export default TakerWithPet
