import React, { useState } from 'react'
import Title from '../Components/Tittle'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import portfolios from '../Components/allportfolios'



const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

console.log(allCategories)



const PortfoliosPage = () => {
    const [categories, setCategories] = useState(allCategories)
    const [portoflioss, setPortfolios] = useState(portfolios)

    const filter = (category) => {
        if (category === 'All') {
            setPortfolios(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setPortfolios(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={"portfolio"} span={"portfolios"} />
            </div>
            <div className="portfolios">
                <Categories filter={filter} categories={categories} />
                <MenuItems portoflioss={portoflioss} />

            </div>
        </div>
    )
}

export default PortfoliosPage
