import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { BrowserRouter, Navigate, Route, Router, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Login, Reimbursement } from "../../dtos/dtos";
import CreateReimbursementPage from "../Employees/create-reimb-page";
import IndivReimbViewer from "../Employees/indiv-reimb-viewer";
import ApproveorDeny from "./approve-deny";

import ReimbViewer from "./reimb-viewer";

export default function ManagerHomePage(){
    const navigate = useNavigate();
    const username = localStorage.getItem("username")
    const welcome = require('/Users/schorfheidej/Desktop/Proj1FrontEnd/employee-reimbs/src/SFSKX2Ll.jpg');
    const logout = ()=> localStorage.clear();

    function logOut(){
        logout();
        navigate('/login');
        }

    return(<>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a style= {{"marginLeft":"2%"}} className="navbar-brand" href="#">Manager Home</a>
        <button type = "button" className ="mx-2 btn btn-outline-secondary" onClick = {()=>logOut()}>Log Out</button>
        </nav>

        <div className="d-flex flex-column align-items-center w-100 form-group">
            <h1 className = "my-4">Welcome, {username}!</h1>
            <button style= {{"marginLeft":"65%"}} type = "button" className = "mx-2 btn btn-outline-secondary" onClick = {()=>navigate('/create-new-reimb')}>Create New Reimbursement</button><br/>
            <button type="button" className ="mx-2 btn btn-outline-success" onClick={()=>navigate("/view-all-reimbs")}>View All Reimbursements</button><br/>
            <button type = "button" className = "mx-2 btn btn-outline-info" onClick = {()=>navigate('/approve-deny')}>Manage Reimbursements</button><br/>
            <button type = "button" className = "mx-2 btn btn-outline-warning" onClick = {()=>navigate('/view-my-reimbs')}>View My Reimbursements</button>
            <img src={welcome}/>
        </div>
        </>)
        
}