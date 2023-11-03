import React from 'react'
import Dogwith from "../../../assets/Dogwith.png"
import Plusbutton from "../../../assets/Plusbutton.png"
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";




function TakerIdproof() {
    const [selectedImages, setselectedImages] = useState([]);
    const [previewImages, setpreviewImages] = useState([]);

    console.log(selectedImages);
    console.log(previewImages);


    const imageChange = (e) => {
        const files = e.target.files;
        console.log('Selected Files:', files);

        const selectedImagesArray = Array.from(files).map((file) => URL.createObjectURL(file))
        console.log('Selected Images Array:', selectedImagesArray);

        setselectedImages(files);
        setpreviewImages(selectedImagesArray);
    }

    const validation = () => {
        if (selectedImages.length === 0) {
            toast.error('Please add at least one image');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        if (validation()) {


            try {
                for (let i = 0; i < selectedImages.length; i++) {
                    formData.append('proofimage', selectedImages[i]);
                }
                console.log('baxter')
                const Response = await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/TakerDetails", formData);
                setselectedImages([]);
                setpreviewImages([]);

                if (Response.status === 201) {
                    console.log("Images uploaded successfully!");
                } else {
                    console.error("Error uploading images:", Response.statusText);
                }

            } catch (error) {
                console.error(error);
                console.log(error);
            }
        }
    };


    return (
        <>
            <div className='bg-[#817299] h-screen grid grid-cols-1 md:grid-cols-2 pt-10'>
                <div className='bg-[#817299] md:ml-28'>
                    <img className=' h-[60vh]' src={Dogwith} alt="" />
                </div>
                <form action="" onSubmit={handleSubmit} className='grid items-center bg-[#817299]'>
                    <div className='bg-[#ecd6d6] ml-16 mb-32   md:  items-center w-2/3 p-6 rounded-lg shadow-2xl mt-10 h-2/3'>
                        <h1 className='text-3xl  items-center  md:pl-11 '>Add Your Id Proof image</h1>
                        {/* <div className='mb-4 w-full'>
                            <input type="text" name='price' className='w-full md:w-96 lg:w-120  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pet Boarding Price in INR : /Per night' />

                        </div> */}
                        {previewImages && previewImages.map((previewImage, index) => (
                            <img key={index} src={previewImage} alt={`Preview ${index}`} />
                        ))}


                        <input className='md:pl-28 pt-12'
                            type="file"
                            accept="image/*"
                            onChange={imageChange}
                            placeholder='Petwith Image'
                        />
                        <div className='bg-[#d3b6b6] rounded-md md:ml-44 mb-36 mt-6  w-20'>
                            <button><img src={Plusbutton} className='h-[10vh] w-20' alt="" /></button>
                        </div>
                    </div>




                </form>

            </div>
        </>

    )
}

export default TakerIdproof




