import { useState } from "react";

import { NavBar } from "../Components/";

function NavbarBurger() {
	const [navToggle, setNavToggle] = useState(false);

	const navClick = () => {
		setNavToggle(!navToggle);
	};
	return (
		<>
			<div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
				<NavBar />
			</div>
			<div className="nav-btn" onClick={navClick}>
				<div className="lines-1"></div>
				<div className="lines-2"></div>
				<div className="lines-3"></div>
			</div>
		</>
	);
}

export default NavbarBurger;
