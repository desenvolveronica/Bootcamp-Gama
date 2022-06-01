import { textAlign } from "@mui/system";
import React from "react";
// import { Link } from "react-router-dom";
import "./menu.css";

const Navigation = () => {
  return (

    <div
      style={{
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "64px",
        boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#6AB04C",
      }}
    >
    <div className="imageLogo">
    <img src="src\components\Pictures\image 1.png" alt="" />
    </div>
      {/* <Link to={"/SingIn"}>Cadastre-se</Link> */}
    </div>
  );
};

export default Navigation;
