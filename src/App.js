import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*----------------Login Import ------------------------*/

import Login from './Components/Loginpage'
import ForgettenPassowrd from './Components/Forgot'

/*--------------------Side bar ------------------------*/
import Sidebar from './Components/Sidebar'

/*-------------------- Components -----------------------*/
import Siteoverview from "./Components/Siteoverview";
import AllTicketOverView from "./Components/AllTicketOverView";
import Eira from "./Components/Eira";
import RolesList from "./Components/RolesList";
import UserList from "./Components/UserList";
import AddRole from "./Components/AddRole";
import ViewTicket from "./Components/ViewTicket";
import AllAlert from "./Components/AllAlert";
import Alltickets from "./Components/AllTickets";
import MappingTab from "./Components/MappingTab";

function App() {

  return (

    <div>
      <Router>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='forgettenpassword' element={<ForgettenPassowrd />} />

          {
            localStorage.getItem("token") &&
            <Route path="dashboard" element={<Sidebar />}>
              <Route path="" element={<Siteoverview />} />
              <Route path="alltickets" element={<Alltickets />} />
              <Route path="allalerts" element={<AllAlert />} />
              <Route path="home" element={<Eira />} />
              <Route path="role" element={<RolesList />} />
              <Route path="addrole" element={<AddRole />} />
              <Route path="mapping" element={<MappingTab />} />
              <Route path="user" element={<UserList />} />
              <Route path="" element={<ViewTicket />} />
            </Route>
          }

        </Routes>
      </Router>

    </div>
  )
}

export default App;