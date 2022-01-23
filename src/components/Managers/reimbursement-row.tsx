import { Navigate, useNavigate } from "react-router-dom";
import { Reimbursement } from "../../dtos/dtos";

export default function ReimbursementRow(props:Reimbursement){

    const{id, name, date, amount, status, notes} = props;

    return(<tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{date}</td>
        <td>{amount}</td>
        <td>{status}</td>
        <td>{notes}</td>
    
    </tr>)
}