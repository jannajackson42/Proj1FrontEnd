import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "../login/log-out";
import CreateReimbursementPage from "./create-reimb-page";
import IndivReimbViewer from "./indiv-reimb-viewer";


export default function EmployeeHomePage(){
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const manager = localStorage.getItem("isManager");
    const welcome = require('/Users/schorfheidej/Desktop/Proj1FrontEnd/employee-reimbs/src/SFSKX2Ll.jpg');

    return(<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a style= {{"marginLeft":"2%"}} className="navbar-brand" href="#">Employee Home</a>
        <LogOut/>
        </nav>
        <div className="d-flex flex-column align-items-center w-100 form-group">
        <h1 className = "my-4">Welcome, {username}!</h1>
        <button type="button" className ="my-2 btn btn-outline-success" onClick={()=>navigate("/view-my-reimbs")}>View My Reimbursements</button>
        <button type = "button" className = "my-2 btn btn-outline-info" onClick = {()=>navigate('/create-new-reimb')}>Create New Reimbursement</button>
        </div>
        <img style= {{"marginLeft":"25%"}} src={welcome}/>
    </>)
    }