import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LogOut from "../login/log-out";
import CreateReimbursementForm from "./create-reimbursement";


export default function CreateReimbursementPage(){

const navigate = useNavigate();
const manager = localStorage.getItem("isManager");

return(<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a style= {{"marginLeft":"2%"}} className="navbar-brand" href="#">Employee</a>
        
        <button type="button" className ="mx-2 btn btn-outline-secondary" onClick={()=>navigate("/view-my-reimbs")}>View My Reimbursements</button>
        <button type="button" className ="mx-2 btn btn-outline-secondary" onClick={()=>manager === "True" ? navigate("/manager-home"):navigate("/employee-home")}>Back To Home</button>
        <LogOut/>
    </nav>

<h2 style= {{"marginLeft":"2%"}} className= "my-3">Create a New Reimbursement</h2>
<CreateReimbursementForm/>

</>)
}