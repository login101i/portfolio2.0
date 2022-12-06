import React, { useState } from "react";
import FadeIn from "react-fade-in";
import Title from "../Components/Tittle";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import portfoliosData from "../data/portfoliosData";

const allCategories = [
	"All",
	...new Set(portfoliosData.map((item) => item.category))
];

const PortfoliosPage = () => {
	const [categories, setCategories] = useState(allCategories);
	const [portoflios, setPortfolios] = useState(portfoliosData);
	const [showGrey, setShowGrey] = useState(false);

	const filter = (category) => {
		if (category === "All") {
			setPortfolios(portfoliosData);
			return;
		}
		const filteredData = portfoliosData.filter((item) => {
			return item.category === category;
		});
		setPortfolios(filteredData);
	};

	return (
		<>
			<div className={` PortfolioPage ${showGrey ? "grey" : ""}`}>
				<div className="title">
					<Title title={"portfolios"} span={"portfolios"} />
				</div>
				<div className="portfolios">
					<Categories filter={filter} categories={categories} />
					<FadeIn transitionDuration={1000}>
						<MenuItems portfoliosData={portoflios} />
					</FadeIn>
				</div>
			</div>
		</>
	);
};

export default PortfoliosPage;
