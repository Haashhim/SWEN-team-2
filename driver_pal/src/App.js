import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Billings } from './Pages/Billing/Billings'
import {Settings } from './Pages/Settings/Settings'
import { DriverLoginSignUp } from './components/LoginSignUp/DriverLoginSignUp';
import { LoginSignUp } from './components/LoginSignUp/LoginSignUp';
import { Orders } from './Pages/Orders/Orders';
import { Favourites } from './Pages/Favourites/Favourites';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/login' component={LoginSignUp} />
          <Route path='/driver_login' component={DriverLoginSignUp} />
          <Route>
            <Navbar/>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/orders' component={Orders} />
              <Route path='/favourite' component={Favourites} />
              <Route path='/billing' component={Billings} />
              <Route path='/settings' component={Settings} />
              {/* Add more routes as needed */}
            </Switch>
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
