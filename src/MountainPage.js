import './MountainPage.css';
import DropDownFilterForm from "./DropDownFilterForm.js";
import { useState, useEffect } from "react"
import MountainCard from './MountainCard';

const Mountain = () => {
	const [mountainData, setMountainData] = useState([]);

	const getMountainData = (path) => {
		fetch(path)
			.then(response => response.json())
			.then(response => setMountainData(response.mountains))
	}

	useEffect(() => {
		getMountainData("./data/mountains.json")
	}, [])

	return (
		// <h2> MountainPage</h2>
		<section>
			<DropDownFilterForm data={mountainData} />
			<MountainCard />
		</section>
	);
}

export default Mountain;