import "./NavBar.css"
import "./LinkedItem"
import LinkedItem from "./LinkedItem";
import PageLogo from "./PageLogo";



const NavBar = ({changePageHandler}) => {
	return (
		<nav className='NavBar'>
			<ul>
				<li>
					<PageLogo logoNum={0} />
				</li>
				<li>
					<LinkedItem linkText={"Home"} isActive={true} changePageHandler={changePageHandler} />
				</li>
				<li>
					<LinkedItem linkText={"Mountains"} isActive={false} changePageHandler={changePageHandler} />
				</li>
				<li>
					<LinkedItem linkText={"National Parks"} isActive={false} changePageHandler={changePageHandler} />
				</li>
			</ul>
		</nav>
	);
}

export default NavBar