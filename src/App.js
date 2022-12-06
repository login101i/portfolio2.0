import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, AboutPage, PortfoliosPage, BlogsPage, ContactPage, BlogArticle1, BlogArticle2 } from './Pages';
import { NavbarBurger } from './Components';
import './App.scss';

function App() {
	const [navToggle, setNavToggle] = useState(false);

	const handleNavBar = () => {
		setNavToggle(!navToggle);
	};
	const mainContentClick = () => {
		setNavToggle(false);
	};

	return (
		<div className="App">
			<NavbarBurger onClick={handleNavBar} navToggle={navToggle} />
			<div className={`main-content ${navToggle ? 'background-gray' : ''}`} onClick={mainContentClick}>
				<div className="content">
					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
						<Route path="/about" exact>
							<AboutPage />
						</Route>
						<Route path="/portfolios" exact>
							<PortfoliosPage />
						</Route>
						<Route path="/blogs" exact>
							<BlogsPage />
						</Route>
						<Route path="/blog/continuous_integration" exact>
							<BlogArticle1 />
						</Route>
						<Route path="/blog/responsive_design" exact>
							<BlogArticle2 />
						</Route>
						<Route path="/contact" exact>
							<ContactPage />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
