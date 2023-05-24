import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Siteoverview from './Components/Siteoverview';
// import Home from './Components/Home';
import AllTickets from './Components/AllTickets';
import AllAlert from './Components/AllAlert';
import axios from 'axios';
import Menuu from './Components/Menuu';
import Eira from './Components/Eira';
// import RoleList from './Components/RolesList';
import Sidebar from './Components/Sidebar';
import Viewticket from './Components/ViewTicket';
import Forgot from './Components/Forgot';

// import './Eira.css';
import Loginpage from './Components/Loginpage';

function App() {

  const [getValue, setGetValue] = useState([])

  // useEffect(() => {

  //   getCall();

  // }, [])

  // const getCall = () => {

  //   axios.get(`http://inspirece.com/eiramobileservice/rest/eampm/login/userid=9087777058&deviceid=3a62374ed340e92e&password=Test@123&timezoneoffset=330`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setGetValue(res.data)
  //     })

    /*------ post ----- new data add ---*/

    // let value={
    //   name:'',
    //   age:''
    // }
    // axios.post(`api`,value).then((res) => {
    //   console.log(res.data);
    //   getCall()
    // }) 

    /*------put ------update  */
    // axios.put(`api&id=${id}`,value).then((res) => {
    //   console.log(res.data);
    //   getCall()
    // }) 

    /*------delete ------delete  */
    //    axios.delete(`api&id=${id}`,value).then((res) => {
    //     console.log(res.data);
    //     getCall()
    //   })
  // }

  // console.log(getValue, "getValue");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Loginpage />} />
          <Route exact path="/menu" element={<Sidebar />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/siteoverview" element={<Menuu />} />
          <Route path="/allAlert" element={<AllAlert />} />
          <Route path="/alltickets" element={<AllTickets />} />
          <Route path="/allticketoverview" element={<Sidebar />} />
          <Route path='/viewTicket' element={<Viewticket />} />
          {/* <Route path='/rolelist' element={<RoleList />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;