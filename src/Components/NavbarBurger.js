import { NavBar } from '../Components/';

function NavbarBurger({ onClick, navToggle }) {
	return (
		<div onClick={onClick}>
			<div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
				<NavBar />
			</div>
			<div className="nav-btn">
				<div className="lines-1" />
				<div className="lines-2" />
				<div className="lines-3" />
			</div>
		</div>
	);
}

export default NavbarBurger;
