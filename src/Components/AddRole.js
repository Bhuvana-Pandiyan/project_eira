import React from "react";
import './Eira.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AddRoleTab from "./AddRoleTab";

const AddRole = () => {
  const [allticket, setAllticket] = React.useState(false)

  const [checked, setChecked] = React.useState(true)
  const [roleIdShow, setRoleIdShow] = React.useState(true)
  const [roleNameShow, setRoleNameShow] = React.useState(true)
  const [roleDescriptionShow, setRoleDescriptionShow] = React.useState(true)
  const [roleStatusShow, setRoleStatusShow] = React.useState(true)
  const [createdDateShow, setCreatedDateShow] = React.useState(true)
  const [actionShow, setactionShow] = React.useState(true)
  const handleAllTicket = () => {
    setAllticket(true)
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '90%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }; const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));


  const toggleroleId = () => { setRoleIdShow(!roleIdShow) }
  const toggleroleName = () => { setRoleNameShow(!roleNameShow) }
  const toggleroleDescription = () => { setRoleDescriptionShow(!roleDescriptionShow) }
  const toggleroleStatus = () => { setRoleStatusShow(!roleStatusShow) }
  const togglecreatedDate = () => { setCreatedDateShow(!createdDateShow) }
  const toggleaction = () => { setactionShow(!actionShow) }

  return (
    <div className="mee">
      <div className="c">

        <div className="arrow-icon">
          <ArrowBackIcon />
        </div>
        <div className="ticket-over">
          <Typography>  Roles List <br />
            A role provided access to predefined menus and features so that depending
            on assigned role an administrator can have access to what they need.
          </Typography>
        </div>

      </div>

      <div className="input">

        <div className="folder">
          <div className="search-site">
            Search Roles
          </div>

          <div className="search-iconadd"  >
            <SearchIcon />
          </div>
        </div>

        <div className="but">
          <div className="new-botton">
            <div className="new-text">
              {/* {<Link to ='/AddRole'> <Typography style={{color: "white", width: "260px"}}> ROLE MAPPING </Typography> </Link>} */}
              <Typography > ROLE MAPPING </Typography>
            </div>

          </div>
        </div>

        <div className="setting-icon">
          <div className='setting-dropdown'>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>

                <div className="box-typo">
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={roleIdShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleroleId} />
                        <p style={{ marginLeft: "20px" }}>roleId</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={roleNameShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleroleName} />
                        <p style={{ marginLeft: "20px" }}>roleName</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={roleDescriptionShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleroleDescription} />
                        <p style={{ marginLeft: "20px" }}>roleDescription</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={roleStatusShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleroleStatus} />
                        <p style={{ marginLeft: "20px" }}>roleStatus</p>
                      </Stack>
                    </FormGroup>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={createdDateShow} inputProps={{ 'aria-label': 'ant design' }} onClick={togglecreatedDate} />
                        <p style={{ marginLeft: "20px" }}>createdDate</p>
                      </Stack>
                    </FormGroup>
                  </Typography>

                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: "13px", margintop: "-5px" }}>
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch checked={actionShow} inputProps={{ 'aria-label': 'ant design' }} onClick={toggleaction} />
                        <p style={{ marginLeft: "20px" }}>action</p>
                      </Stack>
                    </FormGroup>
                  </Typography>

                </div>
              </Box>
            </Modal>
          </div>
        </div>

        <div className="filter-icon" style={{ marginTop: "5px" }}>
          <FilterAltOutlinedIcon />
        </div>

        <div className="filter-down">
          < FileDownloadOutlinedIcon />
        </div>
      </div>

      <div className="table-components">
        <AddRoleTab
          roleIdShow={roleIdShow}
          roleNameShow={roleNameShow}
          roleDescriptionShow={roleDescriptionShow}
          roleStatusShow={roleStatusShow}
          createdDateShow={createdDateShow}
          actionShow={actionShow}

        />
      </div>
    </div>

  );
}
export default AddRole;





