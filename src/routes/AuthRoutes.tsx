import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function AuthRoutes() {
	const { auth }: any = useAuth();
	const location = useLocation();
	return (
		<>
			{auth ? (
				<Outlet />
			) : (
				<Navigate to={"/login"} state={{ from: location }} replace />
			)}
		</>
	);
}

export default AuthRoutes;
