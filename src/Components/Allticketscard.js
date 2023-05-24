import React from "react";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CalendarViewMonthSharpIcon from '@mui/icons-material/CalendarViewMonthSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import './Style.css'

const Allticketscard =() => {
return(
    <div className='card-head'>
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 1250,
                height: 70,
                position: 'relative',
                left: "500px",
                margin: "2%"

            },
        }}
        style={{ marginLeft: '40px', }}
    >
        <Paper elevation={3}  >
            <div className='equipment'>
                <div className='equ-name'>
                    <Typography style={{ marginLeft: "40px", marginTop: "+21px", fontSize: "19px" }}>Equipment Details</Typography>
                </div>
                <div>
                    <TextField
                        placeholder='Search ...'
                        id="search"
                        sx={{ m: 1, width: '25ch', marginTop: '+19px', marginRight: "60px" }}
                        variant="standard"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                        }}
                    />
                    <CalendarViewMonthSharpIcon />
                    <SettingsIcon />
                    <SwapVertIcon />
                    <FilterAltOutlinedIcon style={{ marginRight: "25px", marginTop: "+23px" }} />
                    <FileDownloadOutlinedIcon style={{ marginRight: "25px" }} />
                    
                </div>
            </div>
        </Paper>
    </Box>
    </div>

);
    
}


export default Allticketscard;