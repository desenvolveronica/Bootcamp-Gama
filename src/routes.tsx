import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Client from "./components/ClientTable/ClientTable";
import SuportApp from './components/Suport/SuportApp'
import PieChartCircle from './components/Statistics/statistics'
import HomePage from './components/Home/Home'


const R: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          caseSensitive={false}
          element={<DashBoard />}
        />

        <Route
          path="/client"
          caseSensitive={false}
          element={<Client />}
        />

        <Route
          path="/suport"
          caseSensitive={false}
          element={<SuportApp />}
        />

        <Route
          path="/pieChart"
          caseSensitive={false}
          element={<PieChartCircle/>}
        />

        <Route
          path="/home"
          caseSensitive={false}
          element={<HomePage />}
        />

      </Routes>
    </Router>
  );
};

export default R;
