import AdressAndContact from "../Menu/AdressAndContact/AdressAndContact/AdressAndContact";
import Navigation from "../Menu/Header/menu";
import Picture from "../Menu/PictureRestaurant/PictureRestaurant";
import Description from "../Menu/RestaurantDescription/RestaurantDescription";
import SideButtons from "../Menu/SideButtons/MenuSideButtons";
import {PieChart} from './PieChart/PieChart'
import {BarChart} from './BarChart/BarChart'
import TextPie from "../Statistics/TextPie/TextPie";

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
          <BarChart/>
          </div>
        </div>
      </div>
    </div>
  );
}
