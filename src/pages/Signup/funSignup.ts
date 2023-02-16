import axios from "../../api/axios";
import { Dispatch, SetStateAction, ChangeEvent, FormEvent } from "react";
import { NavigateFunction } from "react-router-dom";

import { User } from "./userModel";

export const handleSignupValueChange = (
	user: any,
	setterFuncation: Dispatch<SetStateAction<User>>,
	e: ChangeEvent<HTMLInputElement>
) => {
	setterFuncation({ ...user, [e.target.name]: e.target.value });
};

export const handleSignupSubmit = async (
	e: FormEvent<HTMLFormElement>,
	user: any,
	canNavigate: Dispatch<SetStateAction<boolean>>,
	setAuth:any
) => {
	e.preventDefault();
	// register user
	register(user, canNavigate,setAuth);
};

const register = async (
	user: any,
	canNavigate: Dispatch<SetStateAction<boolean>>,
	setAuth:any
) => {
	axios
		.post("/auth/signup", { user })
		.then((res) => {
			setAuth(res.data.accessToken!);
			if (res.status == 201) {
				canNavigate(true);
			}
		})
		.catch((err) => {
			canNavigate(false);
		});
};
