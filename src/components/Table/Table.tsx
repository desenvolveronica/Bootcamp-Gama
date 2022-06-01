import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Button, IconProps } from '@mui/material';
import DeleteDialog from './Delete/Delete'
import Qrcode from './QrCode/QrCode'
import "./Table.css";




function createData(
  name: element,
  status: string,
  client: element,
  start: string,

) {
  return {
    name,
    status,
    client,
    start,
    history: [
      {
        inicio: '05-01-2020',
        cpf: '258955986-51',
        amount: 3,
      },
      {
        inicio: '10-08-2005',
        cpf: '258955986-51',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="tableRow">
        <TableCell component="th" scope="row" className='tableCell'>
          {row.name}
        </TableCell>
        <TableCell align="left" className="rowStatus">{row.status}</TableCell>
        <TableCell align="right" className="rowClient">{row.client}</TableCell>
        <TableCell align="left" >{row.start}</TableCell>
        <div className='buttomIcon'>
        <div id='iconAction'>
          <IconButton
            title='Expandir'
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        <div id="tableQrCode" title='QR Code'>
          <Qrcode/>
        </div>
        <div id='deleteDialog'>
          <DeleteDialog/>
        </div>
        
        </div>
        </div>

      </TableRow>
      <TableRow className='tableInfo'>
        <TableCell style={{paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Início</TableCell>
                    <TableCell>CPF</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.inicio}>
                      <TableCell component="th" scope="row">
                        {historyRow.inicio}
                      </TableCell>
                      <TableCell>{historyRow.cpf}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const people =   <div className="people" title='People'>
<img src="src\components\Pictures\people\outline_people_black_24dp.png" alt="" />
<div className='numberClient'>35</div>
</div>
const sneakers =   <div className="sneakers" title='Sneakers'>
<img src="src\components\Pictures\Rectangle 11.png" alt="" />
<div className='sneakersPhoto'><p id="sneakersText">A cada 5 almoços, ganhe 1 Sneakers!</p></div>
</div>
const sneakers1 =   <div className="sneakers" title='Sobremesa'>
<img src="src\components\Pictures\Rectangle 19.png" alt="" />
<div className='sneakersPhoto'><p id="sneakersText">Lorem ipsum dolor sit amet</p></div>
</div>
const sneakers2 =   <div className="sneakers" title='Sobremesa'>
<img src="src\components\Pictures\Rectangle 20.png" alt="" />
<div className='sneakersPhoto'><p id="sneakersText">Lorem ipsum dolor sit amet</p></div>
</div>
const sneakers3 =   <div className="sneakers" title='Sobremesa'>
<img src="src\components\Pictures\Rectangle 23.png" alt="" />
<div className='sneakersPhoto'><p id="sneakersText">Lorem ipsum dolor sit amet</p></div>
</div>
const rows = [
  createData(sneakers, 'Aberto', people, '24/04/2015'),
  createData(sneakers1, 'Fechado', people, '25/08/2020'),
  createData(sneakers2, 'Fechado', people, '15/09/2000'),
  createData(sneakers3, 'Fechado', people, '15/09/2000'),
  // createData('Lorem ipsum dolor sit amet', 'Fechado', people, '18/08/1971'),
  // createData('Lorem ipsum dolor sit amet', 'Fechado', people, '13/09/1993'),
  // createData('Lorem ipsum dolor sit amet', 'Fechado', people, '15/09/2000'),

];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table" className="table">
        <TableHead className="header">
          <TableRow className="headerTable">
            <TableCell className="headerName"> Nome</TableCell>
            <TableCell className="headerStatus">Status</TableCell>
            <TableCell className="headerClient" >Cliente</TableCell>
            <TableCell className="headerStart">Início</TableCell>
              <div className="headerAction">
                <TableCell className="headerAction">Ações</TableCell>
              </div>
          </TableRow>
        </TableHead>

        {/* info tabela */}
        <TableBody className='tableBody'>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


