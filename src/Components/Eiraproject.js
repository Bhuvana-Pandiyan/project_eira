import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function Eiraproject() {
  const [file, setFile] = useState(null);
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const dropdownOptions = ['Inputcurrent1','InputVolatge1','Inputcurrent2','InputVolatge2','Inputcurrent3','InputVolatge'];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryData = event.target.result;
      const workbook = XLSX.read(binaryData, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const worksheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Extract headers
      const headers = worksheetData[0];

      // Map hardcoded parameters to dropdown list
      
      const dropdownData = headers.map((header) => ({
        header,
        options: dropdownOptions[header] || [],
      }));

      // Set state
      setHeaders(headers);
      setData(dropdownData);
    };

    reader.readAsBinaryString(file);
  };

  const handleDataChange = (event, index) => {
    const newData = [...data];
    newData[index].value = event.target.value;
    setData(newData);
  };
console.log("****data**********"+data);
  const handleSubmit = () => {
    const requestBody = data.slice(1).map((row) => {
      const obj = {};
      obj[data[0]] = data;
      // obj[data[1]] = data.value2;
      // obj[data[2]] = data.value3;
      return obj;
    });
    console.log(requestBody);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {data.length > 0 && (
        <table>
          {/* <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead> */}
          <tbody>
            {data.map((row, index) => (
              <tr key={row.header}>
                <td>{row.header}</td>
                <td>
                  <select value={row.value} onChange={(event) => handleDataChange(event, index)}>
                    <option value=""></option>
                    {dropdownOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input type="number" onChange={(event) => handleDataChange(event, index)} />
                </td>
                {/* <tr> */}
              {/* {headers.map((header) => ( */}
                {/* <td key={`${header}-dropdown`}>
                  <select>
                    {hardcodedList.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td> */}
              {/* ))} */}
            {/* </tr> */}
               
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Eiraproject;
