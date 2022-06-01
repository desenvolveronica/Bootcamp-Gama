import * as React from 'react';
import "./SuportClient.css";
// import CollapsibleTable from "../Table/Table";



export default function SuportClient() {
  return (
    
    <>
    <div id="suportAll">
    <h1>Suporte</h1>
    <span>Ficou com alguma dúvida? Entre em contato com o nosso suporte!</span>
        <div id="suport">
            <div id='whatsapp'><h3>whatsapp</h3>
                <img src="src\components\Pictures\whatsapp.png" alt="" />
                <h4>(31) 9999-9999</h4>
            </div>
            <div id='email'><h3>E-mail</h3>
                <img src="src\components\Pictures\email.png" alt="" />
                <h4>fidmais@suport.com.br</h4>
            </div>
        </div>
    </div>
    </>
  );
}
