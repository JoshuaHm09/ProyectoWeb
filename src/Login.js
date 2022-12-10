import "./App.css";
import {React} from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect,useRef, useContext} from 'react';
import { Link, NavLink } from "react-router-dom";






function Login() {







  return (
    <div className="Login">

    
 <div>
  <div className="body">asdsadasdsa</div>
  <form>

   <img className="unilogo" src="./images/unilogo.png" alt="unilogo"></img>
  <div>
     <div className="grad"></div>
     <div className="header"></div>
     <div className="span"><span><b>ADMIN LOGIN</b></span></div><br/>
     
<br/>

    <div className="login">
<div className="hr">
  </div>

<input className="usuario1" type="text" v-model="username" placeholder="Username" name="user"></input>
<br/>
<br/>
<div className="hl">

</div>
<input className="password1" type="password" v-model="password"  placeholder="Password" name="password" >

</input>
<br/>
<br/>
<br/>
<Link to ="./Primerapag"><Button  variant="outline-dark"> Log In</Button></Link>



</div>
</div>
</form>

 </div>
 </div>

  )
}

export default Login;
