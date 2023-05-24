import React from 'react'
import { Box, Breadcrumbs, Link, Button} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Muibread = () => {
  return (
  
    <Breadcrumbs aria-label="breadcrumbs" 
    separator= {<NavigateNextIcon />}
    // maxItems={2}
    >
    <Link href="#" underline='hover'> <HomeOutlinedIcon /> </Link>
    <Link href="#" underline='hover'> <RemoveRedEyeRoundedIcon /> </Link>
    <Link href="#"> <BarChartOutlinedIcon /> </Link>
    <Link href="#"> <InsertLinkRoundedIcon /> </Link>
    <Link href="#"> <ViewListRoundedIcon /> </Link>
    <Link href="#"> <HelpOutlineRoundedIcon /> </Link>
    <Button> Click Me </Button>
    </Breadcrumbs>
   
  )
}

export default Muibread;