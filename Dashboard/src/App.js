import React from 'react';
import Signup from './Signup';
import './App.css'
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import ContactUs from './ContactUs';
import Home from './Home';
import About from './About';
function App() {
  return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} ></Route>
      <Route path='/Login' element={<Login/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>} >
      <Route path='/dashboard' element={<Home/>} ></Route>
      <Route path='/dashboard/contact' element={<ContactUs/>} ></Route>
      <Route path='/dashboard/about' element={<About/>} ></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
