import React from "react";
import logo from "../assets/logo.jpg"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import CareHome from "../Components/Petcare/CareHome";
import CareLogin from "../Components/Petcare/CareLogin";
import defaultprofile from "../assets/defaultprofile.jpg"
import { LogoutTakeruser } from "../Redux/BoardTakerRedux";
import { useDispatch } from "react-redux";
import { RemoveTakeridinitial } from "../Redux/BoardTakerRedux";

import PettakerProfile from "../Components/Petcare/PettakerProfile/PettakerProfile";

import { useSelector } from "react-redux";

export function CareNavbar() {

  const dispatch=useDispatch()

  const currentUserData = useSelector(state => state.takerforms.Takeruserinitial);
  const loggedInUserId = currentUserData.id;

  const { TakeridInitial } = useSelector((state) => state.takerforms);

  const Takeruserlastimage=TakeridInitial[TakeridInitial.length -1]

  let takeridproofimageid

  if(Takeruserlastimage){
    takeridproofimageid=Takeruserlastimage.user
  }
  else{
    console.log('sorry no value found in Takeruserlastimage');
  }


  const [openNav, setOpenNav] = React.useState(false);

  const navigate = useNavigate()
  const Logout = (() => {

    localStorage.removeItem('token')
    dispatch(LogoutTakeruser())
    
    navigate('/PetBoards/CareLogin');
    console.log('token remove')

  })


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={`/PetTakers/PetTakerHome`} className="flex items-center">
          Home
        </Link>
      </Typography>

      {TakeridInitial.user || takeridproofimageid === loggedInUserId ? null : (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to={`/PetTakers/PetTakerterms`} className="flex items-center">
            Pet Taker
          </Link>
        </Typography>
      )}



      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center" onClick={() => Logout()}
        >
          Logout

        </a>
      </Typography>


      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
          <Link to={`/PetTakers/PettakerChat`} className="flex items-center">
            Messages
          </Link>
      </Typography> */}


      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="#" to={"/PetTakers/BoardRequest"} className="flex items-center">
          Boarding Requests

        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="#" to={"/PetTakers/PettakerProfile"} className="flex items-center">
          <img class="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0" src={defaultprofile} alt="Woman's Face" />
          Profile
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 bg-[#f7f4f4] shadow-2xl">
      <div className="container mx-5 flex items-right-0 justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >

          <img
            src={logo}
            className="w-10 h-7  border-purple-400"
            alt="Petrow_logo"
          />
          {/* <h6 className="px-12 ">Pet row</h6> */}


        </Typography>




        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}

        </div>
      </MobileNav>
    </Navbar>
  );
}