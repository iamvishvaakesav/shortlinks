import { Link } from "react-router-dom";
import CloseIcon from "../Svgs/CloseIcon";
import HamburgerIcon from "../Svgs/HamburgerIcon";

import "./WelcomeNavBar.css";

function HomeNavBar() {
	return (
		<div className="Nav__wrapper">
			<div className="Logo">Short</div>
			<button
				className="Mobile__nav__toggle"
				aria-controls="primary navigation"
				aria-expanded="false"
			>
				<HamburgerIcon></HamburgerIcon>

				<CloseIcon></CloseIcon>
				<span className="Visually__hidden"> Menu</span>
			</button>
			<nav className="Primary__nav">
				<Link to="/signup" className="Nav__item">
					Sign Up
				</Link>
				<Link to="https://github.com/iamvishvaakesav" className="Nav__item">
					Git Hub
				</Link>
				<Link to="/" className="Nav__item">
					About
				</Link>
			</nav>
			<button className="Login__button">Login</button>
		</div>
	);
}

export default HomeNavBar;
