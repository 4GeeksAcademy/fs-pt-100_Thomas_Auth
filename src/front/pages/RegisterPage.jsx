import { Register } from "../components/Register"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    
    
    
    return(
        <>
        <Register />
        <Link to="/login">Already registered?</Link>
        </>
    )
}