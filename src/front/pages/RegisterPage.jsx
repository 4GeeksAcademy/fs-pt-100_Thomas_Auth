import { Register } from "../components/Register"
import { Link } from "react-router-dom"

export const RegisterPage = () => {



    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="card border-primary text-center">
                <div className="card-body d-flex flex-column justify-content-center">
                    <Register />
                    <Link to="/login">Already have an account?</Link>
                </div>
            </div>
        </div>
    )
}