import './App.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import AddDoctor from './pages/AddDoctor';
import EditDoctor from './pages/EditDoctor';
import Appointments from './pages/Appointments';
import { Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import RegisterReceptionist from './components/receptionist/RegisterReceptionist';

import RecepDashboard from './pages/receptionalist/Receptionalist';
import NewAppointments from './pages/receptionalist/NewAppointments';


function App() {
  return (<>
    <Switch>
    <Route exact path="/" component={SignUp}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/login" component={LogIn}/>
    <Route exact path="/doctor/" component={Doctor}/>
    <Route exact path="/doctor/add-doctor/" component={AddDoctor} />
    <Route exact path="/doctor/edit-doctor/" component={EditDoctor} />
    <Route exact path="/doctor/appointments/" component={Appointments} />
    <Route exact path="/receptionist/edit-receptionist/" component={RegisterReceptionist} />

    <Route exact path="/receptionalist" component={RecepDashboard} />
    <Route exact path="/receptionalist/newappointments" component={NewAppointments} />
    </Switch>
    </>
  );
}

export default App;
