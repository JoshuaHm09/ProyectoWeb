
import "./paginaprincipal.css";
import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react"
import Axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 

function Primerapag() {
    const [list, setList] = useState([]);
 

    useEffect = (() => {
        Axios.get("https://localhost:44372/api/Estudiantes/ListaEstudiantes").then((response) => {
            console.log(response);

            
          },[]);

      
          
     })
     

        
    return (
     
<div className="Primerapag">

<div className="header">
   <div className="Fondotop"></div>
       <div><Link to = "./"><h1 className="notificaciones">🔔</h1></Link></div>
    <div><Link to = "./"><h1 className="mensajes">✉️</h1></Link></div>
    <div><Link to = "./"><h1 className="opciones">⚙️</h1></Link></div>
</div>  

<div className="container">

<div className="cuadro">

</div>
<div className="cuadro2">

</div>

 <div className="cuadro-container">
 
    <div className="cuadroheader">
   
 </div>


   </div>
   dfd
  
  
</div>
  


</div>

    );

}


export default Primerapag;
        