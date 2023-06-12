import React, { useEffect } from 'react'
import axios from 'axios'
import { Paper, Box, Typography, Button, TextField, Card, CardContent } from '@mui/material'
import Eira from '../images/eiralogo.jpg'
import './Loginpage.css'
import { MdWavingHand } from 'react-icons/md';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Switch, Route, Redirect } from 'react-router-dom';

// import { logoutUser } from '../Compoenets/User';
// import { logoutUser } from './User'
import Siteoverview from './Siteoverview'
import Menuu from './Menuu'
// import { HashRouter } from 'react-router-dom';
const Loginpage = () => {

    // const Loginpage = (props) => {
    //     const { dispatch } = props;
    //     const PrivateRoute = ({ dispatch, component, ...rest }) => {
    //         const logoutTimestamp = Siteoverview(localStorage.getItem('loginTime')).add(30, 'm').toDate();
    //         if (!localStorage.getItem('userEmail') && !(logoutTimestamp > new window.Date())) {

    //             return (<Redirect to="/Loginpage" />)
    //         } else {
    //             return ( // eslint-disable-line
    //                 <Route {...rest} render={props => (React.createElement(component, props))} />
    //             );
    //         }
    //     };

    //     <HashRouter>
    //         <Switch>
    //             <PrivateRoute path="/app" dispatch={dispatch} component={Siteoverview} />
    //         </Switch>
    //     </HashRouter>

    //  function logoutUser() {
    //         return (dispatch) => {
    //             dispatch(requestLogout());
    //             localStorage.removeItem('authenticated');
    //             localStorage.removeItem('userEmail');
    //             localStorage.removeItem('loginTime');
    //             dispatch(receiveLogout());
    //         };
    //     }


    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const [userName, setEmail] = React.useState('')
    const [Password, setPassword] = React.useState('')
    const [tableValues, setTables] = React.useState([])
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("dashboard")
        }

    }, [localStorage])
    const handleLogin = () => {
        if (userName === "udayaprakashjayaraman@gmail.com" && Password === "UPJ@123") {
            navigate("/forgot")
        } else {
            alert("Invalid username or password")
        }
    }

    const handleNavigate = () => {

        let value = {
            "emailId": `${userName}`,
            "password": `${Password}`
        }
        console.log(value);

        axios.post(`http://3.109.2.47:8088/EiraAPIV2/user/login`, value).then((res) => {
            console.log(res, "response");
            if (res.data === true) {
                localStorage.setItem("token", "validateToken")
                window.location.reload();
            }
            else {
                alert("incorrect password or user name ")
            }
        })
    }

    const handleForgot = () => {
        console.log("navigate")
        navigate('/forgot')
    }

    const getCall = () => {
        axios.post(`http://3.109.2.47:8088/EiraAPIV2/user/login`).then((res) => {
            console.log(res, "res");
            if (res.status === 200) {
                console.log(res.data, 'resgetList');
                setTables(res)
            }
        })
    }

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        m: 1,
                        width: 470,
                        height: 590,
                        marginLeft: "32%",
                        marginTop: "2%",
                        backgroundColor: "white"
                    },
                }}
            >
                <Paper elevation={25} style={{ borderRadius: "10px" }}>
                    <div className='main'>

                        <div className='eira-logo'>
                            <img src={Eira} width={100} height={130} style={{ marginTop: '-20%', marginLeft: "30%" }} />
                            <Typography style={{ marginTop: "-20%", marginLeft: "53%", fontSize: "30px", fontWeight: "550" }}>Eira</Typography>
                        </div>

                        <Typography style={{ marginLeft: "10%", fontSize: "26px", fontWeight: "550", marginTop: "10%", color: "#5b5e5c" }}>
                            Welcome to EIRA Platform! <MdWavingHand /> </Typography>
                        <Typography style={{ marginLeft: "10%", color: "#6c756f" }}>
                            Please sign-in to your account
                        </Typography>

                        <div className='mail-pass'>

                            <TextField id="outlined-basic"
                                label="Username"
                                onChange={(m) => setEmail(m.target.value)}
                                variant="outlined" style={{ borderRadius: "9PX", hight: "10px", width: "45ch", marginLeft: "10%", marginTop: "5%" }} />

                            <FormControl sx={{ m: 3, width: '45ch', borderRadius: "90px", marginLeft: "10%", }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(m) => setPassword(m.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />

                            </FormControl>
                        </div>

                        <Typography style={{ marginLeft: "10%", }}>
                            Remember Me
                        </Typography>

                        <Link
                            component="button"
                            variant="body2" style={{ marginLeft: "45%", fontSize: "16px", marginTop: "-10%" }}
                        >
                            <Typography onClick={handleForgot} > Forgotten your Password? </Typography>
                        </Link>

                        <div className='but'>
                            <Stack spacing={2} direction="row">

                                <Button variant="contained" style={{ width: "45ch", backgroundColor: "#383bfc", marginLeft: "11%", marginTop: "4%" }} onClick={handleNavigate} >Log In</Button>
                            </Stack>

                        </div>

                        <Typography style={{ marginLeft: "15%", marginTop: "7%" }}>
                            Dont have an account?   <span style={{ color: "#383bfc", marginLeft: "6%" }}>Request Access</span>
                        </Typography>

                    </div>
                </Paper>
            </Box>

        </div>
    )
}


export default Loginpage