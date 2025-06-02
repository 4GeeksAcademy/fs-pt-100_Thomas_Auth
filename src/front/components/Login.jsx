import React, {useState} from "react"
import userServices from "../services/userServices";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const {store, dispatch} = useGlobalReducer()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await userServices.login(formData);
            navigate("/private");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <input placeholder="email" name="email" value={formData.email} onChange={handleChange} type="email" className="form-control my-2"/>
            <input placeholder="password" name="password" value={formData.password} onChange={handleChange} type="password"  className="form-control my-2"/>
            <input type="submit" className="btn btn-primary w-100"/>
        </form>
    );
}