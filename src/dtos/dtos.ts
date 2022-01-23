export interface Employee{
    id: string;
    fname: string;
    lname: string;
    manager:boolean;
    reimbursements: Reimbursement[];
}

export interface Reimbursement{
    id: string;
    name:string;
    date:string;
    amount: number;
    status: string;
    notes?: string;
}
export interface Login{
    employeeid:string;
    id:string;
    username:string;
    password:string;
}