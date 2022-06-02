import React from "react";
import DashBoard from "./components/DashBoard/DashBoard";
import CollapsibleTable from "./components/Table/Table";
import Text from "./components/Text/Text";
import R from "./routes";
import Client from "./components/ClientTable/ClientTable";
import SuportApp from './components/Suport/SuportApp'
import DeleteDialog from './components/Table/Delete/Delete'
import PieChartCircle from './components/Statistics/statistics'
import HomePage from './components/Home/Home'
import Home from './components/Home/Home'
import Routes from "./routes";

import "./App.css";


function App() {

  return (
    
    <div className="App">
      <Routes/>
        {/* <HomePage/> */}
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
