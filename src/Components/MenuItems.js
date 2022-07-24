import React, { useState } from "react";

import PortfolioDescription from "./PortfolioDescription";

function MenuItems({ portfoliosData }) {
	const [isDescription, setIsDescription] = useState(false);
	const [portfolioIndex, setPortfolioIndex] = useState("");

	const handleDescription = (index) => {
		setIsDescription(!isDescription);
		setPortfolioIndex(index);
	};

	return (
		<div className="portfolios">
			{portfoliosData.map((portfolio, index) => (
				<div
					className="portfolio"
					key={portfolio.id}
					style={{ margin: "10px" }}
				>
					<div className="image-data">
						<img
							src={portfolio.image}
							alt=""
							style={{ objectFit: "contain" }}
							className="image"
						/>
						<ul className="hover-items">
							{portfolio.description && (
								<li onClick={() => handleDescription(index)}>
									<a>Show descripion</a>
								</li>
							)}
							{portfolio.link2 && (
								<li>
									<a
										href={portfolio.link2}
										style={{ textAlign: "center" }}
										target="_blank"
									>
										Source on github
									</a>
								</li>
							)}
							{portfolio.link1 && (
								<li>
									<a href={portfolio.link1} target="_blank">
										Visit online
									</a>
								</li>
							)}
						</ul>
					</div>

					<PortfolioDescription
						portfoliosData={portfoliosData}
						isDescription={isDescription}
						handleDescription={handleDescription}
						portfolioIndex={portfolioIndex}
					/>
				</div>
			))}
		</div>
	);
}

export default MenuItems;
