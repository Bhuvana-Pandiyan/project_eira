import React from "react";
import Side from "./Side";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BsChevronDown } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
const Chart = () => {
    return (

        <div className="chart-color">
            {/* <div>
                {<Side/>}
            </div> */}
            <div>
                <div className=" dash-board">
                    <p>Analytics Dashboard</p>
                </div>
                <div className=" daily-cust">
                    <h3>Daily Customer Energy Consumption Analysis <BsChevronDown /></h3>
                </div>
                <div>
                    <p>Last updated on 29 January 2023 12:45 P.M.</p>
                </div>
            </div>
            <div className="botton-column">
                <div className="create-new"> 
                    <Button variant="outlined" style={{ backgroundColor: '#3B3E5D', color: "White", borderColor: "black", height: "30px", width: "243px" }}>
                        Create New Analytics
                    </Button>
                    </div>
                    <div className="refresh-botton">
                    <Button variant="outlined" style={{ backgroundColor: '#6D6965', color: "White", borderColor: "black", height: "30px", width: "139px"}}>
                    Refresh
                    </Button>
                    </div>
                    <div className="edit-botton">
                    <Button variant="outlined" style={{ backgroundColor: '#6D6965', color: "White", borderColor: "black", height: "30px", width: "110px" }}>
                    Edit
                    </Button>
            </div>
            </div>
            <div className="box-add">
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 80,
        },
      }}
    >
        <Paper  >
          
          <Link to='/Addnew'>  <p className="Add-new">Add New Widget </p></Link>
        </Paper>
        </Box>
            </div>


        </div>

    )

}
export default Chart;