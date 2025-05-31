import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Register } from "../components/Register.jsx";
import { Login } from "../components/Login.jsx";
import { Private } from "../components/Private.jsx";
import userServices from "../services/userServices.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	const handleClick = () => {
		userServices.getUserInfo().then(data=> dispatch({type: "get_user_info", payload: data})
		)
	}

	useEffect(() => {
		loadMessage()
	}, [])

	return (
		<div className="text-center mt-5">
			<h2>First register or log in</h2>
			<Register />
			<Login />
			<h2>then</h2>
			<button onClick={handleClick}>Get your info after login/registering</button>
			{store.user && <Private />}
		</div>
	);
}; 