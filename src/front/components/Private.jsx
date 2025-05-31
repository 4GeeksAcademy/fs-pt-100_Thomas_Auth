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
            <h2>This is private!</h2>
            <h3>Only for the eyes of: {store.user?.email}</h3>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};