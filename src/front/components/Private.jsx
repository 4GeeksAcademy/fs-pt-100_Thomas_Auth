import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

export const Private = () => {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate()



    useEffect(() => {
        if (!localStorage.getItem("token")) {
            return navigate("/login")
        }

        userServices.getUserInfo().then(data => {
            localStorage.setItem("user", JSON.stringify(data))
            dispatch({ type: "get_user_info", payload: data })
        })
    }, [])

    const handleLogout = () => {
        dispatch({type:"logout"})
        navigate("/")
    }

    return (
        <>
            <h2 className="card-title mb-3">This page is top, top secret! Don't tell anyone</h2>
            <button onClick={handleLogout} className="btn btn-primary w-100">Logout</button>
        </>
    );
};