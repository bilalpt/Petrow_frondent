import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const TABLE_HEAD = ["# Id", "Name", "Mobile", "Date", "Email",'status', "Block&Unblock"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "#123",
    org: "block",
    online: '9447932166',
    date: "23/04/18",
    id: "12",
  },

];

function AdminBoarduser() {

  const [users, setUsers] = useState([]);
  const [selecteduser,setselecteduser]=useState(null)

  useEffect(() => {

    fetchData();
  }, [])

  async function fetchData() {
    try {
      const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Petboardownerlist")
      setUsers(response.data);

    
      console.log(response.data, 'admin board users data ');
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const handleBlock =async (id,is_active) => {
    let data;
    console.log(is_active,id,'userssssssss');

    if (is_active === true){
       data ={is_active:false}
    }else{
      data = {is_active:true}
    }
    const datapass=await axios.patch(import.meta.env.VITE_PETBOARDUSERS_URL+`petboarding/userpassinadminside/${id}`,data)
    fetchData();

};

const handleUnblock = () => {
    // Logic to unblock the organization/user
    // For example, make an API call or update a state variable
};

  return (
    <>
      <div className='bg-[#D9D9D9] h-screen'>

        <div className='grid grid-cols-2 w-full pt-10'>
          <div>
            <h1 className='text-2xl pl-8'>Pet Owners List</h1>
          </div>



        </div>


        <div className='mt-10 mx-10'>
          <Card className="h-full w-full">

            <CardBody className="overflow-scroll px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map(
                    ({id, profileimage, username, email, is_active, phone, date_and_time }, index) => {
                      const isLast = index === users.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={profileimage}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={profileimage} alt={profileimage} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {id}
                                </Typography>

                              </div>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {username}
                              </Typography>

                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {phone}
                              </Typography>

                            </div>

                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {date_and_time}
                            </Typography>
                          </td>

                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {email}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                               {is_active ? (
                              <Typography className="text-[#254870]" >Active</Typography>
                            ) : (
                              <Typography className="text-[#6e2424]">Inactive</Typography>
                            )}
                            </Typography>
                          </td>

                          <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {is_active}
                            </Typography>
                            {is_active ? (
                              <button onClick={()=>handleBlock(id,is_active)} className=" bg-[#837bdc] rounded-md h-8 w-16 text-[#ffffff]">Block</button>
                            ) : (
                              <button onClick={()=>handleBlock(id,is_active)}>unblock</button>
                            )}
                          </td>



                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                Page 1 of 10
              </Typography>
              <div className="flex gap-2">
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>


      </div>
    </>
  )
}

export default AdminBoarduser
