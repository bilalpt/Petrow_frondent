import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoardNavbar } from '../../Navbar/BoardNavbar';
import { useEffect, useRef, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PreviousMessage } from '../../Constents/Constents';


function Chat() {
  const messageRef = useRef();
  const lastMessageRef = useRef();

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [takeruser, setTakerUser] = useState({});
  const { BoarduserRedux } = useSelector((state) => state.user);
  let petTaker = null
  let petBoding = null

  const [userState, setUserState] = useState({
    id: BoarduserRedux.id,
    username: BoarduserRedux.username,
    phone: BoarduserRedux.phone,
    profileimage: null
  });

  const { state } = useLocation();
  const passinguser = state;
  const currentuser = passinguser.data.user;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Petboardownerlist");
      setUsers(response.data);
      petTaker = response.data

      const takerresponse = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Pettakerlist");
      const filteredTakerUsers = takerresponse.data.filter(user => user.id === currentuser);
      if (filteredTakerUsers.length > 0) {
        setTakerUser(filteredTakerUsers[0]);
        petBoding = filteredTakerUsers[0];
        initializeWebSocket(filteredTakerUsers[0]);

      }

    } catch (error) {
      console.error("Error fetching users:", error)
    }
    await axios.get(`${PreviousMessage}${userState.id}/${petTaker.id}/`).then(
      (response) => {
        if (response.status == 200) {
          setMessages(response.data);
        }
      }
    );
  }

  const [clientState, setClientState] = useState(null);

  const initializeWebSocket = (takerUser) => {
    petTaker = takerUser
    const client = new W3CWebSocket(`ws://127.0.0.1:8000/ws/chat/${userState.id}/?${takerUser.id}`);
    setClientState(client);

    client.onopen = () => {
      console.log("WebSocket Connection Opened");
    };

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("Received Message:", dataFromServer);
      setMessages(prevMessages => [...prevMessages, dataFromServer]);
    };

    client.onclose = () => {
      console.log("WebSocket Connection Closed");
    };
  };

  const onButtonClicked = () => {
    if (clientState && messageRef.current.value.trim() !== "") {
      const newMessage = {
        message: messageRef.current.value,
        senderUsername: userState.username,
        receiverUsername: takeruser.username,
      };
      setMessages(prevMessages => [...prevMessages, newMessage]); // Display the sent message instantly
      clientState.send(JSON.stringify(newMessage));
      messageRef.current.value = "";
      scrollToBottom();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <BoardNavbar />
      </div>
      <div className='bg-[#EEEEEE]'>
     

        <div className='bg-[#D9D9D9] rounded-xl mt-10 mx-4 md:ml-96 md:w-[700px] md:h-[550px] shadow-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='pl-4 md:pl-64 md:mt-4'>
              <img src={takeruser.profileimage} className='rounded-full h-14 w-14 bg-white' alt="" />
            </div>
            <div className='mt-4 md:mt-8'>
              <h1 className='text-2xl'>{takeruser.username}</h1>
            </div>
          </div>
          <div className='h-8 w-full bg-white mt-4 rounded-sm'></div>

          {/* Display messages */}
          <div className='mt-2 flex flex-col mb-5'>
          {messages.map((message) => (
            <div key={message.id} className={message.sender_email === userState.email ? 'mt-2 ml-auto' : 'mt-2 mr-auto'}>
              <div className={`font-prompt-normal text-lg ${message.sender_email === userState.email ? 'text-white bg-[#324674df] float-right max-w-96 mr-4 ' : 'text-black bg-[#d4d2d2] float-left max-w-96 ml-4 '} rounded-md shadow-black w-fit`} style={{ overflow: 'hidden', wordWrap: 'break-word', whiteSpace: 'pre-wrap', paddingLeft: '8px', paddingRight: '8px', paddingBottom: '2px', paddingTop: '2px' }}>
                {message.message}
              </div>
              <h1 className={`${message.sender_email === userState.email ? 'text-right mr-4' : 'text-left ml-4'} text-xs`}>11.30PM</h1>
            </div>
          ))}
        </div>

          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='h-12 md:w-[500px] bg-white mt-4 md:mt-[330px] rounded-md mx-4 md:mx-0 md:ml-10'>
              <input
                ref={messageRef}
                className='h-12 w-full text-center rounded-md'
                type="text"
                placeholder='Enter your message...'
              />
            </div>
            <div className='h-12 md:w-[100px] bg-[#817299] rounded-md mt-4 md:mt-[330px] mx-4 md:mx-0 md:ml-52'>
              <button
                onClick={onButtonClicked}
                className='text-[#ffffff] pt-3 pl-7 '
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Chat;
