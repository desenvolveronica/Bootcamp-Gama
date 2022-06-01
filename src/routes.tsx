import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Client from "./components/ClientTable/ClientTable";
import SuportApp from './components/Suport/SuportApp'
import PieChartCircle from './components/Statistics/statistics'



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

        {/* <Route
          path="/favoritesrestaurantuser"
          caseSensitive={false}
          // element={<FavoritesScreen />}
        />

        <Route
          path="/scorescreen"
          caseSensitive={false}
          // element={<LoyaltyScoreScreen />}
        /> */}
      </Routes>
    </Router>
  );
};

export default R;
