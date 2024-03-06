import React from 'react'
import { Navbar } from './components';
import './App.css';
import {Outlet} from 'react-router-dom';
import { Header } from './containers';

const App = () => {
  return (
    <div className="App">
    App
  <div className="gradient__bg">
    <Navbar />
  </div>
  <Outlet />
</div>
  )
}

export default App