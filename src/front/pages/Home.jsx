import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {

	const navigate = useNavigate()

	const handleProfile = () => {
		localStorage.getItem("token") ? navigate("/private") : navigate("/login")
	}

	return (
		<div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
			<div className="card border-primary text-center">
				<div className="card-body d-flex flex-column justify-content-center">
					<h2 className="card-title mb-3">Welcome to my secure site!</h2>
					<h4 className="card-subtitle mb-4">From here, you can:</h4>
					<ul className="list-unstyled mb-0">
						<li className="mb-2"><Link to={"/register"} className="text-primary text-decoration-none">Register</Link></li>
						<li className="mb-2"><Link to={"/login"} className="text-primary text-decoration-none">Login</Link></li>
						<li className="mb-2">Go directly to your <span className="text-primary text-decoration-none" onClick={handleProfile}>
							secret page</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}; 