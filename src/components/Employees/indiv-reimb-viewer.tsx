import { useNavigate } from "react-router-dom";
import LogOut from "../login/log-out";
import CreateReimbursementPage from "./create-reimb-page";
import ReimbTable from "./indiv-reimb-table";

export default function IndivReimbViewer(){
    const navigate = useNavigate();
    const manager = localStorage.getItem("isManager");
    
    return(<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a style= {{"marginLeft":"2%"}} className="navbar-brand">Employee</a>
        <button type = "button" className = "mx-2 btn btn-outline-secondary" onClick = {()=>navigate('/create-new-reimb')}>Create New Reimbursement</button>
        <button type="button" className ="mx-2 btn btn-outline-secondary" onClick={()=>manager === "True" ? navigate("/manager-home"):navigate("/employee-home")}>Back To Home</button>
        <LogOut/>
        </nav>
    <h2 style= {{"marginLeft":"2%"}} className = "my-3">View Your Reimbursements</h2>
    <ReimbTable/>
    </>)
}