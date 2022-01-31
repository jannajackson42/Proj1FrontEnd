import React, { useEffect, useState } from 'react';
import CreateReimbursementPage from './components/Employees/create-reimb-page';
import ReimbViewer from './components/Managers/reimb-viewer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './components/login/login-page';
import IndivReimbViewer from './components/Employees/indiv-reimb-viewer';
import CreateReimbursementForm from './components/Employees/create-reimbursement';
import ManagerHomePage from './components/Managers/manager-homepage';
import EmployeeHomePage from './components/Employees/employee-homepage';
import ApproveorDeny from './components/Managers/approve-deny';


export default function App() {

  const [user, setUser] = useState({
    username:localStorage.getItem("username") ?? "",
    password:localStorage.getItem("password") ?? "",
    employeeID:localStorage.getItem("employeeID")?? "",
    isManager:localStorage.getItem("isManager")?? ""
  })

  


  return(<>

<BrowserRouter>
      <Routes>
        <Route path ='/' element = {<Navigate to= "/login"/>}/>
        <Route path = "/login" element = {<LoginPage updateUser={setUser}/>}/>
          <Route path = "/view-my-reimbs" element={<IndivReimbViewer/>}/>
          <Route path = "/view-all-reimbs/" element = {<ReimbViewer/>}/>
          <Route path = "/create-new-reimb" element = {<CreateReimbursementPage/>}/>
          <Route path = "/employee-home"element={<EmployeeHomePage/>}/>
          <Route path = "/manager-home" element = {<ManagerHomePage/>}/>
          <Route path = "/approve-deny" element = {<ApproveorDeny/>}/>
      </Routes>
    </BrowserRouter>

</>)
}