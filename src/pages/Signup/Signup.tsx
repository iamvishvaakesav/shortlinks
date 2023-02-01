import { useState } from "react";
import { handleSignupSubmit, handleSignupValueChange } from "./funSignup";

import { User } from "./userModel";

function Signup() {
	const [user, setUser] = useState({});
	// add validation

	return (
		<div>
			<form onSubmit={(e) => handleSignupSubmit(e, user)}>
				<div className="formControls">
					<h2>Name</h2>
					<input
						type="text"
						name="name"
						style={{ border: "2px solid black" }}
						onChange={(e) => handleSignupValueChange(user, setUser, e)}
					></input>
				</div>

				<div className="formControls">
					<h2>Email</h2>
					<input
						type="email"
						name="email"
						style={{ border: "2px solid black" }}
						onChange={(e) => handleSignupValueChange(user, setUser, e)}
					></input>
				</div>
				<div className="formControls">
					<h2>Let's set a password</h2>
					<input
						type="password"
						name="password"
						style={{ border: "2px solid black" }}
						onChange={(e) => handleSignupValueChange(user, setUser, e)}
					></input>
				</div>
				<button type="submit"> Sign In</button>
			</form>
		</div>
	);
}

export default Signup;
