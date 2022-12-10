import react from "react"
import "./sidebart.css";
import {SidebarData} from './SidebarData'
import { Link, NavLink } from "react-router-dom";


function Sidebar() {
    return( <div className="Sidebar">
        <div className="fondo">
        <img className="userlogo" src="./images/usuario 3.png" alt="usuario"></img>
        <img className="fondouser" src="./images/fondo1.jpg" alt="fondo"></img>
        <div>
            <h1 className="estatus">Estatus online 🟢</h1>
           
       <div>
       <nav>
        <ul>
            <li>
            <Link to = "/"><h1 className="estudiantes">👨‍🎓    Estudiantes</h1></Link>
            <Link to = "/"><h1 className="profesores">🎓 Profesores</h1></Link>


            </li>
        </ul>   
       </nav>
       </div>
       </div>
        </div>
    </div>
    );
}
export default Sidebar;