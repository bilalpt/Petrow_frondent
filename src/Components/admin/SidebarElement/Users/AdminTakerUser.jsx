import React from 'react'
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
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "#12",
    org: "block",
    online: '9447932166',
    date: "23/04/18",
    id: "12",

  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "#45",
    org: "block",
    online: '9447932166',
    date: "19/09/17",
    id: "12",

  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "#62",
    org: "block",
    online: '9447932166',
    date: "24/12/08",
    id: "12",

  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "#34",
    org: "block",
    online: '9447932166',
    date: "04/10/21",
    id: "12",

  },
];

function AdminTakerUser() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);




  return (
    <>
      <div className='bg-[#D9D9D9] h-screen'>

        <div className='grid grid-cols-2 w-full pt-10'>
          <div>
            <h1 className='text-2xl pl-8'>Pet Owners List</h1>
          </div>

          {/* modal */}
          <div className='pl-96'>
            <Button onClick={handleOpen} variant="gradient">
              Open Dialog
            </Button>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Pet Takers Requests</DialogHeader>
              {/* <DialogBody>
                The key to more success is to have a lot of pillows. Put it this way,
                it took me twenty five years to get these plants, twenty five years of
                blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                getting started. I&apos;m up to something. Fan luv.
              </DialogBody> */}
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
