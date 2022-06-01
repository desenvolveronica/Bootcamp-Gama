import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import CollapsibleTable from "./components/Table/Table";
import Text from "./components/Text/Text";
import R from "./routes";
import Client from "./components/ClientTable/ClientTable";
import PieChart from './components/Statistics/PieChart/PieChart'
import SuportApp from './components/Suport/SuportApp'
import DeleteDialog from './components/Table/Delete/Delete'
import PieChartCircle from './components/Statistics/statistics'

import Routes from "./routes";

import "./App.css";


function App() {

  return (
    
    <div className="App">
      <Routes/>

       {/* <Client/> */}
      {/* <DashBoard/> */}
      {/* <Text/> */}
      {/* <R/> */}
      {/* <SuportApp/> */}
      {/* <DeleteDialog/> */}
    </div>
  );
}

export default App;
