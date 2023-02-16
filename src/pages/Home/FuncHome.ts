import { AxiosInstance } from "axios";
import { Dispatch, SetStateAction } from "react";

export const handleSubmit = async (
	Url: string,
	axiosPrivate: AxiosInstance,
	setUpdated: Dispatch<SetStateAction<number>>
): Promise<void> => {
	const response = await axiosPrivate.post("/shorten", { fullUrl: Url });
	setUpdated((prevState) => {
		return (prevState = prevState + 1);
	});
};

export const getLinks = (
	axiosPrivate: AxiosInstance,
	setLinks: Dispatch<SetStateAction<any>>
) => {
	fetchLinks(axiosPrivate).then((data) => {
		setLinks(data.shortLinks);
	});
};

const fetchLinks = async (axiosPrivate: AxiosInstance) => {
	const response = await axiosPrivate.get("/shorten/get");
	return response.data;
};
