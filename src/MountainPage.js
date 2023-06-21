import './MountainPage.css';
import DropDownFilterForm from "./DropDownFilterForm.js";
import { useState, useEffect } from "react"


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
		<DropDownFilterForm data={mountainData} />


	);
}

export default Mountain;