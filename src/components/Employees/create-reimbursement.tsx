import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Reimbursement } from "../../dtos/dtos";

export default function CreateReimbursementForm(){
    
    const nameInput = useRef(null);
    const dateInput = useRef(null);
    const amountInput = useRef(null);
    const empIDInput = localStorage.getItem("employeeID");
    

    
    const navigate = useNavigate();
    async function createReimb(){
        
        const reimbursement:Reimbursement = {
            id:'',
            name: nameInput.current.value,
            date: dateInput.current.value,
            amount: amountInput.current.value,
            status:''
        }
        const response = await fetch(`http://db16-73-24-92-136.ngrok.io/employee/${empIDInput}`,{
            method:'POST', 
            body:JSON.stringify(reimbursement),
            headers:{
            'Content-Type':"application/json"
        }
        
    })
        if(response.status === 201){
            alert("Successfully Added Reimbursement")
            navigate('/view-my-reimbs');
            ;
            
        }
        else{
            alert("There was an error creating this reimbursement.")
        }
    }
    

    return(<>
  

    <label style= {{"marginLeft":"2%"}} htmlFor="nameInput">Brief Description of the Reimbursement</label>
    <input style= {{"marginLeft":"2%"}} className="form-control my-1" ref = {nameInput} type = "text" id="nameInput" placeholder="Flight to Australia"/><br/>

    <label style= {{"marginLeft":"2%"}} htmlFor="dateInput">Date</label>
    <input style= {{"marginLeft":"2%"}} className = "form-control my-1" ref = {dateInput} type = "text" id="dateInput" placeholder="01/01/2020"/><br/>

    <label style= {{"marginLeft":"2%"}} htmlFor="amountInput">Amount</label>
    <input style= {{"marginLeft":"2%"}} className = "form-control my-1" ref = {amountInput} type = "number" id="amountInput" placeholder="1235"/><br/>

    <button style= {{"marginLeft":"2%"}} type="button" className ="btn btn-primary" onClick = {createReimb}>Add Reimbursement</button>

   
    </>)
}