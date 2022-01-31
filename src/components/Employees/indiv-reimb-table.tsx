import { useEffect } from "react";
import { useState } from "react";
import { Reimbursement } from "../../dtos/dtos"
import ReimbursementRow from "./indiv-reimb-row"


export default function ReimbTable(){

    const [reimbursements,setReimbursements] = useState([]);

    const tableRows = reimbursements.map(b=><ReimbursementRow key={b.id}{...b}/>)

    async function getReimbs(){
        const id = localStorage.getItem("employeeID"); 
        const response = await fetch(`http://db16-73-24-92-136.ngrok.io/reimbursements/${id}`)
        const reimbursements:Reimbursement[] = await response.json();
        setReimbursements(reimbursements);
    }

    useEffect(()=>{
        getReimbs();
    },[])


    return(<>
    <table className = "table table-hover">
        <thead>
            <tr>
                <th>Reimbursement ID</th>
                <th>Description</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            {tableRows}
        </tbody>

    </table>
    </>)
}