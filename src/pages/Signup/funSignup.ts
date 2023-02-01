import { Dispatch, SetStateAction, ChangeEvent, FormEvent } from "react";
import { User } from "./userModel";

export const handleSignupValueChange = (
	user: any,
	setterFuncation: Dispatch<SetStateAction<User>>,
	e: ChangeEvent<HTMLInputElement>
) => {
	setterFuncation({ ...user, [e.target.name]: e.target.value });
};

export const handleSignupSubmit = (
	e: FormEvent<HTMLFormElement>,
	user: any
) => {
	e.preventDefault();
	console.log(user);
};
