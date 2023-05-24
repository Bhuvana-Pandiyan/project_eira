import React from 'react'
import { Paper, Box, Typography, Button } from '@mui/material'
import Eira from '../images/eiralogo.jpg'
import './Loginpage.css'
import { MdWavingHand } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';

const Loginpage = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const [userName, setEmail] = React.useState('')
    const [Password, setPassword] = React.useState('')
    const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                            Welcome to EIRA Platform! <MdWavingHand />
                        </Typography>

                        <Typography style={{ marginLeft: "10%", color: "#6c756f" }}>
                            Please sign-in to your account
                        </Typography>
                    </div>
                    <div style={{ width: "330px", marginLeft: "60px", marginTop: "100px" }}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>
                    </div>

                    <div style={{ marginLeft: "62%", marginTop: "15%" }}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>

                    </div>

                </Paper>
            </Box>

        </div>
    )
}

export default Loginpage