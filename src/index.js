import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './Chart.css';
import './Addnew.css';

// import './Components/View.css' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react'
// import './Style.css'

// /*-------- Icons ---------*/

// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// /*------- compoenets -------- */

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import { Button, TextField } from '@mui/material'
// import InputAdornment from '@mui/material/InputAdornment';


// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';



// const Home = () => {

//     return (
//         <div className='main'>
//             <div className='text-align'>
//                 <ArrowBackIcon /> <span className='text'>Site Overview - <span className='text-color'> India Foods</span></span>
//             </div>

//             <div className='accordian'>
//                 <Accordion>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                     >
//                         <Typography>Site Summary</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <div className='accordian-text'>
//                             <div>
//                                 <Typography style={{ fontSize: '13px' }}>Site Code </Typography>
//                                 <Typography>INT-3243</Typography>
//                             </div>
//                             <div>
//                                 <Typography style={{ fontSize: '13px' }}>Capacity </Typography>
//                                 <Typography>200 kwh</Typography>
//                             </div>
//                             <div>
//                                 <Typography style={{ fontSize: '13px' }}>Invertor Capacity </Typography>
//                                 <Typography>160 Kwh</Typography>
//                             </div>
//                             <div>
//                                 <Typography style={{ fontSize: '13px' }}>Energy </Typography>
//                                 <Typography>606.6 kwh</Typography>
//                             </div>
//                             <div>
//                                 <Typography style={{ fontSize: '13px' }}>Performance Metrics </Typography>
//                                 <Typography>3.02 Specific Yiled</Typography>
//                             </div>

//                         </div>
//                     </AccordionDetails>
//                 </Accordion>
//             </div>
//             <div className='section2'>
//                 <div className='button'>
//                     <Button variant="contained" style={{ width: "16rem", height: '50px' }}>Equipment Details</Button>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexWrap: 'wrap',
//                             '& > :not(style)': {
//                                 m: 1,
//                                 width: 254,
//                                 height: 50,
//                             },
//                         }}

//                     >
//                         <Paper elevation={3} style={{ display: "flex", justifyContent: 'space-evenly', alignItems: 'center', marginLeft: "2px", fontSize: "18px" }}>
//                             <span>All Tickets</span> <button className='new'> 5 new</button>

//                         </Paper>

//                     </Box>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexWrap: 'wrap',
//                             '& > :not(style)': {
//                                 m: 1,
//                                 width: 254,
//                                 height: 50,
//                             },
//                         }}
//                     >

//                         <Paper elevation={3} style={{ display: "flex", justifyContent: 'space-evenly', alignItems: 'center', marginLeft: "2px", fontSize: "18px" }}>
//                             <span>All Alerts</span> <button className='new'> 3 new</button>
//                         </Paper>

//                     </Box>
//                 </div>
//                 <div className='card-head'>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexWrap: 'wrap',
//                             '& > :not(style)': {
//                                 // m: 1,
//                                 width: 890,
//                                 height: 47,
//                             },
//                         }}
//                         style={{ marginLeft: '-2px' }}
//                     >
//                         <Paper elevation={3}   >
//                             <div className='equipment'>
//                                 <div className='equ-name'>
//                                     <Typography>Equipment Details</Typography>
//                                 </div>
//                                 <div>
//                                     <TextField
//                                         label="Search ..."
//                                         id="search"
//                                         sx={{ m: 0.1, width: '20ch', marginTop: '-10px', marginRight: "60px" }}
//                                         variant="standard"
//                                         InputProps={{
//                                             endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
//                                         }}
//                                     />
//                                     <FilterAltOutlinedIcon style={{ marginRight: "25px", marginTop: "+13px" }} />
//                                     <FileDownloadOutlinedIcon style={{ marginRight: "25px" }} />
//                                 </div>
//                             </div>


//                             <div>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         flexWrap: 'wrap',
//                                         '& > :not(style)': {
//                                             m: 1,
//                                             width: 950,
//                                             height: 40,
//                                             marginTop: '+10px',
//                                         },
//                                     }}
//                                 >
//                                     <Paper elevation={3} >
//                                         <div className='accordian-equpnm'>
//                                             <Accordion>
//                                                 <AccordionSummary
//                                                     expandIcon={<ExpandMoreIcon style={{ marginRight: "680px" }} />}
//                                                     aria-controls="panel1a-content"
//                                                     id="panel1a-header"
//                                                 >
//                                                     <Typography style={{ fontsize: '10px' }}>Equipment Name </Typography>
//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <div className='accordian-equname'>
//                                                         <div>
//                                                             <Typography style={{ fontSize: '14px' }}>SE00200EQ004 </Typography>
//                                                             <Typography style={{ fontSize: '14px' }}>SE00200EQ004 </Typography>
//                                                             <Typography style={{ fontSize: '14px' }}>SE00200EQ004 </Typography>
//                                                             <Typography style={{ fontSize: '14px' }}>SE00200EQ004 </Typography>
//                                                         </div>
//                                                     </div>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>






//                                     </Paper>

//                                 </Box>
//                             </div>
//                         </Paper>

//                     </Box>
//                 </div>
//             </div>

//         </div>

//     )
// }
// export default Home;