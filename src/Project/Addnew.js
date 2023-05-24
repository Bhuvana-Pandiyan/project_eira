import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { AiFillSetting } from "react-icons/ai";
import Divider from '@mui/material/Divider'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Test from "./Test";
import Linechart from "./Linechart";



// import { makeStyles } from "@material-ui/core/styles";
// import {
//   FormControl,
//   InputLabel,
// MenuItem
// } from "@material-ui/core"

const Addnew = () => {

  const [Select, setSelect] = useState();
  const [Selected, setSelected] = useState();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setSelectedOptions(value);
  // };
  return (
    <div>
      <div>
        <div>
          <AiOutlineArrowLeft size="1.5rem" />
        </div>
        <div>
          <p className="Add-widget">Add Widget</p>
        </div>
      </div>
      <div className="top-botton">
        <div  >
          <Button variant="outlined" style={{ backgroundColor: 'white', color: "black", borderColor: "black", height: "30px", width: "135px" }}>
            Cancel
          </Button>
        </div>
        <div className="save-bot">
          <Button variant="outlined" style={{ backgroundColor: '#2F3048', color: "White", borderColor: "black", height: "30px", width: "117px" }}>
            Save
          </Button>
        </div>
      </div>
      <div className="monitoring-box">

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 1200,
              height: 128,
            },
          }}
        >

          <Paper  >
            <div className="monitoring-Point">
              <div>
                <div className="monitor-text">
                  <p>Monitoring Points</p>
                </div>
                <div>
                  <p className="select-site">Select Site</p>
                </div>
                <div>
                  <div className='select-monitor'>
                    <div>

                      <select value={Selected} onChange={e => setSelected(e.target.value)} style={{ width: "404px", height: "40px", marginTop: "-20px", backgroundColor: "white", borderradius: "8px", color: "#505050", border: "1px solid #B5B5B5" }}>
                        <option className="options-box" > <p>Site A</p></option>
                        <option className="options-box" >Site B</option>
                        <option className="options-box" >Site C</option>
                        <option className="options-box" >Site D</option>
                        <option className="options-box" >Site E</option>

                      </select>
                    </div>

                    <div className="select-moni">
                      <p>Select Equipment/Parameters </p>
                    </div>
                    <div className=" options-select">
                      <Test />  {/*-------Drop Down----*/}

                    </div>
                  </div>
                </div>
                


              </div>
            </div>
          </Paper>



        </Box>
      </div>
    </div>



  )
}
export default Addnew;