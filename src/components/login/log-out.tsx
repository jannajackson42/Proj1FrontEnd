import { useNavigate } from "react-router-dom";

export default function LogOut(){
    const logout = ()=> localStorage.clear();
    const refreshPage = ()=>{window.location.reload()}
    const navigate = useNavigate();

    function logOut(){
        logout();
        navigate("/login")
    }


    return(<>
    <button type = "button" className ="mx-2 btn btn-outline-secondary" onClick = {()=>logOut()}>Log Out</button>
    
    </>)
}