import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField/TextField';
import "./Text.css";
import "./Dialog.css";
 

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} id="adicionarClient" title='Adicionar'>
      <img src="src\components\Pictures\add\outline_add_circle_white_24dp.png"  alt="" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <TextField id="filled-basic" label="Nome do Programa" variant="filled" />
           <form id='content'>
            <h4>1</h4>
           <TextField id="basic-left" label="Tarefa #1" variant="standard" />
           <p  id="border-none"/>  
           <TextField id="basic-right" label="+R$0,00" variant="standard" />
           </form>
           <form id='content'>
            <h4>2</h4>
           <TextField id="basic-left" label="Tarefa #1" variant="standard" />
           <p  id="border-none"/>  
           <TextField id="basic-right" label="+R$0,00" variant="standard" />
           </form>
           <form id='content'>
            <h4>3</h4>
           <TextField id="basic-left" label="Tarefa #1" variant="standard" />
           <p  id="border-none"/>  
           <TextField id="basic-right" label="+R$0,00" variant="standard" />
           </form>
           <form id='content'>
            <h4>4</h4>
           <TextField id="basic-left" label="Recompensa" variant="standard" />
           <p  id="border-none"/>  
           <TextField id="basic-right" label="+R$0,00" variant="standard" />
           </form>
          <div id="footerDialog">
            <h4>Retorno por Cliente:</h4>
            <TextField id="footerDialogInput" label="" variant="standard" />
          </div>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id="buttonDone"   onClick={handleClose}><img src="src\components\Pictures\done.png" alt="" /></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
