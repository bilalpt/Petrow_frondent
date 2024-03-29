import React from "react";
import logo from "../assets/logo.jpg"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import defaultprofile from "../assets/defaultprofile.jpg"



// import CareHome from "../Components/Petcare/CareHome";
 
export function NavbarDefault() {


  const [openNav, setOpenNav] = React.useState(false);

  const navigate=useNavigate()

 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
     {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="">
          Home
        </a>
    </Typography> */}
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center" onClick={()=>navigate('')}>
          Home 
        </a>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a onClick={()=>navigate('/PetBoards/LoginNavigation')} href="#" className="flex items-center">
          Login
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center" >
          Pet Taker

        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="#" className="flex items-center">
        <img class="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0" src={defaultprofile} alt="Woman's Face" />

          Profile
        </a> */}
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 bg-[#f7f4f4] shadow-xl">
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
        {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Buy Now</span>
        </Button> */}
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
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
        </div>
      </MobileNav>
    </Navbar>
  );
}