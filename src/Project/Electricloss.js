import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { AiFillSetting } from "react-icons/ai";
import Divider from '@mui/material/Divider';
import { Form } from "react-router-dom";
const Electricloss =()=>{
    return(
        <div>
            
            {/* <div className="cord-B">
            <Card  style={{width:"430px",height:"402px"}}>
      <CardContent>
        <p style={{color:"#828282"}}>Inverter Consumption Of Site B</p>
        <div className="chart-set">
            <AiFillSetting width="24px"/>
        </div>
        <Divider style={{width:"500PX",marginTop:"10PX"}}/>
      </CardContent>
    </Card>
            </div> */}

<div>
    <select name="select"  multiple multiselect-search="true">
        <option>meena</option>
        <option>buvana</option>
        <option>deepa</option>
        <option></option>
        <option></option>
    </select>
</div>

        </div>
    )
}
export default Electricloss;