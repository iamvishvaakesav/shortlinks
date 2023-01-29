import { useState } from "react";
import { handleSubmit } from "./FuncHome";

function Home() {
	const [Url, setUrl] = useState("");

	return (
		<>
			<div className="UrlForm__continer">
				<h2 className="title">Link Shortener</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(Url);
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
		</>
	);
}

export default Home;
