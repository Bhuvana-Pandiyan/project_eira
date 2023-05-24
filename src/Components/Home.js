import { Button } from "bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();


    const handleClick =() => {
        navigate("/session-timed-out");
    }

    return(
        <div>
        
        <Button variant="standard"
        onClick={handleClick}>ClickMe</Button>
        </div>
    )
}

export default Home;