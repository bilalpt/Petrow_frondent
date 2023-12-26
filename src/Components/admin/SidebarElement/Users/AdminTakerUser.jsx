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






const TABLE_HEAD = ["# Id", "Name", "Mobile", "Date", "Email", "Block&Unblock"];

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

function AdminTakerUser() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [users, setUsers] = useState([]);



  
  useEffect(() => {

    fetchData();
  }, [])

  async function fetchData() {
    try {
      const response = await axios.get(import.meta.env.VITE_PETBOARDUSERS_URL + "petboarding/Pettakerlist")
      setUsers(response.data);

      console.log(response.data,'bilal baxter');

      console.log(response);

    
      console.log(response.data, 'admin board users data ');
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }




  return (
    <>
      <div className='bg-[#D9D9D9] h-screen'>

        <div className='grid grid-cols-2 w-full pt-10'>
          <div>
            <h1 className='text-2xl pl-8'>Pet Takers list</h1>
          </div>

          {/* modal */}
          <div className='pl-96'>
            <Button onClick={handleOpen} variant="gradient">
              Open Dialog
            </Button>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Pet Takers Requests</DialogHeader>
              <thead>
    <tr>
        <th className="ml-12">ID</th>        
        <th className="ml-10">Images</th>    
        <th className="ml-10">Username</th>  
        <th>Email</th>
        <th>Join_date</th>
        <th>View user details</th>



        {/* ... other headers if needed */}
    </tr>
</thead>

              {users.map((users, index) => (
                <tr key={users.id}>




                  <td className="ml-4">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >#
                                {users.id}
                              </Typography>

                            </div>
                          </td>
                          <td >

                            <div className="flex items-center gap-3">
                              <Avatar src={users.profileimage} alt={users.profileimage} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                </Typography>

                              </div>
                            </div>
                          </td>

                          <td >
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {users.username}
                              </Typography>

                            </div>
                          </td>
                          <td >
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {users.email}
                              </Typography>

                            </div>
                          </td>
                          <td >
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {users.date_and_time}
                              </Typography>

                            </div>
                          </td>
  

                  
                    <td >
                        <button onClick={() => handleOpen(users)}>View Details</button>
                    </td>
                </tr>
            ))}
              


              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                {/* <Button variant="gradient" color="green" onClick={handleOpen}>
                  <span>Confirm</span>
                </Button> */}
              </DialogFooter>
            </Dialog>

          </div>
          {/* end modal */}

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
                  {TABLE_ROWS.map(
                    ({ img, name, email, job, org, online, date }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={img}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={img} alt={img} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {job}
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
                                {name}
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
                                {online}
                              </Typography>

                            </div>

                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {date}
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
                              {org}
                            </Typography>
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

export default AdminTakerUser
