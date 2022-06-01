import React from "react";
// import { Link } from "react-router-dom";
import AdressAndContact from "../Menu/AdressAndContact/AdressAndContact/AdressAndContact";
import Navigation from "../Menu/Header/menu";
import Picture from "../Menu/PictureRestaurant/PictureRestaurant";
import Description from "../Menu/RestaurantDescription/RestaurantDescription";
import SideButtons from "../Menu/SideButtons/MenuSideButtons";
import {PieChart} from './PieChart/PieChart'
import TextPie from "../Statistics/TextPie/TextPie";
// import "./ClientTable.css"

export default function PieChartCircle() {
  return (
    <div className="side-bar">
      <Navigation />
      <div>

        <div className="main">
          <div className="side-left">
            <Picture />
            <Description />
            <AdressAndContact />
            <SideButtons />
          </div>
          <div>
          <TextPie/>
          <PieChart/>
          </div>
        </div>
      </div>
    </div>
  );
}
