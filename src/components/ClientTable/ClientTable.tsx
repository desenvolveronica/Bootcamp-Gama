import React from "react";
// import { Link } from "react-router-dom";
import AdressAndContact from "../Menu/AdressAndContact/AdressAndContact/AdressAndContact";
import Navigation from "../Menu/Header/menu";
import Picture from "../Menu/PictureRestaurant/PictureRestaurant";
import Description from "../Menu/RestaurantDescription/RestaurantDescription";
import SideButtons from "../Menu/SideButtons/MenuSideButtons";
import ClientTable from "../ClientTable/Client/Client";
import TextClient from "./TextCient/TextClient";
import "./ClientTable.css"

export default function client() {
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

        <TextClient/>
        <ClientTable/>
        </div>
        
        {/* <HeaderScreen /> */}
      </div>
    </div>
  );
}
