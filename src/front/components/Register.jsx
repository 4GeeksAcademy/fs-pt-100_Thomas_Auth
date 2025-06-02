import React, {useState} from "react"
import userServices from "../services/userServices";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Register = () => {

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
        console.log(formData)
        try {
            const result = await userServices.register(formData);
            navigate("/private");
        } catch (err) {
            console.error(err);
        }
        // userServices.register(formData).then(data => data.success && navigate("/login"));

    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <input placeholder="email" name="email" value={formData.email} onChange={handleChange} type="email" className="form-control my-2"/>
            <input placeholder="password" name="password" value={formData.password} onChange={handleChange} type="password" className="form-control my-2"/>
            <input type="submit" className="btn btn-primary w-100"/>
        </form>
    )
}