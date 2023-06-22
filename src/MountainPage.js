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

	const [mountain, setMountain] = useState('');
	const mountainChangeHandler = (event) => {
		setMountain(event.target.value)
	}
	const [filterMountainData, setFilterMountainData] = useState([]);
	useEffect(() => {
		setFilterMountainData(mountainData.find(mnt => mnt.name === mountain))
	}, [mountain]);

	useEffect(() => {
		getMountainData("./data/mountains.json")
	}, [])

	return (
		<section>
			<DropDownFilterForm
				data={mountainData}
				mountain={mountain}
				mountainChangeHandler={mountainChangeHandler}
			/>

			<MountainCard
				data={filterMountainData}
			/>
		</section>
	);
}

export default Mountain;