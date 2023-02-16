import { useState, useEffect } from "react";
import LinkComponent from "../../components/Link/LinkComponent";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { handleSubmit, getLinks } from "./funcHome";
import "./Home.css";

function Home() {
	const [Url, setUrl] = useState("");
	const axiosPrivate = useAxiosPrivate();
	const [links, setLinks] = useState([{}]);
	const [updated, setUpdated] = useState(0);

	useEffect(() => {
		getLinks(axiosPrivate, setLinks);
	}, [updated]);

	return (
		<div className="HomePrimary__container">
			<div className="UrlForm__continer">
				<h2 className="title">Link Shortener</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(Url, axiosPrivate, setUpdated);
					}}
					className="UrlForm__form"
				>
					<input
						type="text"
						placeholder="Enter your url"
						className="UrlForm__input"
						onChange={(e) => {
							setUrl(e.target.value);
						}}
					/>
					<button type="submit" className="UrlForm__submit">
						Create
					</button>
				</form>
			</div>
			<div className="LinkSuper__container">
				<div className="LinkSuper__header">
					<div> Full Url</div>
					<div> Short Url</div>
					<div> Clicks</div>
				</div>
				{links ? (
					links.map((link) => {
						return (
							<>
								<LinkComponent link={link} />
							</>
						);
					})
				) : (
					<div>Create some links</div>
				)}
			</div>
		</div>
	);
}

export default Home;
