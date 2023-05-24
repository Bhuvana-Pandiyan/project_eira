import React from "react";

// import './Style.css'

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BiHome } from "react-icons/bi";
// import { BiCircleThreeQuarter } from "react-icons/bi";
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
// import { FiMap } from "react-icons/fi";
import Siteoverview from "./Siteoverview";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { HiOutlineChartPie } from 'react-icons/hi';
import { BiBarChartAlt2, BiHelpCircle } from 'react-icons/bi';
import { TfiMenuAlt } from 'react-icons/tfi';
import { AiOutlineLink, } from "react-icons/ai";
import { AiFillEye } from 'react-icons/ai';

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(10px - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Menuu() {

  const navigate=useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigate=()=>{
    console.log("navigate")
    navigate('/allticketoverview')
  }

  return (

    <div className='side-bar'>

      <Box sx={{ display: 'flex', backgroundColor: "white" }}>
        <CssBaseline />
        <AppBar style={{ background: 'white', width: "65px", right: "1230px", position: "fixed" }} open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Typography variant="h6" noWrap component="div">

            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: "0px",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,

                    mr: open ? 5 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <span>   <BiHome color="black" size="1.7rem" /> </span>
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0, marginLeft: "6px" }} />
              </ListItemButton>
            </ListItem>

          </List>
          <List>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: "0px",
                  top: "-40px",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginTop: "20px",
                    mr: open ? 5 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HiOutlineChartPie color="black" size="1.8rem" />
                </ListItemIcon>
                <ListItemText primary="Circle" sx={{ opacity: open ? 1 : 0, marginTop: "20px", marginLeft: "4px" }} />
              </ListItemButton>
            </ListItem>
          </List>

          <List>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: "0px",
                  top: "-75px",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginTop: "27px",
                    mr: open ? 5 : 'auto',
                    justifyContent: 'center',
                  }}
            >
                  <BiBarChartAlt2 color="black" size="1.8rem" />
                </ListItemIcon>
                <ListItemText primary="User" sx={{ opacity: open ? 1 : 0, marginTop: "27px", marginLeft: "4px" }} />
              </ListItemButton>
            </ListItem>
          </List>

          <List>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 0,
                  top: "-90px",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  < AiFillEye color="black" size="2rem" />
                </ListItemIcon>
                <ListItemText primary="Visibility" sx={{ opacity: open ? 1 : 0, marginLeft: "2px" }} />
              </ListItemButton>
            </ListItem>
          </List>

          <List>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  top: "-100px",

                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    marginTop: "-10px",
                    minWidth: 0,
                    mr: open ? 5 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AiOutlineLink color="black" size="1.7rem" />
                </ListItemIcon>
                <ListItemText primary="Edit" sx={{ opacity: open ? 1 : 0, marginTop: "-10px", marginLeft: "8px" }} />
              </ListItemButton>
            </ListItem>
          </List>

          <div >
            <List>

              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: "3px",
                    top: "-110px",
                    right: "21px",
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                  onClick={handleNavigate}
                    sx={{
                      marginLeft: "50px",
                      minWidth: 0,
                      mr: open ? 5 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <TfiMenuAlt color="black" size="2rem"  />
                  </ListItemIcon>

               

                  <ListItemText />

                  {/* <ListItemText primary="Tickets" sx={{ opacity: open ? 1 : 0}} />   */}

                </ListItemButton>
              </ListItem>
            </List>
          </div>

          <List>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: "3px",
                  top: "-130px",
                  left: "3px",
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <BiHelpCircle color="black" size="2rem" />
                </ListItemIcon>
                <ListItemText primary="Help" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>

        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <div className='table-component'>
            <Siteoverview />
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Menuu;