import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleValueChange = (
	setterFuncation: Dispatch<SetStateAction<string>>,
	e: ChangeEvent<HTMLInputElement>
) => {
	setterFuncation(e.target.value);
};
