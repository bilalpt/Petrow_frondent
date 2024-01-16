
import { faAdd, faEllipsisVertical, faPaperPlane, faSmileBeam, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Button, Card, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'
import { useEffect, useRef } from 'react'


// import React, { useEffect, useRef, useState } from "react";
// import { w3cwebsocket as W3CWebSocket, client } from "websocket";
// import { Previos_Chat, UserListChat, WebSocket } from '../../Constants/Constants';
// import toast, { Toaster } from 'react-hot-toast'
// import axios from 'axios';
// import { useSelector } from 'react-redux';


function Chat() {





    return (
        <>
                <BoardNavbar />

            <div className='grid '>

            <div className='bg-[#D9D9D9]   rounded-xl   md:mt-10 ml-96 h-[550px] w-[700px]'>
                <div className='grid grid-cols-2'>
                    <div className='pl-64 mt-4'>
                        <img
                            className='rounded-full h-14 w-14 bg-white ' alt="" />

                    </div>
                    <div className='mt-8 '>
                        <h1 className='text-2xl '>User name</h1>
                    </div>
                </div>
                <div className='h-8 w-[700px] bg-white mt-4 rounded-sm'>
                </div>

                <div className='grid grid-cols-1'>
                    <div className='bg-[#ffffff] '>

                    </div>

                </div>
                <div className='grid grid-cols-1'>
                    <div >

                    </div>

                </div>

                <div className='grid grid-cols-2'>

                    <div className='h-12 w-[500px] bg-white mt-[370px] rounded-md  ml-10'><input className='h-12 w-[500px] text-center  rounded-md' type="text" placeholder=' enter here' /></div>
                    <div className='h-12 w-[100px] bg-[#817299]  rounded-md mt-[370px] ml-52  '> <button className='text-[#ffffff] pt-3 pl-7'>send</button></div>
                </div>

            </div>
            </div>



        </>
    )
}

export default Chat




