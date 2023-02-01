import { useState } from "react";
import { handleValueChange } from "../../func/handleValueChange";
import { handleLoginSubmit } from "./funcLogin";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassowrd] = useState("");

	return (
		<div>
			<form
				onSubmit={(e) => {
					handleLoginSubmit(e, email, password);
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
