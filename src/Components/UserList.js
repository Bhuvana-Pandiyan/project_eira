import React from 'react'
import UserListTab from './UserListTab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { MdOutlineSettings } from "react-icons/md";
// import { Link } from 'react-router-dom';

const UserList = () => {
    return (

        <div className="mee">
            <div className="c">

                <div className="arrow-icon">
                    <ArrowBackIcon />
                </div>
                <div className="ticket-over">
                    User List <br />
                    On this page you can create, view and manage users.
                </div>

            </div>

            <div className="input">

                <div className="folder">
                    <div className="search-site">
                        Search Roles
                    </div>

                    <div className="search-iconuser" style={{marginTop: "-10px"}}>
                        <SearchIcon />
                    </div>
                </div>

                <div className="but">
                    <div className="new-botton">
                        <div className="new-text">
                            {/* {<Link to ='/viewTicket'> </Link>}    */}
                            <Typography>ADD USER </Typography>
                        </div>

                    </div>
                </div>
                <div className="filter-icon" style={{ marginTop: "-3.5%" }}>
                    <FilterAltOutlinedIcon />
                </div>

                <div className="filter-down">
                    < FileDownloadOutlinedIcon />
                </div>
            </div>

            <div className='table-components'>
                <UserListTab />
            </div>

        </div>

    )
}

export default UserList