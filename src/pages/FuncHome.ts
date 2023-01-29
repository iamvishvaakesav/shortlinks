import { FormEvent } from "react";

export const handleSubmit = (Url: string): void => {
	fetch("http://localhost:3000/shorten", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			fullUrl: Url,
		}),
	});
};
