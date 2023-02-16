import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { handleValueChange } from "../../func/handleValueChange";
import { login } from "./funcLogin";

function Login() {
	const { setAuth, auth }: any = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassowrd] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (auth) {
			navigate("/home");
		}
	}, [auth]);

	return (
		<div>
			<form
				onSubmit={(e) => {
					login(e, email, password, setAuth);
				}}
			>
				<div className="formControl">
					<h2>Email</h2>
					<input
						type="email"
						onChange={(e) => {
							handleValueChange(setEmail, e);
						}}
					/>
				</div>
				<div className="formControl">
					<h2>Password</h2>
					<input
						type="password"
						onChange={(e) => {
							handleValueChange(setPassowrd, e);
						}}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
