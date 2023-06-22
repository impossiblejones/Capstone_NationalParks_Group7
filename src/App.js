import './App.css';
import HomePage from './HomePage';
import NavBar from './NavBar.js';
import MountainPage from './MountainPage';
import { useState } from 'react';
import NationalParksPage from './NationalParksPage';

function App() {
	const [currentPage, setCurrentPage] = useState("Home")
	const changePageHandler = event => {
		event.preventDefault()
		setCurrentPage(event.target.name)
	}

	return (
		<div className="App">
			<NavBar changePageHandler={changePageHandler} />
			<main>
				{(() => {
					switch (currentPage) {
						case 'Home':
							return <HomePage />
						case 'Mountains':
							return <MountainPage />
						case 'National Parks':
							return <NationalParksPage />
						default:
							return <HomePage />
					}
				})()}
			</main>
		</div>
	);
}

export default App;
