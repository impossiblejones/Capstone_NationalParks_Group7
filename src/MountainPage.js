import './MountainPage.css';
import DropDownFilterForm from "./DropDownFilterForm.js";
import { useState, useEffect } from "react"
import MountainCard from './MountainCard';

const Mountain = () => {
	const [mountainData, setMountainData] = useState([]);

	const getMountainData = (path) => {
		fetch(path)
			.then(response => response.json())
			.then(response => {
				setMountainData(response.mountains)
				setMountain(response.mountains.sort((a, b) => a.name > b.name ? 1 : -1)[0].name)
				setFilterMountainData(response.mountains.sort((a, b) => a.name > b.name ? 1 : -1)[0])
			})
	}

	const [mountain, setMountain] = useState('');
	const mountainChangeHandler = (event) => {
		setMountain(event.target.value)
		setFilterMountainData(mountainData.find(mnt => mnt.name === event.target.value))
	}
	const [filterMountainData, setFilterMountainData] = useState({});

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
			{filterMountainData && filterMountainData.name
				? <MountainCard data={filterMountainData} />
				: null}
		</section>
	);
}

export default Mountain;