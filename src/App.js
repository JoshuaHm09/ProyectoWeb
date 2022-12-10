import "./App.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";
import {Routes, Route, Switch } from "react-router-dom";
import Primerapag from "./Primerapag.js";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import Sidebar from "./Sidebar"

function App() {

 return (
 <Routes>
    <Route path="/" element = {<Login/>} />
    <Route path="/Sidebar" element = {<Sidebar/>} />
    <Route path="/Primerapag" element = {<Primerapag/>} />

    <Route/>
 </Routes>
 )
}
export default App;
