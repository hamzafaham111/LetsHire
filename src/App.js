import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/HomePage';
import Catogries from './Components/Catogries';
import Register from './Components/profile/Register';
import {Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SASS/App.css';
const App = () =>
{
  return(<>
   <Navbar/>
  <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/catogries" component={Catogries}/>
  </Switch>
  </>)
}
export default App;
