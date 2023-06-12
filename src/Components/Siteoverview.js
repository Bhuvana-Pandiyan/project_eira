import React from 'react'
import './Style.css'
import TableComponent from './TableComponent';
import PaginationComponent from './PaginationComponent';
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./useAuth";
// import useAuth from "./useAuth";

/*-------- Icons ---------*/

import { FiEdit } from 'react-icons/fi';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Container from 'react-bootstrap/Container';
import { IoMdArrowDropdown } from 'react-icons/io';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { useNavigate } from 'react-router-dom';

/*------- compoenets -------- */

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import AllTickets from './AllTickets'
import AllAlert from './AllAlert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Siteoverview = () => {

    const navigate = useNavigate()
    const [tickets, setTickets] = React.useState(false)
    const [alerts, setAlerts] = React.useState(false)
    const [equpmentDetails, setEquipmentDetails] = React.useState(true)

    const handleEquipment = () => {
        setEquipmentDetails(true)
        setTickets(false)
        setAlerts(false)
    }

    const hanldeAllTickets = () => {
        
        setTickets(true)
        setAlerts(false)
        setEquipmentDetails(false)
    }

    const hanldeAllAlerts = () => {
        // navigate('alltickets')
        setAlerts(true)
        setTickets(false)
        setEquipmentDetails(false)
    }


    // Try Something...

    // let user = JSON.parse(localStorage.getItem('user-info'))
    // const history = useHistory();
    // function logOut() {
    //     localStorage.clear();
    //     history.push('/register')
    // }

    return (

        <div className='mains'>

            {/* <div className='homeside'>

            </div> */}

            <div>

                {/* <div>
                            <img src={Eira} width={50} height={50} marginRight={"20px"} style={{ marginTop: '-1%', marginRight: "30px" }} />
                        </div> */}

                {/* < div className="searchbarr">
                   
                    <div className="searchh">
                        Search Sites, Equipment's etc here..
                    </div>

                    <div className="search-iconn">
                        <SearchIcon />
                    </div>
                </div>

                <div className='eira'>
                    <Typography style={{ fontSize: "26px" }}>Eira</Typography>
                </div>

                <div className='notifyy' >
                    <NotificationsNoneIcon />
                </div>

                <div className='edit'>
                    < FiEdit />
                </div>

                <div className="darkmode">
                    <DarkModeOutlinedIcon />
                </div>



                <div className="user-namee"  >
                    <Typography> Hi Srinivasan, </Typography>
                </div> */}

                {/* <div className="personn">
                    <PermIdentityIcon />  */}

                {/* <ArrowDropDownIcon /> */}

                {/* <Nav>
                        <NavDropdown title="User name"> */}
                {/* <NavDropdown title="Dropdown"> */}
                {/* <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item> */}

                {/* <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}

                {/* </div> */}

                {/* <div className='arrow'>
                    <ArrowDropDownIcon />
                </div> */}


                {/* <div className="personn" >
                    <Nav>
                        <NavDropdown >
                            <NavDropdown.Item >Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div> */}



            </div>

            <div className='text-align'>
                <nav class="navbar"></nav>
                <ArrowBackIcon style={{ marginTop: "-33px", }} /> <span className='text'> <Typography>Site Overview - <span className='text-color'> India Foods</span> </Typography></span>
            </div>

            <div className='accordian'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{ fontSize: "16px", fontWeight: "550", lineHeight: "19px" }}> Site Summary </Typography>

                    </AccordionSummary>
                    <AccordionDetails>

                        <div className='accordian-text' style={{ justifyContent: "space-between" }}>

                            <div>
                                <Typography style={{ fontSize: '12px', lineHeight: "15px", letterSpacing: "0.05em" }}>Site Code </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> INT-3243</Typography>
                            </div>
                            <div>
                                <Typography style={{ fontSize: '12px', marginRight: "15px", lineHeight: "15px", letterSpacing: "0.05em" }}>Capacity </Typography>
                                <Typography style={{ fontSize: '14px', marginRight: "15px", fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> 200 KWh</Typography>
                            </div>
                            <div>
                                <Typography style={{ fontSize: '12px', marginRight: "18px", lineHeight: "15px", letterSpacing: "0.05em" }}>Invertor Capacity </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> 160 KWh</Typography>
                            </div>
                            <div>
                                <Typography style={{ fontSize: '12px', marginRight: "10px", lineHeight: "15px", letterSpacing: "0.05em" }}>Energy </Typography>
                                <Typography style={{ fontSize: '14px', marginRight: "10px", fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}>606.6 KWh</Typography>
                            </div>
                            <div style={{ marginRight: "8px" }}>
                                <Typography style={{ fontSize: '12px', lineHeight: "15px", letterSpacing: "0.05em" }}>Performance Metrics </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}>3.02 Specific Yiled</Typography>
                            </div>
                        </div>

                        <div className='accordian-t' style={{ justifyContent: "space-between" }}>
                            <div>
                                <Typography style={{ fontSize: '12px', lineHeight: "15px", letterSpacing: "0.05em" }}>Site Code </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> INT-3243</Typography>
                            </div>

                            <div style={{ marginLeft: "65px" }}>
                                <Typography style={{ fontSize: '12px', lineHeight: "15px", letterSpacing: "0.05em" }}>Yesterday : 159.67 MWh</Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> 159.78 MWh</Typography>
                            </div>
                            <div style={{ marginRight: "40px" }}>
                                <Typography style={{ fontSize: '12px', lineHeight: "15px", letterSpacing: "0.05em" }}>75.91 T </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> Tomorrow : 29.9°C</Typography>
                            </div>
                            <div style={{}}>
                                <Typography style={{ fontSize: '12px', marginRight: "105px", lineHeight: "15px", letterSpacing: "0.05em" }}>75.91 T </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px" }}>Today Emission </Typography>
                            </div>
                            <div style={{ marginRight: "8px" }}>
                                <Typography style={{ fontSize: '12px', lineHeight: "15px" }}>Performance Metrics </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}>3.02 Specific Yiled</Typography>
                            </div>
                        </div>

                        {/* <div className='anorow' style={{ justifyContent: "space-between" }}>
                            <div>
                                <Typography style={{ fontSize: '12px',  }}> 113.30kWh </Typography>
                                <Typography style={{ fontSize: '12px' }}> 301 Days ago..  </Typography>
                            </div>
                            <div>
                                <Typography style={{ fontSize: '12px',  }}> 5.67 </Typography>
                                <Typography style={{ fontSize: '12px' }}> Specific Yield  </Typography>
                            </div>
                            <div >
                                <Typography style={{ fontSize: '12px',  }}> 75.91 T </Typography>
                                <Typography style={{ fontSize: "12px", }}>Today Emission</Typography>
                            </div>
                            <div >
                                <Typography style={{ fontSize: '12px',  }}> 30.0°C </Typography>
                                <Typography style={{ fontSize: "12px", }}>Tomorrow : 29.6°C</Typography>
                            </div>
                        </div> */}

                        <div className='text-accordian' style={{ justifyContent: "space-between" }}>
                            <div>
                                <Typography style={{ fontSize: '12px', lineHeight: "15px", letterSpacing: "0.05em" }}>Invertor Capacity </Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> 160 KWh</Typography>
                            </div>
                            <div >
                                <Typography style={{ fontSize: '12px', marginLeft: "20px", lineHeight: "15px", letterSpacing: "0.05em" }}>Energy </Typography>
                                <Typography style={{ fontSize: '14px', marginLeft: "20px", fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}>606.6 KWh</Typography>
                            </div>
                            <div style={{ marginRight: "70px" }}>
                                <Typography style={{ fontSize: '12px', marginLeft: "50px", lineHeight: "15px", letterSpacing: "0.05em" }}>Site Code </Typography>
                                <Typography style={{ fontSize: '14px', marginLeft: "50px", fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> INT-3243</Typography>
                            </div>

                            <div style={{ marginRight: "70px" }}>
                                <Typography style={{ fontSize: '12px', marginLeft: "27px", lineHeight: "15px", letterSpacing: "0.05em" }}>Capacity </Typography>
                                <Typography style={{ fontSize: '14px', marginLeft: "27px", fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> 200 KWh</Typography>
                            </div>
                            <div>
                                <Typography style={{ fontSize: '12px', lineHeight: "15px", letterSpacing: "0.05em" }}>Yesterday : 159.67 MWh</Typography>
                                <Typography style={{ fontSize: '14px', fontWeight: "550", lineHeight: "17px", letterSpacing: "0.05em" }}> 159.78 MWh</Typography>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='section2'>
                <div className='button'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                height: 50,
                                width: "230px",
                                fontFamily: "Inter",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "22px",
                                marginRight: "200px"
                            },
                        }}
                    >
                        <Button variant="contained" style={{
                            width: "230px", height: '50px', fontSize: "18px",
                            fontStyle: "normal", color: "#FFFFFF;", textTransform: 'capitalize',
                            backgroundColor: equpmentDetails ? 'blue' : 'white',
                            color: equpmentDetails ? 'white' : 'black'
                        }} onClick={handleEquipment} > <Typography style={{ fontWeight: "550", fontSize: "18px", lineHeight: "22px" }}>
                                Equipment Details</Typography> </Button>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 230,
                                height: 50,
                                // marginLeft: "200px",
                                fontFamily: "Inter",
                                fontStyle: "normal",
                                fontSize: "18px",
                                lineHeight: "32px"
                            },
                        }}
                    >
                        {/*                                                 
                        <Paper elevation={3} style={{
                            display: "flex", justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: alerts ? 'blueviolet' : 'white',
                            color: alerts ? 'black' : 'blueviolet'
                        }} onClick={hanldeAllAlerts}>
                            <span > All Tickets</span> <button className='new'> 3 New</button>

                        </Paper> 
                    </Box> */}

                        <Paper elevation={3} style={{
                            display: "flex", justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: tickets ? 'blue' : 'white',
                            color: tickets ? 'white' : 'black'
                        }} onClick={hanldeAllTickets}>
                            <span > <Typography style={{ fontSize: "18px", lineHeight: "32px" }}>All Tickets</Typography> </span> <button className='new' style={{ backgroundColor: tickets ? 'white' : 'skyblue' }} > 3 New</button>
                        </Paper>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 230,
                                height: 50,
                                // marginLeft: "335px",
                                fontFamily: "Inter",
                                fontStyle: "normal",
                                fontSize: "18px",
                                // marginLeft: "200px"
                            },
                        }}

                    >

                        <Paper elevation={3} style={{
                            display: "flex", justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: alerts ? 'blue' : 'white',
                            color: alerts ? 'white' : 'black'
                        }} onClick={hanldeAllAlerts}>
                            <span > <Typography style={{ fontSize: "18px", lineHeight: "32px" }}>All Alerts</Typography>
                            </span> <button className='new' style={{ backgroundColor: alerts ? 'white' : 'skyblue' }}> 3 New</button>
                        </Paper>
                    </Box>
                </div>
                <div className='card-head'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 955,
                                height: 50,
                                position: 'relative',
                                right: "200px"
                            },
                        }}
                    // style={{ marginRight: "100px" }}
                    >
                        <Paper elevation={3}  >
                            <div className='equipment'>
                                <div className='equ-name'>
                                    <Typography style={{ marginLeft: "40px", marginTop: "+10px", fontSize: "22px" }}>
                                        {tickets ? "All Tickets" : alerts ? "All Alerts" : equpmentDetails ? "Equipment Details" : 'Equipment Details'}
                                    </Typography>
                                </div>
                                <div>
                                    <TextField
                                        placeholder='Search ...'
                                        id="search"
                                        sx={{ m: 1, width: '25ch', marginTop: '+10px', marginRight: "60px" }}
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"> <SearchIcon /> </InputAdornment>,
                                        }}
                                    />
                                    <FilterAltOutlinedIcon style={{ marginRight: "25px", marginTop: "+15px" }} />
                                    <FileDownloadOutlinedIcon style={{ marginRight: "25px" }} />
                                </div>
                            </div>
                        </Paper>
                    </Box>

                    <div>
                        <div className='table'>
                            {tickets ? <AllTickets /> : alerts ? <AllAlert /> : <TableComponent />}
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Siteoverview;