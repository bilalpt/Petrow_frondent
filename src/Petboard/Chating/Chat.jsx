
import { faAdd, faEllipsisVertical, faPaperPlane, faSmileBeam, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Button, Card, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { BoardNavbar } from '../../Navbar/BoardNavbar'
import { useEffect, useRef, useState } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from "axios";
import { useSelector } from 'react-redux'



import { useLocation } from 'react-router-dom';



function Chat() {


    const messageRef = useRef();

    const lastMessageRef = useRef();



    const [users, setUsers] = useState([]);
    const [tkaerusers, settakerUsers] = useState([]);

    const { BoarduserRedux } = useSelector((state) => state.user);

    const [userState, userSetstate] = useState({
        id: BoarduserRedux.id,
        username: BoarduserRedux.username,
        phone: BoarduserRedux.phone,
        profileimage: null
    })



    const [takeruser, takeruserstate] = useState([
        {
            id: '',
            username: '',
            phone: '',
            profileimage: '',
        }
    ]);





    const { state } = useLocation();
    const passinguser = state
    const currentuser = passinguser.data.user






    useEffect(() => {

        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Petboardownerlist")
            console.log(response.data, 'fasil farhan');
            setUsers(response.data);

            const takerresponse = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Pettakerlist")
            // settakerUsers(takerresponse.data)

            const filteredTakerUsers = takerresponse.data.filter(user => user.id === passinguser.data.user);
            takeruserstate(filteredTakerUsers)


        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }


    const [clientstate, setClientState] = useState("");

    const [messages, setMessages] = useState([]);


    const [takersplice, takersplicesetstate] = useState(
        {
            id: '',
            username: '',
            phone: '',
            profileimage: '',
        }
    )

    useEffect(() => {
        if (takeruser.length > 0) {
            const firstUser = takeruser[0];
            takersplicesetstate(firstUser)
            const takeruserid = firstUser.id
            const client = new W3CWebSocket(`ws://127.0.0.1:8000/ws/chat/${userState.id}/?${takeruserid}`);
            setClientState(client);

        } else {
            console.log('No users in the array');
        }

    }, [takeruser]);


    const scrollToBottom = () => {
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };


    
  const onButtonClicked = () => {
    clientstate.send(
      JSON.stringify({
        message: messageRef.current.value,
        senderUsername: senderdetails.email,
        receiverUsername: recipientdetails.email,
      })
    );
    messageRef.current.value = "";
    scrollToLastMessage();
  };




  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToLastMessage = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


    return (
        <>
            <div>
                <BoardNavbar />
            </div>

            {/* <button onClick={client}>check</button> */}


            <div className='bg-[#D9D9D9]   rounded-xl   md:mt-10 ml-96 h-[550px] w-[700px]'>
                <div className='grid grid-cols-2'>
                    <div className='pl-64 mt-4'>
                        <img src={takersplice.profileimage}
                            className='rounded-full h-14 w-14 bg-white ' alt="" />

                    </div>
                    <div className='mt-8 '>
                        <h1 className='text-2xl '>{takersplice.username}</h1>
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



        </>
    )
}


export default Chat




