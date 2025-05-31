import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {

	const navigate = useNavigate()

	const handleProfile = () => {
		localStorage.getItem("token") ? navigate("/private") : navigate("/login")
	}

	return (
		<div className="text-center mt-5">
			<h2>Welcome, go to <Link to={"/register"}>Register</Link> if you are new. else <Link to={"/login"}>Login</Link></h2>
			<h2>Or you can go to your <span className="nav nav-link" onClick={handleProfile}>profile</span></h2>
		</div>
	);
}; 