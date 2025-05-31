import { Login } from "../components/Login"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    
    return(
        <>
        <Login />
        <Link to="/register">Need an account?</Link>
        </>
    )
}