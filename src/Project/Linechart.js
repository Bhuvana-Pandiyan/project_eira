
import React,{useEffect,useState} from "react";
import { Chart } from "react-google-charts";




const data = [
  // ['Time', 'INV-1 - ActivePower (W)', 'INV-2 - ActivePower (W) ', 'INV-3 - ActivePower (W)', 'INV-4 - ActivePower (W) ', 'INV - 05 - ActivePower (W) ', 'INV - 06 - ActivePower (W) ', 'INV - 07 - ActivePower (W) ', 'INV - 08 - ActivePower (W) ', 'INV - 09 - ActivePower (W) ', 'INV - 10 - ActivePower (W) ', 'INV - 11 - ActivePower (W) ', 'INV - 12 - ActivePower (W) ', 'INV - 13 - ActivePower (W) ', 'INV - 14 - ActivePower (W) ', 'INV - 15 - ActivePower (W) '],
  ['Time', 'INV-1 - ActivePower (W)', 'INV-2 - ActivePower (W) ', 'INV-3 - ActivePower (W)', 'INV-4 - ActivePower (W) ' ],
  ["6.15", 602.00, 591.00, 602.00, 642.00,] ,
  ["6.45", 2210.00, 1964.00, 2195.00, 2253.00, 2046.00, ],
  ["7.00", 3101.00, 2664.00, 3055.00, 3069.00, 2797.00, ],
  ["7.15", 3925.00, 3386.00, 3881.00, 3905.00, 3602.00, ],
  ["7.30", 5193.00, 4439.00, 5115.00, 5134.00, 4861.00,],
  ["7.45", 8770.00, 7636.00, 8810.00, 8917.00, 8787.00, ],
  ["8.00", 13780.00, 11810.00, 13843.00, 14043.00,13089.00, ],
  ["8.15", 18872.00, 15810.00, 17928.00, 17894.00, ],
  // ["6.15", 602.00, 591.00, 602.00, 642.00, 436.00, 648.00, 192.00, 595.00, 578.00, 552.00, 560.00, 565.00, 834.00, 343.00, 460.00],
  // ["6.30", 1219.00, 1099.00, 1215.00, 1219.00, 988.00, 1216.00, 705.00, 1151.00, 1120.00, 1217.00, 1118.00, 1124.00, 1514.00, 927.00, 908.00],
  // ["6.45", 2210.00, 1964.00, 2195.00, 2253.00, 2040.00, 2271.00, 1729.00, 2124.00, 2123.00, 2160.00, 2083.00, 2020.00, 2486.00, 1956.00, 1668.00],
  // ["7.00", 3101.00, 2664.00, 3055.00, 3069.00, 2790.00, 3034.00, 2522.00, 2905.00, 2883.00, 2969.00, 2819.00, 2781.00, 3271.00, 2687.00, 2291.00],
  // ["7.15", 3925.00, 3386.00, 3881.00, 3905.00, 3604.00, 3872.00, 3484.00, 3746.00, 3720.00, 3779.00, 3654.00, 3612.00, 4071.00, 3512.00, 2854.00],
  // ["7.30", 5193.00, 4439.00, 5115.00, 5134.00, 4868.00, 5109.00, 4807.00, 4804.00, 4759.00, 4879.00, 4745.00, 4624.00, 5196.00, 4671.00, 3757.00],
  // ["7.45", 8770.00, 7636.00, 8810.00, 8917.00, 8785.00, 9035.00, 7397.00, 7846.00, 7818.00, 8022.00, 7795.00, 7596.00, 8221.00, 7837.00, 6498.00],
  // ["8.00", 13780.00, 11810.00, 13843.00, 14043.00, 13923.00, 13977.00, 13878.00, 12235.00, 12261.00, 12510.00, 12080.00, 12140.00, 13089.00, 12637.00, 10458.00],
  // ["8.15", 18872.00, 15810.00, 17928.00, 17894.00, 17219.00, 16813.00, 18691.00, 19004.00, 19345.00, 19517.00, 18400.00, 18319.00, 19919.00, 19605.00, 15734.00,],
];
  
const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

const LineChart = (props) => {


  const {personName}=props

 

  const [DataValue,setDataValue]=useState([])
  useEffect(()=>{

    const newArrOfArr = data.map((arr, index) => {
      if (index === 0) {
        if(personName?.length>0){
  
          let dataName=  [arr[0], ...arr.filter((item)=> personName.includes(item.slice(0,5)))]
          return dataName
          console.log(arr);
        }
        else{
          return arr
        } 
      } else {
      
        return arr;
      }
    });
        

  setDataValue(newArrOfArr)
  },[personName])
  console.log(DataValue,'>>>>>>>dataValue')
  // data[0]=dataValue

 

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={DataValue}
      options={options}
    />
  );
}
export default LineChart;
