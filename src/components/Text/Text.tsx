import * as React from "react";
import "./Text.css";
import AlertDialog from "./Dialog";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReactDOM from "react-dom";

export default function Text() {
  return (
    <>
      <div id="textTable">

        <div className="salutition-table">
          <h1>Meus Programas</h1>
          <p id="description">
            Crie e personalize programas de recompensas para o seu cliente
          </p>
        </div>

        <div className="include-client">
          <AlertDialog />
        </div>
        
      </div>
    </>
  );
}
