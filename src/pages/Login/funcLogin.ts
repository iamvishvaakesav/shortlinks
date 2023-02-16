import { Dispatch, FormEvent, SetStateAction } from "react";
import axios from "../../api/axios";

export const login = (
	e: FormEvent<HTMLFormElement>,
	email: string,
	password: string,
	setAuth: Dispatch<SetStateAction<boolean>>
) => {
	e.preventDefault();
	// write the server function

	axios.post("/auth/login", { email, password }).then((response) => {
		if (response.status == 200) {
			setAuth(response.data.accessToken);
		}
	});
};
