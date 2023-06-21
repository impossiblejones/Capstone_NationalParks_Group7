import "./NavBar.css"
import "./LinkedItem"
import LinkedItem from "./LinkedItem";
import PageLogo from "./PageLogo";



const NavBar = () => {
	return (
		<nav className='NavBar'>
			<ul>
				<li>
					<PageLogo logoNum={0} />
				</li>
				<li>
					<LinkedItem linkText={"Home"} isActive={true} />
				</li>
				<li>
					<LinkedItem linkText={"Mountains"} isActive={false} />
				</li>
				<li>
					<LinkedItem linkText={"National Parks"} isActive={false} />
				</li>
			</ul>
		</nav>
	);
}

export default NavBar