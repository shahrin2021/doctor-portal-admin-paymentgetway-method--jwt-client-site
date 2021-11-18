import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import useAuth from './Pages/Home/Hooks/useAuth';
import { CircularProgress } from '@mui/material';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/Dashboard/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      
      
       <AuthProvider>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
          <Login></Login>
          </Route>
          <Route path='/register'>
          <Register></Register>
          </Route>
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
