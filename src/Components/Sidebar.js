import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Eira from './Eira';
import './Eira.css';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { TfiMenuAlt } from 'react-icons/tfi';

import { BiHome, BiBarChartAlt2 } from "react-icons/bi";
import { HiOutlineChartPie } from "react-icons/hi"
import { AiFillEye, AiOutlineLink } from "react-icons/ai"
import { Outlet, useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineForm } from "react-icons/ai";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { AiOutlineUser } from "react-icons/ai";





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
        width: `calc(100% - ${drawerWidth}px)`,
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

export default function MiniDrawer() {

    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navigateCall = (params) => {
        if (!params) {
            navigate("dashboard")
        }
        else {
            navigate(`${params}`)
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        <div className="header-search" style={{ width: "100%" }}>
                            < div className="searchbar">

                                <div className="search" >
                                    Search site equipment etc here
                                </div>

                                <div className="search-icon">
                                    <SearchIcon />
                                </div>
                            </div>

                            <div className="user">
                                <div className="out-form">
                                    <AiOutlineForm color="black" size="1.4rem" />
                                </div>

                                <div className='notify' >
                                    <NotificationsNoneIcon color="black" size="1.8rem" />
                                </div>

                                <div className="user-name"  >
                                    <Typography >Srinivasan</Typography>
                                </div>

                                <div className="person">
                                    <AiOutlineUser color="black" size="1.4rem" />
                                </div>
                            </div>

                        </div>
                    </Typography>


                    {/* <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography> */}
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
                    <ListItem disablePadding onClick={() => navigateCall('home')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <BiHome color="black" size="1.7rem" />
                            </ListItemIcon>
                            <ListItemText primary="Tickets" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => navigateCall('role')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HiOutlineChartPie color="black" size="1.7rem" />
                            </ListItemIcon>
                            <ListItemText primary="Role List" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => navigateCall('user')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <BiBarChartAlt2 color="black" size="1.7rem" />
                            </ListItemIcon>
                            <ListItemText primary="User List" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => navigateCall('')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AiFillEye color="black" size="1.7rem" />
                            </ListItemIcon>
                            <ListItemText primary="Visibility" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => navigateCall('')}>
                        <ListItemButton>
                            <ListItemIcon>
                                < AiOutlineLink color="black" size="1.7rem" />
                            </ListItemIcon>
                            <ListItemText primary="Link" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding onClick={() => navigateCall('')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <TfiMenuAlt color="black" size="1.7rem" />
                            </ListItemIcon>
                            <ListItemText primary="Map" />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* <Eira /> */}
                <Outlet />
            </Box>
        </Box>
    );
}