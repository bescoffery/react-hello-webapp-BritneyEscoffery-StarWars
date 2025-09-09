import { Link } from "react-router-dom";
import { Favorites } from "../pages/Favorites";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">STAR WARS DATABANK</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
				<Favorites />
			</div>
		</nav>
	);
};