import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Siteoverview from './Components/Siteoverview';
import Menuu from './Components/Menuu';
// import Home from './Components/Home';
import AllTickets from './Components/AllTickets';
import AllAlert from './Components/AllAlert';
import axios from 'axios';
import Eira from './Components/Eira';
import RolesList from './Components/RolesList';
import Sidebar from './Components/Sidebar';
import Viewticket from './Components/ViewTicket';
import Forgot from './Components/Forgot';
import { BrowserRouter } from 'react-router-dom';

// import './Eira.css';
import Loginpage from './Components/Loginpage';
import UserList from './Components/UserList';
import AddRole from './Components/AddRole';
import RoleMapping from './Components/RoleMapping';
import MappingTab from './Components/MappingTab';

function App() {

  // const [getValue, setGetValue] = useState([])
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
          <Route exact path="/menuu" element={<Menuu />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/siteoverview" element={<Menuu />} />
          <Route path="/allAlert" element={<AllAlert />} />
          <Route path="/alltickets" element={<AllTickets />} />
          <Route path="/allticketoverview" element={<Sidebar />} />
          <Route path='/viewTicket' element={<Viewticket />} />
          <Route path='/roleslist' element={<RolesList />} />
          <Route path='/userlist' element={<UserList />} />
          <Route path='/addrole' element={<AddRole />} />
          <Route path='/roleMapping' element={<RoleMapping />} />
          <Route path='/mapping' element={<MappingTab />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;