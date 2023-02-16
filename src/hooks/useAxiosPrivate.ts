import { axiosPrivate } from "../api/axios";
import { useContext, useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
	const refresh = useRefreshToken();
	const { auth, setAuth }: any = useAuth();
	useEffect(() => {
		const requestIntercept = axiosPrivate.interceptors.request.use(
			(config) => {
				if (!config.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${auth}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseIntercept = axiosPrivate.interceptors.response.use(
			// if the response is good i.e if the accessToken is still valid just return it
			(response) => response,
			async (error) => {
				// accessToken invalid get the previous request
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest?.sent) {
					// get a new refresh token
					prevRequest.sent = true;
					const newAccessToken = await refresh();
					setAuth(newAccessToken);
					prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
					return axiosPrivate(prevRequest);
				}

				return Promise.reject(error);
			}
		);

		return () => {
			axiosPrivate.interceptors.request.eject(requestIntercept);
			axiosPrivate.interceptors.response.eject(responseIntercept);
		};
	}, [auth, refresh]);

	return axiosPrivate;
};

export default useAxiosPrivate;
