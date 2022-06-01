import React from "react";
import "./MenuSideButtons.css";
import {SideBarData} from './SideBarData'


export default function SideButtons() {
  return (
    <div className="sideBar">
      <ul className="SideBarList">
      {SideBarData.map((val, key)=>{
        return (
          <li key={key} 
          id={window.location.pathname == val.link ? 'active' : ""}
          className="rowList"
          onClick={()=>{
            window.location.pathname = val.link
          }}> 
          <div id="icon">{val.icon}</div>
          <div id="title">{val.title}</div>
          </li>
        )
      })}
      </ul>
    </div>
  );
}
