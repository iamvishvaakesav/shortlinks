import { FormEvent } from "react";

export const handleLoginSubmit = (
	e: FormEvent<HTMLFormElement>,
	email: string,
	password: string
) => {
	e.preventDefault();
	console.log("clicked");
	// write the server function
	console.log(email, password);
};
