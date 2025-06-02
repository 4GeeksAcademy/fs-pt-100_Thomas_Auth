import { Login } from "../components/Login"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    
    return(
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="card border-primary text-center">
                <div className="card-body d-flex flex-column justify-content-center">
                    <Login />
                    <Link to="/register">Need an account?</Link>
                </div>
            </div>
        </div>
    )
}