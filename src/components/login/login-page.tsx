import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isMemberName } from "typescript";


export default function LoginPage(props:{updateUser:Function}){

        const usernameInput = useRef(null);
        const passwordInput = useRef(null);
        const navigate = useNavigate();
        
        async function login(){
            const loginPayload = {
                username: usernameInput.current.value,
                password: passwordInput.current.value
            }

            const response = await fetch('http://db16-73-24-92-136.ngrok.io/login',
                {method:'PATCH',
                body:JSON.stringify(loginPayload),
                headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }})
            if(response.status === 400){
                alert("Incorrect Username or Password")
            }
            

            const employee = await response.json();
            const id = employee.id;

            props.updateUser({username:employee.username, password:employee.password, employeeID:id, isManager:employee.manager})
            localStorage.setItem("username",employee.username)
            localStorage.setItem("password",employee.password)
            localStorage.setItem("employeeID",employee.id)
            localStorage.setItem("isManager", employee.manager)
            localStorage.setItem("loggedIn","True");

            if ( employee.manager == "True"){
                navigate("/manager-home");
            } else{
                navigate("/employee-home")
            }  
        }
        

        return(<>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a style={{"marginLeft":"47%"}} className="navbar-brand">Login</a>
            </nav>
        

        <div className="d-flex flex-column align-items-center w-100 form-group">
            
            <label className="form-label my-2">Please Enter Your Username and Password</label>
                <div className="form-floating ">
                    <input ref={usernameInput} className = "form-control" type = "text" id="usernameInput" placeholder="username"/><br/>
                    <label htmlFor="usernameInput" className="form-label d-inline-flex">Username</label>
                </div>
                <div className="form-floating">
                    <input ref = {passwordInput} className = "form-control" type = "password" id = "passwordInput" placeholder = "password"/><br/>
                    <label htmlFor="passwordInput" className = "form-label">Password</label>
                </div>
                <button type="button" className="btn btn-primary" onClick={login}>Login</button>
        </div>
    

        
        
        
        

       
    
         
        </>)


}