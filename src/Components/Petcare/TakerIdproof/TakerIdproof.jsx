import React from 'react'
import Dogwith from "../../../assets/Dogwith.png"
import Plusbutton from "../../../assets/Plusbutton.png"
import { useState } from 'react';
import axios from 'axios';



function TakerIdproof() {
    const [selectedImages, setselectedImages] = useState([]);
    const [previewImages, setpreviewImages] = useState([]);


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
            for (let i = 0; i < selectedImages.length; i++) {
                formData.append('images', selectedImages[i]);
            }
    
            try {
                console.log('baxter')
                const Response = await axios.post(import.meta.env.VITE_PETBOARDUSERS_URL + "petcare/TakerDetais", formData);
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



// minhaj code



// import React from "react";
// import {
//   Button,
//   Dialog,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
//   select,
//   Spinner
// } from "@material-tailwind/react";
// import { multipleImageSchema } from "../../yup/validation";
// import { useFormik } from "formik";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { postImages } from "../../api/artistApi";


// export default function DialogWithForm() {
//   const queryClient = useQueryClient();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {setOpen((cur) => !cur),setImg(null)};
//   const { artistInfo } = useSelector((state) => state.artist);
//   const id = artistInfo.email;
//   const [img, setImg] = useState();
//   const [spin,setSpin]=useState(false)

//   const initialValues = {
//     images: [],
//   };

//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleSubmit,
//     handleChange,
//     setFieldValue,
//   } = useFormik({
//     initialValues: initialValues,
//     validationSchema: multipleImageSchema,
//     onSubmit: async (values) => {
//         setSpin(true)
//       const formData = new FormData();
//       for (let i = 0; i < values.images.length; i++) {
//         formData.append("images", values.images[i]);
//       }
//       const response = await postImages(formData, id);
    
//       if (response) {
//         setOpen(!open);
//         setSpin(false)
//         queryClient.invalidateQueries(["artist"]);
//       }
//     },
//   });

//   const handleImageChange = (e) => {
//     const file = e.target.files;
//     const selectedFilesArray = Array.from(file);
//     const imagesArray = selectedFilesArray.map((data) => {
//       return URL.createObjectURL(data);
//     });
//     setImg(imagesArray);
//     setFieldValue("images", file);
//   };

//   return (
//     <>
//       <Button className="bg-[#429348]" onClick={handleOpen}>Add posts</Button>
//       <Dialog
//         size="xl"
//         open={open}
//         handler={handleOpen}
//         className="bg-transparent shadow-none"
//       >
//         <Card className="mx-auto w-full max-w-[24rem]">
//           <form action="" onSubmit={handleSubmit}>
//             <CardBody className="flex flex-col gap-4">
//               <Typography variant="h4" color="blue-gray">
//                 Add Post
//               </Typography>
//               <div className="grid grid-cols-3 gap-4">
//                 {img
//                   ? img.map((n, index) => (
//                       <img key={index} className="w-20 h-20" src={n} alt="" />
//                     ))
//                   : null}
//               </div>
//               <Input
//                 size="lg"
//                 type="file"
//                 variant="standard"
//                 name="images"
//                 label="images"
//                 multiple
//                 onChange={handleImageChange}
//               />
//               {touched.images && errors.images && (
//                 <div className="text-red-500 text-sm ">{errors.images}</div>
//               )}
//               <Typography className="text-xs">
//                 # Upload All of your Images About the works
//               </Typography>
//             </CardBody>
//             <CardFooter className="pt-0">


//               <Button variant="gradient" type="submit" fullWidth>
//                 {spin?(<Spinner className="flex justify-center"/>):("Upload")}
                
//               </Button>
//             </CardFooter>
//           </form>
//         </Card>
//       </Dialog>
//     </>
//   );
// }


// minhaj code end
