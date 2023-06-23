import './NationalParksPage.css';
import { useState, useEffect } from 'react';

console.clear();  //reset the log on load

const NationalParksPage = () => {

	const [stateList, setStateList] = useState([]);
	const [parkTypeList, setParkTypeList] = useState([]);
	const [nationalParksData, setNationalsParksData] = useState({})

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


	const submitParksFilterHandler = event => {
		event.preventDefault()
	}

	// nationalParksData[0] && console.log(Object.keys(nationalParksData[0]))

	// const nationalParkRows = () => {
	// 	let parkData = [];

	// 	for (let i = 0; i < 10; i++) {
	// 		// console.log(nationalParksData[i])
	// 		parkData.push(Object.values(nationalParksData[i]).slice(0, -1)  )
	// 		// console.log('parkData')
	// 		// console.log(parkData)
	// 	}
	// 	return parkData;
	// }
	// LocationID
	// LocationName
	// Address
	// City
	// State

	// {
	//   "LocationID": "ABLI",
	//   "LocationName": "Abraham Lincoln Birthplace National Historical Park",
	//   "Address": "2995 Lincoln Farm Road",
	//   "City": "Hodgenville",
	//   "State": "Kentucky",
	//   "ZipCode": 42748,
	//   "Phone": "(270) 358-3137",
	//   "Fax": "(270) 358-3874",
	//   "Latitude": 37.535671,
	//   "Longitude": -85.7340637,
	//   "Location":{"coordinates": [-85.7340637,37.535671],"type":"Point"}
	// }




	return (
		<>
			<h2>National Parks</h2>
			<form onSubmit={submitParksFilterHandler}>
				<label htmlFor="StateList">State</label>
				<select name='StateList' id='StateList'>
					{stateList.map(state => <option key={state} value={state}>{state}</option>)}
				</select>

				<label htmlFor="TypeList">Type</label>
				<select name='TypeList' id='TypeList'>
					{parkTypeList.map(type => <option key={type} value={type}>{type}</option>)}
				</select>
				<input type='submit' />
			</form>
			<table>
				<thead>
					<tr>
						{(nationalParksData && nationalParksData.length) && Object.keys(nationalParksData[0]).slice(0,5).map(header => {
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
						// return (
						// 	<tr key={parkDim[0]}>
						// 		{parkDim[0] && parkDim.map(dim => {
						// 			// return <td>test</td>
						// 			return (<td value={dim}>{dim}</td>)
						// 		})}
						// 	</tr>
						// )
					})}

				</tbody>


			</table>
		</>
	);
}

export default NationalParksPage;