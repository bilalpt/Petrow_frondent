import { faAdd, faEllipsisVertical, faPaperPlane, faSmileBeam, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Avatar, Button, Card, List, ListItem, ListItemPrefix, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'

import React, { useEffect, useRef, useState } from "react";
import { w3cwebsocket as W3CWebSocket, client } from "websocket";
import { Previos_Chat, UserListChat, WebSocket } from '../../Constants/Constants';
import axios from 'axios';
import { useSelector } from 'react-redux';
import blankImage from '../../Assets/blankprofile.png'
import { useLocation } from 'react-router-dom';


function Chats() {
    const location = useLocation()

    const taker=location.state.user
    console.log(taker,"tekerrrrrrrrrrrrrrr");
    const userInfo = useSelector((state) => state.user)
    const { BoarduserRedux } = useSelector((state) => state.user);

    const [clientstate, setClientState] = useState('');
    const [senderdetails, setSenderDetails] = useState(userInfo);
    const [messageText, setMessageText] = useState('')
    const [messages, setMessages] = useState([]);
    const [ChatList, setChatList] = useState([])
    const [recipientDetails, setrecipientDetails] = useState(taker)
    const [manageEmoji, setmanageEmoji] = useState(false)
    const setUpChat = async () => {
        await axios.get(`${Previos_Chat}${senderdetails.id}/${recipientDetails.id}/`).then(
            (response) => {
                if (response.status == 200) {
                    setMessages(response.data);
                }
            }
        );

        const client = new W3CWebSocket(
            `${WebSocket}${senderdetails.id}/?${recipientDetails.id}`
        );
        setClientState(client);
        client.onopen = () => {
            console.log("WebSocket Client Connected");
        };

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);

            if (dataFromServer) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        message: dataFromServer.message,
                        sender_email: dataFromServer.senderUsername,
                    },
                ]);
            }
        };

        client.onclose = () => {
            console.log("Websocket disconnected");
        };

    }
    const sendMessage = () => {
        if (messageText === '') {
            return;
        } else {
            clientstate.send(
                JSON.stringify({
                    message: messageText,
                    senderUsername: senderdetails.email,
                    recieverUsername: recipientDetails.email,
                })
            );
            setMessageText('');
        };
    }

    // const StartChat = (event) => {

    //     const chatFound = ChatList.find((obj) => obj.email === event);
    //     if (chatFound) {
    //         setrecipientDetails(chatFound)
    //     }
    //     console.log(chatFound, '================================>>>');
    // }

    useEffect(() => {
        axios.get(UserListChat).then((response) => {
            setChatList(response.data)
        }).catch((error) => {
            console.log('error', error);
        })

        if (senderdetails.id != null && recipientDetails.id != null) {
            setUpChat();
        }

    }, [senderdetails, recipientDetails]);
    const openEmoji = () => {

        console.log('Windows key + ; pressed');
        setmanageEmoji(!manageEmoji)

    }


    return (
        <div>hlo
            {/* <div className='flex'>
                <Card className=' border-[1px]  ml-5 mt-2  '>

                    <Card className="w-full ">
                        <List className="min-h-20 max-h-full overflow-y-auto hidescroll">
                            {(ChatList.length === 0 ? <h1 className="text-center text-lg font-prompt-normal" style={{ paddingTop: '15px' }} >User not found</h1> :
                                (ChatList.map((ListChat, index) => (
                                    (userInfo.email != ListChat.email ?
                                        <div >
                                            <ListItem key={index} className='grid grid-cols-5'>
                                                <ListItemPrefix className='col-span-1'>
                                                    {ListChat.profile_image ? (
                                                        <Avatar variant="circular" alt="candice" src={ListChat.profile_image} />
                                                    ) : (
                                                        <Avatar variant="circular" alt="candice" src={blankImage} />
                                                    )}
                                                </ListItemPrefix>
                                                <div className='col-span-2'>
                                                    <Typography variant="h6" color="blue-gray">
                                                        {ListChat.username}
                                                    </Typography>

                                                </div>
                                                <div onClick={(e) => StartChat(ListChat.email)} className='text-center w-10 h-9  ml-5   font-prompt bg-[#dadada] rounded-md text-white  '>
                                                    <FontAwesomeIcon icon={faPaperPlane} className=' text-[#051339]   w-6 h-6 mt-1    rounded-full hover:text-[#4c4b4b] rotate-45  ' />

                                                </div>
                                                <div>
                                                    <Menu>
                                                        <MenuHandler>
                                                            <FontAwesomeIcon icon={faEllipsisVertical} color='#051339' className=' w-5 h-5   rounded-full hover:text-[#000000]    hover:bg-gray-600 hover:bg-opacity-20 hover:cursor-pointer ' />
                                                        </MenuHandler>
                                                        <MenuList className="max-h-72">
                                                            <MenuItem>Block</MenuItem>
                                                            <MenuItem>Archive</MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </div>

                                            </ListItem>
                                        </div> : null)
                                ))))}
                        </List>
                    </Card>

                </Card>

                {(recipientDetails.length != 0 ? <Card className='ml-24 w-[60%] h-[35rem]   mt-2 border-[1px]'>
                    <Card className=' w-full  rounded-b-none  h-20 bg-[#051339] '>
                        <div className='flex'>
                            <div>
                                {(recipientDetails.profile_image ? <img src={recipientDetails.profile_image} alt="profile photo" className='ml-4 rounded-md shadow-2xl  w-14 h-14  mt-4 ' /> :
                                    <UserCircleIcon className="ml-10 rounded-full w-14 h-14  mt-4 text-[#FAFAFA] " />)}
                            </div>
                            <h1 className='font-prompt-normal ml-3 mt-7 text-[#FAFAFA] text-lg uppercase '>{recipientDetails.username}</h1>
                            <FontAwesomeIcon icon={faVideoCamera} color='#FAFAFA' className=' absolute right-24 w-6 h-6 mt-7 rounded-full hover:text-[#c5c3c3]    e  ' />

                            <Menu>
                                <MenuHandler>
                                    <FontAwesomeIcon icon={faEllipsisVertical} color='#FAFAFA' className=' absolute right-10 w-6 h-6 mt-7 rounded-full hover:text-[#000000]    hover:bg-white hover:bg-opacity-100 hover:cursor-pointer ' />
                                </MenuHandler>
                                <MenuList className="max-h-72">
                                    <MenuItem>Block</MenuItem>
                                    <MenuItem>Archive</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </Card>
                    <div className='overflow-y-auto max-h-[75%] z-50 hidescroll '>

                        <div className='mt-2 flex flex-col mb-5'>
                            {messages.map((message) => (
                                <div key={message.id} className={message.sender_email === userInfo.email ? 'mt-2 ml-auto' : 'mt-2 mr-auto'}>
                                    <div className={`font-prompt-normal text-lg ${message.sender_email === userInfo.email ? 'text-white bg-[#324674df] float-right max-w-96 mr-4 ' : 'text-black bg-[#d4d2d2] float-left max-w-96 ml-4 '} rounded-md shadow-black w-fit`} style={{ overflow: 'hidden', wordWrap: 'break-word', whiteSpace: 'pre-wrap', paddingLeft: '8px', paddingRight: '8px', paddingBottom: '2px', paddingTop: '2px' }}>
                                        {message.message}
                                    </div>
                                    <h1 className={`${message.sender_email === userInfo.email ? 'text-right mr-4' : 'text-left ml-4'} text-xs`}>11.30PM</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='absolute bottom-0 w-full bg-[#e3e2e2]'>
                        {(manageEmoji ? '' : '')}
                        <FontAwesomeIcon icon={faAdd} color='#000000' className='  w-6 h-6 mt-4 ml-2 mr-2 rounded-full hover:text-[#000000]    hover:bg-white hover:bg-opacity-100 hover:cursor-pointer ' />
                        <FontAwesomeIcon onClick={openEmoji} icon={faSmileBeam} className=' text-[#e8dd43] border-[1px]  w-6 h-6 mt-4 ml-2 mr-2 rounded-full hover:text-[#000000]    hover:bg-white hover:bg-opacity-100 hover:cursor-pointer ' />
                        <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} className='w-[80%] h-12  rounded-md  border-[1px] border-black font-prompt' placeholder='Type a message' style={{ paddingLeft: '20px' }} />
                        <Button onClick={sendMessage} className='w-16 h-12 ml-4 bg-[#051339] -mt-1'>
                            <FontAwesomeIcon icon={faPaperPlane} className=' text-[#FAFAFA]   w-6 h-6    rounded-full hover:text-[#aeaaaa] rotate-45  ' />

                        </Button>
                    </div>

                </Card> : '')}
            </div> */}
        </div>
    )
}

export default Chats