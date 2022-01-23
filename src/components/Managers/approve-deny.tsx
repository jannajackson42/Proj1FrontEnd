import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "../login/log-out";

export default function ApproveorDeny(){
    const reimbIDInput = useRef(null);
    const userIDInput = useRef(null);
    const noteInput = useRef(null);
    const refreshPage = ()=>{window.location.reload()}
    

    const navigate = useNavigate();
    async function ApproveReimb(notes:string){
        const reimbid = reimbIDInput.current.value;
        const empid = userIDInput.current.value;
        const response = await fetch(`http://localhost:4000/employee/${empid}/${reimbid}/Approve`,{
            method:'PATCH',
            body:JSON.stringify({notes}), 
            headers:{
            'Content-Type':"application/json"
            }})
            navigate('/view-all-reimbs');
   }

    async function DenyReimb(notes:string){
        const reimbid = reimbIDInput.current.value;
        const empid = userIDInput.current.value;
        const response = await fetch(`http://localhost:4000/employee/${empid}/${reimbid}/Deny`,{
            method:'PATCH', 
            body: JSON.stringify({notes}),
            headers:{
            'Content-Type':"application/json"
        }})
        navigate('/view-all-reimbs');
    }
    
    
    return(<>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a style= {{"marginLeft":"2%"}} className="navbar-brand" href="#" >Manager</a>
        <button style= {{"marginLeft":"2%"}} type="button" className ="mx-2 btn btn-outline-secondary" onClick={()=>navigate("/view-my-reimbs")}>View My Reimbursements</button>
        <button style= {{"marginLeft":"2%"}} type="button" className ="mx-2 btn btn-outline-secondary" onClick={()=>navigate("/view-all-reimbs")}>View All Reimbursements</button>
        <button style= {{"marginLeft":"2%"}} type="button" className ="mx-2 btn btn-outline-secondary" onClick={()=>navigate("/manager-home")}>Back To Home</button>
        <LogOut/>
        </nav>
    <h3 style= {{"marginLeft":"2%"}} className= "my-3">Approve or Deny a Reimbursement</h3> 
       <small style= {{"marginLeft":"2%"}} className="text-muted my-1">Confirm the required information, then click approve or deny. Notes are optional. </small><br/>
    
        <label style= {{"marginLeft":"2%"}}htmlFor="userIDInput">Confirm Employee ID</label>
        <input style= {{"marginLeft":"2%"}} className="form-control my-1" ref = {userIDInput} type = "text" id="userIDInput" placeholder="Employee ID"/>

        <label style= {{"marginLeft":"2%"}} htmlFor="reimbIDInput">Confirm Reimbursement ID</label>
        <input style= {{"marginLeft":"2%"}} className="form-control my-1" ref = {reimbIDInput} type = "text" id="reimbIDInput" placeholder="Reimbursement ID"/>

        <label style= {{"marginLeft":"2%"}} htmlFor="noteInput">Notes</label>
        <input style= {{"marginLeft":"2%"}} className="form-control my-1" ref = {noteInput} type = "text" id = "noteInput" placeholder="Add notes here"/>

        <button style= {{"marginLeft":"2%"}}type="button" className="btn btn-outline-success" onClick = {()=>ApproveReimb(`${noteInput.current.value}`)}>Approve</button>
        <button style= {{"marginLeft":"2%"}} type="button" className="btn btn-outline-danger" onClick = {()=>DenyReimb(`${noteInput.current.value}`)}>Deny</button>   
    
    </>)
}
