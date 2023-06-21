import "./HomePage.css"
import LinkedItem from "./LinkedItem.js"

const HomePage = () => {
	return (
		<>
			<header>
				<img src="./images/galaxy/galaxy.jpg" alt="Galaxy with stars" />
				<div class="main">
				</div>
			</header>

			<p>Why not keep your feet on solid ground by exploring our
				<span
					style={{ display: 'inline-block', paddingLeft: '3px' }}>
					<LinkedItem linkText=" National Parks" />
				</span>
				.  If you really wanna see the stars, we also have some excellent
				<span
					style={{ display: 'inline-block', paddingLeft: '3px' }}>
					<LinkedItem linkText=" Mountains" />
				</span>.
			</p>

		</>
	);
}

export default HomePage;