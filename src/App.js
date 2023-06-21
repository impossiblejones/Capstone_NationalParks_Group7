import './App.css';
import HomePage from './HomePage';
import NavBar from './NavBar.js';
import MountainPage from './MountainPage';

// import useState from React

function App() {
	return (
		<div className="App">

			<NavBar />
			<body>
				<HomePage />
			</body>

			<MountainPage />
		</div>

	);
}

export default App;
