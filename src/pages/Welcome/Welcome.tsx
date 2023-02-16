import HomeNavBar from "../../components/WelcomeNavBar/WelcomeNavBar";
import "./Welcome.css";

function Welcome() {
	return (
		<div className="Welcome__container">
			<header>
				<HomeNavBar></HomeNavBar>
			</header>
			<body>
				<section className="Welcom__copy">
					<h1 className="Welcome__title">Get Those Links Shortened</h1>
					<h3 className="Welcome__title__slug">
						All your short links under one roof and completely for free
					</h3>
				</section>
			</body>
		</div>
	);
}

export default Welcome;
