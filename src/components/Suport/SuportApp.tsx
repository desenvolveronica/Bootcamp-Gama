import AdressAndContact from "../Menu/AdressAndContact/AdressAndContact/AdressAndContact";
import Navigation from "../Menu/Header/menu";
import Picture from "../Menu/PictureRestaurant/PictureRestaurant";
import Description from "../Menu/RestaurantDescription/RestaurantDescription";
import SideButtons from "../Menu/SideButtons/MenuSideButtons";
import SuportClient from "../Suport/SuportClient/SuportClient";
import TextClient from "../ClientTable/TextCient/TextClient";

import "./SuportApp.css"

export default function SuportApp() {
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
            <SuportClient/>
        </div>
        
        {/* <HeaderScreen /> */}
      </div>
    </div>
  );
}
