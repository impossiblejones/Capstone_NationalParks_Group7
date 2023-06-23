import './NationalParksPage.css';
import { useState, useEffect } from 'react';



const NationalParksPage = () => {

	const [stateList, setStateList] = useState([]);
	const [parkTypeList, setParkTypeList] = useState([]);
	const [nationalParksData, setNationalsParksData] = useState({})
	const [filterValues, setFilterValues] = useState({})




	const getListData = (path, listSetFunc) => {
		fetch(path)
			.then(response => response.json())
			.then(response => listSetFunc(response))
	}

	const getNationalParksData = (path) => {
		fetch(path)
			.then(response => response.json())
			.then(response => response.parks)
			.then(response => setNationalsParksData(response))
	}

	useEffect(() => {
		getListData('./data/parktypes.json', setParkTypeList)
		getListData('./data/locations.json', setStateList)
		getNationalParksData('./data/nationalparks.json')
	}, [])

	const changeFilterHandler = event => {
		const { name, value } = event.target
		setFilterValues({ ...filterValues, [name]: value })
	}


	const submitParksFilterHandler = event => {
		event.preventDefault()
		const filterData = nationalParksData.filter(park => {
			return park.StateList === filterValues.stateList
				&& park.LocationName.includes(filterValues.TypeList)

		})
		setNationalsParksData(filterData)


	}


	return (
		<>
			<h2>National Parks</h2>
			<form onSubmit={submitParksFilterHandler}>
				<label htmlFor="StateList">State</label>
				<select name='StateList' id='StateList' onChange={changeFilterHandler}>
					{stateList.map(state => <option key={state} value={state}>{state}</option>)}
				</select>

				<label htmlFor="TypeList">Type</label>
				<select name='TypeList' id='TypeList' onChange={changeFilterHandler}>
					{parkTypeList.map(type => <option key={type} value={type}>{type}</option>)}
				</select>
				<input type='submit' />
			</form>
			<table>
				<thead>
					<tr>
						{(nationalParksData && nationalParksData.length) && Object.keys(nationalParksData[0]).slice(0, 5).map(header => {
							return <th key={header} value={header}>{header}</th>
						})}
					</tr>
				</thead>
				<tbody>
					{(nationalParksData && nationalParksData.length) && nationalParksData.map(parkDim => {
						return (
							<tr key={parkDim.locationID}>
								<td>{parkDim.LocationID}</td>
								<td>{parkDim.LocationName}</td>
								<td>{parkDim.Address}</td>
								<td>{parkDim.City}</td>
								<td>{parkDim.State}</td>

							</tr>
						)

					})}

				</tbody>


			</table>
		</>
	);
}

export default NationalParksPage;