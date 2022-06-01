import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import "./QrCode.css";
 

export default function Qrcode() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} id="deletarClient" title='QrCode'>
      <img src="src\components\Pictures\qrCode\1x\outline_qr_code_2_black_24dp.png"  alt="" id='qrCode' />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <span id="closeDialog">
        <img src="src\components\Pictures\close.png" alt="" id="close" onClick={handleClose}/>
      </span>
        <DialogContent id='dialogQrCOde'>
          <DialogContentText id="descriptionQrCode">
          <h4 id='descriptionQrCodeText'>A cada 5 almoços, ganhe um Snickers! </h4>
          <img src="src\components\Pictures\QRCode_Fácil (4) 1.png" alt="" id="qrCode"/>
        
          <span id='functionalities'>
            <img src="src\components\Pictures\share.png" alt=""  id="share"/>
            <img src="src\components\Pictures\print.png" alt="" id="print"/>
          </span>
        <h4 id='descriptionQrCodeLastText'>Mostre o QR Code para cadastrar seu cliente </h4>
        </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
