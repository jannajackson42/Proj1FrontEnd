
import { useNavigate } from "react-router-dom";
import ApproveorDeny from "./approve-deny";
import ReimbTable from "./reimbursement-table";

export default function ReimbViewer(){
    const navigate = useNavigate();
    const manager = localStorage.getItem("isManager");
    
    function ReturnHome(){
        const navigate = useNavigate();
        const manager = localStorage.getItem("isManager");
    
        if(manager=="True"){
            navigate('/manager-home');
        }else{
            navigate('/employee-home');
        }
    }

    const logout = ()=> localStorage.clear();
    function logOut(){
        logout();
        navigate('/login');
        }

    return(<>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a style= {{"marginLeft":"2%"}} className="navbar-brand" href="#" >Manager</a>
        <button type = "button" className = "mx-2 btn btn-outline-secondary" onClick = {()=>navigate('/approve-deny')}>Manage Reimbursements</button>
        <button type="button" className ="mx-2 btn btn-outline-secondary" onClick={()=>navigate("/manager-home")}>Back To Home</button>
        <button type = "button" className ="mx-2 btn btn-outline-secondary" onClick = {()=>logOut()}>Log Out</button>
        </nav>
    <h1 style= {{"marginLeft":"2%"}} className = "my-3">View All Reimbursements</h1>
    <ReimbTable/>
    </>)
}