import "./NavBar.css"
import "./LinkedItem"
import LinkedItem from "./LinkedItem";
import PageLogo from "./PageLogo";



const NavBar = () => {
	return (
		<header className='NavBar'>
			<h2 className='test'>Proof Is In The Pudding</h2>

			<ul>
				<li>
					<p>LOGO HERE</p>
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
		</header>
	);
}

export default NavBar