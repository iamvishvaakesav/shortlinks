import "./App.css";
import { useContext, useEffect } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Welcome from "./pages/Welcome/Welcome";
import AuthRoutes from "./routes/AuthRoutes";
import useAuth from "./hooks/useAuth";
import axios from "./api/axios";
function App() {
	const navigate = useNavigate();
	const { auth, setAuth }: any = useAuth();
	useEffect(() => {
		axios.get("/auth/refresh", { withCredentials: true }).then((response) => {
			if (response.data.accessToken) {
				console.log(response.data.accessToken);
				setAuth(response.data.accessToken);
			}
		});
	}, [auth]);
	useEffect(() => {
		if (auth) {
			navigate("/home");
		}
	}, [auth, setAuth]);
	return (
		<Routes>
			<Route element={<AuthRoutes />}>
				<Route path="/home" element={<Home />}></Route>
			</Route>
			<Route path="/" element={<Welcome />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<Signup />}></Route>
		</Routes>
	);
}

export default App;
