import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoardNavbar } from '../../Navbar/BoardNavbar';
import { useEffect, useRef, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PreviousMessage } from '../../Constents/Constents';
import jwtDecode from 'jwt-decode'
import { timeAgo } from "../../helper/TimeManage";
import { CareNavbar } from '../../Navbar/CareNavbar';

function Chat() {
  const token = localStorage.getItem('token')
  const user = jwtDecode(token)
  const location = useLocation()
  const taker = location.state.user
  console.log(user, '==========================>>>>>>>>>>>>>>>>>>>>>');

  const userInfo = user
  const [clientstate, setClientState] = useState('');
  const [senderdetails, setSenderDetails] = useState(userInfo);
  const [messageText, setMessageText] = useState('')
  const [messages, setMessages] = useState([]);
  const [recipientDetails, setrecipientDetails] = useState(taker)



  const setUpChat = async () => {
    await axios.get(`${PreviousMessage}${senderdetails.id}/${recipientDetails.id}/`).then(
      (response) => {
        if (response.status == 200) {
          setMessages(response.data);
        }
      }
    );

    const client = new W3CWebSocket(
      `ws://127.0.0.1:8000/ws/chat/${senderdetails.id}/?${recipientDetails.id}`
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
    if (messageText.trim() === '') {
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



  useEffect(() => {

    if (senderdetails.id != null && recipientDetails.id != null) {
      setUpChat();
    }

  }, [senderdetails, recipientDetails]);

  return (
    <>
      <div>
        {(userInfo.roles === 'boarduser' ? <BoardNavbar /> : <CareNavbar />)}

      </div>
      <div className='bg-[#D9D9D9] rounded-xl mt-10 mx-4 md:ml-96 md:w-[700px] md:h-[550px] shadow-2xl overflow-y-auto'>

        <div className='grid grid-cols-1 md:grid-cols-2'>

          <div className='pl-4 md:pl-64 md:mt-4'>
            <img src={recipientDetails.profileimage} className='rounded-full h-14 w-14 bg-white' alt="" />
          </div>

          <div className='mt-4 md:mt-8'>
            <h1 className='text-2xl'>{recipientDetails.username}</h1>
          </div>

        </div>

        <div className='h-8 w-full bg-white mt-4 rounded-sm'></div>

        <div className=''>

          <div className='mt-2 flex flex-col mb-5'>
            {messages.map((message) => (
              <div key={message.id} className={message.sender_email === userInfo.email ? 'mt-2 ml-auto' : 'mt-2 mr-auto'}>
                <div className={`font-prompt-normal text-lg ${message.sender_email === userInfo.email ? 'text-white bg-[#324674df] float-right max-w-96 mr-4 ' : 'text-black bg-[#d4d2d2] float-left max-w-96 ml-4 '} rounded-md shadow-black w-fit`} style={{ overflow: 'hidden', wordWrap: 'break-word', whiteSpace: 'pre-wrap', paddingLeft: '8px', paddingRight: '8px', paddingBottom: '2px', paddingTop: '2px' }}>
                  {message.message}

                </div>
                <br />
                <h1 className={`${message.sender_email === userInfo.email ? 'text-right mr-4 float-right ' : 'text-left ml-4 float-left'} text-xs`}>{timeAgo(message.timestamp) == "NaN years ago"
                  ? "just now"
                  : timeAgo(message.timestamp)}</h1>
              </div>
            ))}
          </div>
        </div>



        <div className='grid grid-cols-1 md:grid-cols-2'>

          <div className='h-12 md:w-[500px] bg-white mt-4 md:mt-[330px] rounded-md mx-4 md:mx-0 md:ml-10'>
            <input
              value={messageText} onChange={(e) => setMessageText(e.target.value)}
              className='h-12 w-full text-center rounded-md'
              type="text"
              placeholder='Enter your message...'
            />
          </div>

          <div className='h-12 md:w-[100px] bg-[#817299] rounded-md mt-4 md:mt-[330px] mx-4 md:mx-0 md:ml-52'>
            <button
              onClick={sendMessage}
              className='text-[#ffffff] pt-3 pl-7'
            >
              Send
            </button>
          </div>

        </div>

      </div>


    </>
  )
}

export default Chat;
