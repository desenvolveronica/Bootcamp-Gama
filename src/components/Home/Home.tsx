import React from "react";
import AdressAndContact from "../Menu/AdressAndContact/AdressAndContact/AdressAndContact";
import Navigation from "../Menu/Header/menu";
import Picture from "../Menu/PictureRestaurant/PictureRestaurant";
import Description from "../Menu/RestaurantDescription/RestaurantDescription";
import SideButtons from "../Menu/SideButtons/MenuSideButtons";
import Home from './PageHome/PageHome'

export default function HomePage() {
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
          <Home/>

          </div>
        </div>
      </div>
    </div>
  );
}
