import "./LinkComponent.css";
function LinkComponent({ link }: any) {
	return (
		<div className="Link__parent">
			<div className="FullURL__container">
				<p>Lorem ipsum dolor sit amet consectetur.</p>
			</div>
			<div className="ShortUrl__container">
				<p>Lorem, ipsum dolor.</p>
			</div>
			<div className="Count__container">
				<p>0</p>
			</div>
		</div>
	);
}

export default LinkComponent;
