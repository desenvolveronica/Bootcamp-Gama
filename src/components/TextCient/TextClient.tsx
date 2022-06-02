import * as React from 'react';
import "./TextClient.css";
// import CollapsibleTable from "../Table/Table";



export default function TextClient() {
  return (
    
    <>
    <div className="text">
    <h1>Clientes</h1>
    <p>Gerencie e acompanhe o progresso dos seus clientes</p>
    <div id="adicionar" title='Pesquisar'>
      <input type="search" placeholder='Pesquisar' />
    </div>
    </div>


    </>
  );
}
