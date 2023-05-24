// import * as React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

// const  Test=() =>{
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem key={name} value={name}>
//               <Checkbox checked={personName.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
// export default Test;
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { style } from "@mui/system";
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Linechart from "./Linechart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


const ITEM_HEIGHT = 98;

const ITEM_PADDING_TOP = 3;
const MenuProps = {
  PaperProps: {
    style: {
      Backgroundcolor: "red",
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: "500px",
      backgroundColor: '#F4F4F4',
      height: "450px",
      lineheight: "2"
    },

  }
};

const names = [
  "INV-1",
  "INV-2",
  "INV-3",
  "INV-4",
  "INV-5",
  "INV-6",
  "INV-7",
  "INV-8",
  "INV-9",
  "INV-10",
  "INV-11",
  "INV-12",
  "INV-13",
  "INV-14",
];
const Values = [
  "Input Current ",
  "Today Energy",
  "Total Energy",
  "Isolation Resistance",
  "Output Frequency",
  "Phase Current 1",
  "Reactive Power",
  "Inverter Temperature",
  "Plant Start Time",
  "Plant End Time",

];
const para = [
  " Phase Voltage 1",
  " Phase Voltage 2",
  " Phase Voltage 3"
]
const Test = () => {
  const [personName, setPersonName] = React.useState([]);
  const [PersonValues, setPersonValues] = React.useState([]);
  const [PersonPara, setPersonPara] = React.useState([]);
  const handleChange = (value) => {
    console.log(value);
    setPersonName(value)
  };

  return (
    <div>
      <FormControl style={{ width: "504px", height: "40px", lineheight: "1.6", borderRadius: "black" }}>
        <InputLabel id="demo-multiple-checkbox-label"></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          multiple
          value={personName}
          values={PersonValues}
          valuess={PersonPara}
          onChange={(event)=>{handleChange(event.target.value)}}
          style={{ height: "40px", width: "404px", marginTop: "15px", borderRadius: "black" }}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={{ backgroundColor: "#F4F4F4" }}>
              <Checkbox checked={personName.indexOf(name) > -1} style={{ lineHeight: "2" }} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          {Values.map((values) => (

            <MenuItem key={values} Values={values} className="menu-check" style={{ marginLeft: "100px", backgroundColor: "#F4F4F4" }}>
              <Checkbox checked={PersonValues.indexOf(values) > -1} />
              <ListItemText primary={values} />
            </MenuItem>
          ))}
          {para.map((para) => (

            <MenuItem key={para} Valuess={para} className="check-box" style={{ marginLeft: "300px", backgroundColor: "#F4F4F4" }} >
              <Checkbox checked={PersonPara.indexOf(para) > -1} />
              <ListItemText primary={para} />
            </MenuItem>
          ))}

          <Divider style={{ backgroundcolor: "red" }} />
        </Select>
        <div className="">
        </div>
      </FormControl>
      <div className="papper-card">

      
      <div className="graph-box">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "1044px",
              height: "498px",
              backgroundColor: "#EEF1F7",
              marginRight:"300px",
            },
          }}
        >
          <Paper>
            <div className="cord-monitor">
              <Card style={{ width: "1004px", height: "375px" }}>
                <CardContent>
                  <div>
                    <Linechart personName={personName}/>
                  </div>


                </CardContent>
              </Card>
            </div>
          </Paper>
        </Box>
      </div>
      </div>

    </div>
  );
}
export default Test;

