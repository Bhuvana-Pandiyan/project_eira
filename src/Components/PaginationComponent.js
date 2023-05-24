import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import './Style.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const PaginationComponent = () => {

    return (

        <div className='pagination'>

            <ArrowBackIcon />

            PREVIOUS


            <Pagination count={10} variant="outlined" shape="rounded" />



            NEXT  <ArrowForwardIcon />

        </div>




    )
}
export default PaginationComponent;