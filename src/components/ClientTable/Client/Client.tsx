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
import "./Client.css";
import { IconProps } from '@mui/material';

function createData(
  name: element,
  status: string,
  client: number,
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
        <TableCell align="left">{row.status}</TableCell>
        <TableCell align="left" className="rowClient">{row.client}</TableCell>
        <TableCell align="left">{row.start}</TableCell>

        <div className='buttomIcon'>
        <div>
          <IconButton
            title='Expandir'
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
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
const client =   <div className="client" title='Cliente'>
<img src="src\components\Pictures\people\outline_people_black_24dp.png" alt="" />
<div className='nameClient'>Isaura dos Santos</div>
</div>

const client1 =   <div className="client" title='Cliente'>
<img src="src\components\Pictures\people\outline_people_black_24dp.png" alt="" />
<div className='nameClient'>Raphael Augusto Pereira</div>
</div>
const client2 =   <div className="client" title='Cliente'>
<img src="src\components\Pictures\people\outline_people_black_24dp.png" alt="" />
<div className='nameClient'>Pedro Fernandes da Silva</div>
</div>

const rows = [
  createData(client, '3/6', 2, '24/04/2022'),
  createData(client1, '2/5', 4, '25/08/2022'),
  createData(client2, '4/8', 3, '15/09/2002'),
  createData(client, '4/5', 7, '18/08/1972'),
  createData(client, '3/6', 6, '13/04/1992'),
  createData(client1, '2/5', 4, '21/11/2022'),
  createData(client2, '4/8', 3, '15/07/2002'),

];

export default function ClientTable() {
  return (
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table" className="table">
        <TableHead className="header">
          <TableRow className="headerTable">
            <TableCell className="headerName"> Nome</TableCell>
            <TableCell className="headerStatus">Status</TableCell>
            <TableCell className="headerViews" >Visitas</TableCell>
            <TableCell className='headerLastViews'>Última Visita</TableCell>
            <TableCell className="headerActions">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tableBody'>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
