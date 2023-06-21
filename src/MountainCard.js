import './MountainCard.css'

const MountainTest = {
	"name": "Mt. Washington",
	"elevation": 6288,
	"effort": "Strenuous",
	"img": "Washington-StoryImage_2.jpg",
	"desc": "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
	"coords": {
		"lat": 44.270403,
		"lng": -71.303501
	}
}


const MountainCard = () => {
	return (
		<div className="MountainCard">
			<div>
				<img src='./images/mountains/Washington-StoryImage_2.jpg' />
				<h2>{MountainTest.name}</h2>
			</div>
			<article className='mountainData'>
				<p>elevation: {MountainTest.elevation} ft</p>
				<p>effort: {MountainTest.effort}</p>

				<p>Description: {MountainTest.desc}</p>
				<p>coords ( Latitude: {MountainTest.coords.lat}, Longitude: {MountainTest.coords.lng})</p>
			</article>
		</div>
	);
}

export default MountainCard;