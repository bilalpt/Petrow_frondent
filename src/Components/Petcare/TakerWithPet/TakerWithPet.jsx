import React from 'react'
import Dogwith from "../../../assets/Dogwith.png"
import { ToastContainer, toast } from "react-toastify";
import Petwithselfie from "../../../assets/Petwithselfie.png"
import Plusbutton from "../../../assets/Plusbutton.png"
// import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from 'react';
import axios from 'axios';




function TakerWithPet() {

    const [selectedImage, setselectedImage] = useState(null);
    const [previewImage, setpreviewImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        setselectedImage(file);

        const imagePreviewURL = file ? URL.createObjectURL(file) : null;
        setpreviewImage(imagePreviewURL);
    };

    const validation=()=>{
        if(!selectedImage){
            toast.error('please add image');
            return false;

        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (validation()) 
            try {
                formData.append('image', selectedImage);
                const Response = await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/Takerwithpet", formData)
                setselectedImage(null);
                setpreviewImage(null);
    
                if (Response.status === 201) {
                    console.log("Image uploaded successfully!");
                } else {
                    console.error("Error uploading image:", Response.statusText);
                }
    
            } catch (error) {
                console.error(error);
            }
        



    }

    return (
        <>
            <div className='bg-[#817299]'>
                <div className='bg-[#817299] h-screen'>
                    <div className='bg-[#817299] h-10'></div>
                    <div className=' bg-[#817299]'>
                        <ToastContainer />
                        <div className='bg-[#817299] flex '>
                            <img
                                src={Petwithselfie}
                                className="  h-[60vh]"
                                alt="cropanimal"
                            />
                            <div className='bg-[#ffffff] flex flex-col items-center w-1/2 p-6 rounded-lg shadow-2xl mt-10  ml-20'>
                                <div>
                                    <h1 className='text-3xl mb-4 '>Add Your Pet With an Image</h1>
                                </div>
                                {previewImage && <img src={previewImage} alt="Preview" />}

                                <form action="" onSubmit={handleSubmit}>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        placeholder='Petwith Image'
                                    />

                                    <div className='bg-[#efd7d7] rounded-md mt-32 w-20 ml-28'>
                                        <button><img src={Plusbutton} className='h-[10vh] w-20' alt="" /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakerWithPet