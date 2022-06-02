import React from "react";
// import { Link } from "react-router-dom";
import AdressAndContact from "../Menu/AdressAndContact/AdressAndContact/AdressAndContact";
import Navigation from "../Menu/Header/menu";
import Picture from "../Menu/PictureRestaurant/PictureRestaurant";
import Description from "../Menu/RestaurantDescription/RestaurantDescription";
import SideButtons from "../Menu/SideButtons/MenuSideButtons";
import CollapsibleTable from "../Table/Table";
import Text from "../Text/Text";

import "./DashBoard.css";

export default function dashBoard() {
  return (
    <div>
        <Navigation />
          <div id="main">
            <div id="side-left">
              <Picture />
              <Description />
              <AdressAndContact />
              <SideButtons />
            </div>
          <div id="side-right">
            <Text/>
            <CollapsibleTable/>
          </div>
        </div>
    </div>

  );
}
