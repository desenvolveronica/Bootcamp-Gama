import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import "./Delete.css";
 

export default function DeleteDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} id="deletarClient" title='Deletar'>
      <img src="src\components\Pictures\delete.png"  alt="" id='delete' />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent id='dialogAll'>
          <DialogContentText id="dialog-description">
          <img src="src\components\Pictures\delete\delete.png" alt="" />
          <h4 id='description'>Tem certeza que deseja excluir este programa?</h4>
        </DialogContentText>
        <DialogActions>
          <Button id="buttonCancelar" onClick={handleClose}>Cancelar</Button>
          <Button id="buttonExcluir" onClick={handleClose}>Excluir</Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
