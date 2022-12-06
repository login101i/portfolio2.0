import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

function PortfolioDescription({
	portfoliosData,
	isDescription,
	handleDescription,
	portfolioIndex
}) {
	const [description, setDescripion] = useState([]);

	const data = portfoliosData.filter(
		(portfolio) => portfolio.id === portfolioIndex
	);

	return (
		<div
			className={`description ${
				isDescription ? "scrollBlock" : "descriptionHidden"
			}`}
		>
			<div onClick={handleDescription} className="closeIcon">
				close
			</div>
			<div className="descriptionWrapper">
				<div className="description-header ">{data[0]?.description.header}</div>
			</div>
		</div>
	);
}

export default PortfolioDescription;
