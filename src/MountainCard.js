import './MountainCard.css'


const MountainCard = ({ filterMountainData }) => {
	const {
		name,
		elevation,
		effort,
		img,
		desc,
		coords: { lat, lng }
	} = filterMountainData

	return (
		<div className="MountainCard">
			<div>
				<img src={'./images/mountains/' + img} />
				<h2>{name}</h2>
			</div>
			<article className='mountainData'>
				<p>elevation: {elevation} ft</p>
				<p>effort: {effort}</p>
				<p>Description: {desc}</p>
				<p>coords ( Latitude: {lat}, Longitude: {lng})</p>
			</article>
		</div>
	);
}

export default MountainCard;